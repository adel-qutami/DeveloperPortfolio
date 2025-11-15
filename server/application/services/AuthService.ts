import { injectable, inject } from "tsyringe";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UnitOfWork } from "../../infrastructure/repositories/UnitOfWork";
import { CreateUserInput, User, UserPublic, UserRole } from "../../domain/entities/User";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production";
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "your-refresh-secret-key";
const JWT_EXPIRES_IN = "15m";
const JWT_REFRESH_EXPIRES_IN = "7d";

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  user: UserPublic;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

@injectable()
export class AuthService {
  constructor(@inject(UnitOfWork) private unitOfWork: UnitOfWork) {}

  async register(data: CreateUserInput): Promise<AuthTokens> {
    const existingUser = await this.unitOfWork.users.findByEmail(data.email);
    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await this.unitOfWork.users.create({
      ...data,
      password: hashedPassword,
      role: data.role || UserRole.USER,
    });

    return this.generateTokens(user);
  }

  async login(credentials: LoginCredentials): Promise<AuthTokens> {
    const user = await this.unitOfWork.users.findByEmail(credentials.email);
    if (!user) {
      throw new Error("Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }

    return this.generateTokens(user);
  }

  async refreshToken(refreshToken: string): Promise<AuthTokens> {
    try {
      const decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET) as { userId: string };
      const user = await this.unitOfWork.users.findById(decoded.userId);

      if (!user) {
        throw new Error("User not found");
      }

      return this.generateTokens(user);
    } catch (error) {
      throw new Error("Invalid refresh token");
    }
  }

  async getUserById(id: string): Promise<UserPublic | null> {
    const user = await this.unitOfWork.users.findById(id);
    if (!user) return null;

    return this.toPublicUser(user);
  }

  verifyToken(token: string): { userId: string; role: UserRole } {
    try {
      const decoded = jwt.verify(token, JWT_SECRET) as { userId: string; role: UserRole };
      return decoded;
    } catch (error) {
      throw new Error("Invalid token");
    }
  }

  private generateTokens(user: User): AuthTokens {
    const accessToken = jwt.sign(
      { userId: user.id, role: user.role },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    const refreshToken = jwt.sign(
      { userId: user.id },
      JWT_REFRESH_SECRET,
      { expiresIn: JWT_REFRESH_EXPIRES_IN }
    );

    return {
      accessToken,
      refreshToken,
      user: this.toPublicUser(user),
    };
  }

  private toPublicUser(user: User): UserPublic {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}
