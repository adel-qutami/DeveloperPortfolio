import { Router } from "express";
import { container } from "tsyringe";
import { ProjectService } from "../../../application/services/ProjectService";
import { authMiddleware, requireAdmin, AuthRequest } from "../../../application/middleware/auth.middleware";
import { z } from "zod";

const router = Router();

const createProjectSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().min(1),
  image: z.string().url(),
  technologies: z.array(z.string()),
  category: z.string().min(1),
  githubUrl: z.string().url().optional(),
  liveUrl: z.string().url().optional(),
  featured: z.boolean().optional(),
  published: z.boolean().optional(),
  order: z.number().int().min(0).optional(),
});

const updateProjectSchema = createProjectSchema.partial();

router.get("/", async (req, res, next) => {
  try {
    const projectService = container.resolve(ProjectService);
    const { category, published, featured } = req.query;

    let projects;
    if (category) {
      projects = await projectService.getProjectsByCategory(category as string);
    } else if (featured === "true") {
      projects = await projectService.getFeaturedProjects();
    } else if (published === "false") {
      projects = await projectService.getAllProjects();
    } else {
      projects = await projectService.getPublishedProjects();
    }

    res.json(projects);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const projectService = container.resolve(ProjectService);
    const project = await projectService.getProjectById(req.params.id);

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json(project);
  } catch (error) {
    next(error);
  }
});

router.post("/", authMiddleware, requireAdmin, async (req: AuthRequest, res, next) => {
  try {
    const data = createProjectSchema.parse(req.body);
    const projectService = container.resolve(ProjectService);
    const project = await projectService.createProject({
      ...data,
      authorId: req.user?.userId,
    });

    res.status(201).json(project);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Validation error", details: error.errors });
    }
    next(error);
  }
});

router.put("/:id", authMiddleware, requireAdmin, async (req, res, next) => {
  try {
    const data = updateProjectSchema.parse(req.body);
    const projectService = container.resolve(ProjectService);
    const project = await projectService.updateProject(req.params.id, data);

    res.json(project);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Validation error", details: error.errors });
    }
    next(error);
  }
});

router.delete("/:id", authMiddleware, requireAdmin, async (req, res, next) => {
  try {
    const projectService = container.resolve(ProjectService);
    await projectService.deleteProject(req.params.id);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

export default router;
