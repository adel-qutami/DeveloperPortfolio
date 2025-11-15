import { Router } from "express";
import { container } from "tsyringe";
import { AuthService } from "../../../application/services/AuthService";
import { authMiddleware, AuthRequest } from "../../../application/middleware/auth.middleware";
import { z } from "zod";

const router = Router();

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(1).max(100),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

const refreshTokenSchema = z.object({
  refreshToken: z.string().min(1),
});

router.post("/register", async (req, res, next) => {
  try {
    const data = registerSchema.parse(req.body);
    const authService = container.resolve(AuthService);
    const result = await authService.register(data);

    res.status(201).json(result);
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Validation error", details: error.errors });
    }
    if (error.message === "User with this email already exists") {
      return res.status(409).json({ error: error.message });
    }
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const data = loginSchema.parse(req.body);
    const authService = container.resolve(AuthService);
    const result = await authService.login(data);

    res.json(result);
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Validation error", details: error.errors });
    }
    if (error.message === "Invalid email or password") {
      return res.status(401).json({ error: error.message });
    }
    next(error);
  }
});

router.post("/refresh", async (req, res, next) => {
  try {
    const { refreshToken } = refreshTokenSchema.parse(req.body);
    const authService = container.resolve(AuthService);
    const result = await authService.refreshToken(refreshToken);

    res.json(result);
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Validation error", details: error.errors });
    }
    if (error.message === "Invalid refresh token") {
      return res.status(401).json({ error: error.message });
    }
    next(error);
  }
});

router.get("/me", authMiddleware, async (req: AuthRequest, res, next) => {
  try {
    const authService = container.resolve(AuthService);
    const user = await authService.getUserById(req.user!.userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
});

export default router;
