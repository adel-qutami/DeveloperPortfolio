import { injectable, inject } from "tsyringe";
import { GenericRepository } from "./GenericRepository";
import { PrismaService } from "../database/prisma.service";
import { IUserRepository } from "../../domain/repositories/IRepository";
import { User } from "../../domain/entities/User";

@injectable()
export class UserRepository extends GenericRepository<User> implements IUserRepository {
  constructor(@inject(PrismaService) prisma: PrismaService) {
    super(prisma, "user");
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
}
