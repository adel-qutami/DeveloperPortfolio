import { Router } from "express";
import { container } from "tsyringe";
import { SkillService } from "../../../application/services/SkillService";
import { authMiddleware, requireAdmin } from "../../../application/middleware/auth.middleware";
import { z } from "zod";

const router = Router();

const createSkillSchema = z.object({
  title: z.string().min(1).max(100),
  category: z.string().min(1).max(100),
  proficiency: z.number().int().min(0).max(100).optional(),
  icon: z.string().optional(),
  order: z.number().int().min(0).optional(),
});

const updateSkillSchema = createSkillSchema.partial();

router.get("/", async (req, res, next) => {
  try {
    const skillService = container.resolve(SkillService);
    const { category } = req.query;

    const skills = category
      ? await skillService.getSkillsByCategory(category as string)
      : await skillService.getAllSkills();

    res.json(skills);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const skillService = container.resolve(SkillService);
    const skill = await skillService.getSkillById(req.params.id);

    if (!skill) {
      return res.status(404).json({ error: "Skill not found" });
    }

    res.json(skill);
  } catch (error) {
    next(error);
  }
});

router.post("/", authMiddleware, requireAdmin, async (req, res, next) => {
  try {
    const data = createSkillSchema.parse(req.body);
    const skillService = container.resolve(SkillService);
    const skill = await skillService.createSkill(data);

    res.status(201).json(skill);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Validation error", details: error.errors });
    }
    next(error);
  }
});

router.put("/:id", authMiddleware, requireAdmin, async (req, res, next) => {
  try {
    const data = updateSkillSchema.parse(req.body);
    const skillService = container.resolve(SkillService);
    const skill = await skillService.updateSkill(req.params.id, data);

    res.json(skill);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Validation error", details: error.errors });
    }
    next(error);
  }
});

router.delete("/:id", authMiddleware, requireAdmin, async (req, res, next) => {
  try {
    const skillService = container.resolve(SkillService);
    await skillService.deleteSkill(req.params.id);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

export default router;
