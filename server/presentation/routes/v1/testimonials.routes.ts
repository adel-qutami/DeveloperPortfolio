import { Router } from "express";
import { container } from "tsyringe";
import { TestimonialService } from "../../../application/services/TestimonialService";
import { authMiddleware, requireAdmin, AuthRequest } from "../../../application/middleware/auth.middleware";
import { TestimonialStatus } from "../../../domain/entities/Testimonial";
import { z } from "zod";

const router = Router();

const createTestimonialSchema = z.object({
  quote: z.string().min(1),
  author: z.string().min(1).max(100),
  role: z.string().min(1).max(100),
  company: z.string().min(1).max(100),
  avatar: z.string().url().optional(),
  order: z.number().int().min(0).optional(),
});

const updateTestimonialSchema = createTestimonialSchema.partial();

router.get("/", async (req, res, next) => {
  try {
    const testimonialService = container.resolve(TestimonialService);
    const { status } = req.query;

    const testimonials = status === "approved"
      ? await testimonialService.getApprovedTestimonials()
      : await testimonialService.getAllTestimonials();

    res.json(testimonials);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const testimonialService = container.resolve(TestimonialService);
    const testimonial = await testimonialService.getTestimonialById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({ error: "Testimonial not found" });
    }

    res.json(testimonial);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = createTestimonialSchema.parse(req.body);
    const testimonialService = container.resolve(TestimonialService);
    const testimonial = await testimonialService.createTestimonial({
      ...data,
      status: TestimonialStatus.PENDING,
    });

    res.status(201).json(testimonial);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Validation error", details: error.errors });
    }
    next(error);
  }
});

router.put("/:id", authMiddleware, requireAdmin, async (req, res, next) => {
  try {
    const data = updateTestimonialSchema.parse(req.body);
    const testimonialService = container.resolve(TestimonialService);
    const testimonial = await testimonialService.updateTestimonial(req.params.id, data);

    res.json(testimonial);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Validation error", details: error.errors });
    }
    next(error);
  }
});

router.post("/:id/approve", authMiddleware, requireAdmin, async (req: AuthRequest, res, next) => {
  try {
    const testimonialService = container.resolve(TestimonialService);
    const testimonial = await testimonialService.approveTestimonial(
      req.params.id,
      req.user!.userId
    );

    res.json(testimonial);
  } catch (error) {
    next(error);
  }
});

router.post("/:id/reject", authMiddleware, requireAdmin, async (req, res, next) => {
  try {
    const testimonialService = container.resolve(TestimonialService);
    const testimonial = await testimonialService.rejectTestimonial(req.params.id);

    res.json(testimonial);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", authMiddleware, requireAdmin, async (req, res, next) => {
  try {
    const testimonialService = container.resolve(TestimonialService);
    await testimonialService.deleteTestimonial(req.params.id);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

export default router;
