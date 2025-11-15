import { Request, Response, NextFunction } from "express";
import { container } from "tsyringe";
import { AuthService } from "../services/AuthService";
import { UserRole } from "../../domain/entities/User";

export interface AuthRequest extends Request {
  user?: {
    userId: string;
    role: UserRole;
  };
}

export function authMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "No token provided" });
    }

    const token = authHeader.substring(7);
    const authService = container.resolve(AuthService);
    const decoded = authService.verifyToken(token);

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
}

export function requireAdmin(req: AuthRequest, res: Response, next: NextFunction) {
  if (!req.user || req.user.role !== UserRole.ADMIN) {
    return res.status(403).json({ error: "Admin access required" });
  }
  next();
}
