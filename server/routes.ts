import type { Express } from "express";
import { createServer, type Server } from "http";
import v1Routes from "./presentation/routes/v1/index";

export async function registerRoutes(app: Express): Promise<Server> {
  app.use("/api/v1", v1Routes);

  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "healthy",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
