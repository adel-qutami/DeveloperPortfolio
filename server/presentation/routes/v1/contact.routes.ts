import { Router } from "express";
import { container } from "tsyringe";
import { ContactSubmissionService } from "../../../application/services/ContactSubmissionService";
import { authMiddleware, requireAdmin } from "../../../application/middleware/auth.middleware";
import { z } from "zod";

const router = Router();

const createSubmissionSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  subject: z.string().min(1).max(200),
  message: z.string().min(1),
});

router.post("/", async (req, res, next) => {
  try {
    const data = createSubmissionSchema.parse(req.body);
    const contactService = container.resolve(ContactSubmissionService);
    const submission = await contactService.createSubmission(data);

    res.status(201).json({ 
      message: "Message sent successfully",
      id: submission.id 
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Validation error", details: error.errors });
    }
    next(error);
  }
});

router.get("/", authMiddleware, requireAdmin, async (req, res, next) => {
  try {
    const contactService = container.resolve(ContactSubmissionService);
    const { unread } = req.query;

    const submissions = unread === "true"
      ? await contactService.getUnreadSubmissions()
      : await contactService.getAllSubmissions();

    res.json(submissions);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", authMiddleware, requireAdmin, async (req, res, next) => {
  try {
    const contactService = container.resolve(ContactSubmissionService);
    const submission = await contactService.getSubmissionById(req.params.id);

    if (!submission) {
      return res.status(404).json({ error: "Submission not found" });
    }

    res.json(submission);
  } catch (error) {
    next(error);
  }
});

router.post("/:id/read", authMiddleware, requireAdmin, async (req, res, next) => {
  try {
    const contactService = container.resolve(ContactSubmissionService);
    await contactService.markAsRead(req.params.id);

    res.json({ message: "Marked as read" });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", authMiddleware, requireAdmin, async (req, res, next) => {
  try {
    const contactService = container.resolve(ContactSubmissionService);
    await contactService.deleteSubmission(req.params.id);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

export default router;
