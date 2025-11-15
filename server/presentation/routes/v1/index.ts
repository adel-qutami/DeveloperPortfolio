import { Router } from "express";
import projectsRouter from "./projects.routes";
import blogRouter from "./blog.routes";
import skillsRouter from "./skills.routes";
import testimonialsRouter from "./testimonials.routes";
import contactRouter from "./contact.routes";
import authRouter from "./auth.routes";

const router = Router();

router.use("/projects", projectsRouter);
router.use("/blog", blogRouter);
router.use("/skills", skillsRouter);
router.use("/testimonials", testimonialsRouter);
router.use("/contact", contactRouter);
router.use("/auth", authRouter);

export default router;
