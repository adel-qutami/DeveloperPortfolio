import { Router } from "express";
import { container } from "tsyringe";
import { BlogPostService } from "../../../application/services/BlogPostService";
import { authMiddleware, requireAdmin, AuthRequest } from "../../../application/middleware/auth.middleware";
import { z } from "zod";

const router = Router();

const createBlogPostSchema = z.object({
  title: z.string().min(1).max(200),
  slug: z.string().min(1).max(200),
  excerpt: z.string().min(1),
  content: z.string().min(1),
  image: z.string().url(),
  category: z.string().min(1),
  tags: z.array(z.string()).optional(),
  published: z.boolean().optional(),
  featured: z.boolean().optional(),
  readTime: z.string().min(1),
});

const updateBlogPostSchema = createBlogPostSchema.partial();

router.get("/", async (req, res, next) => {
  try {
    const blogPostService = container.resolve(BlogPostService);
    const { category, published, featured } = req.query;

    let posts;
    if (category) {
      posts = await blogPostService.getBlogPostsByCategory(category as string);
    } else if (featured === "true") {
      posts = await blogPostService.getFeaturedBlogPosts();
    } else if (published === "false") {
      posts = await blogPostService.getAllBlogPosts();
    } else {
      posts = await blogPostService.getPublishedBlogPosts();
    }

    res.json(posts);
  } catch (error) {
    next(error);
  }
});

router.get("/slug/:slug", async (req, res, next) => {
  try {
    const blogPostService = container.resolve(BlogPostService);
    const post = await blogPostService.getBlogPostBySlug(req.params.slug);

    if (!post) {
      return res.status(404).json({ error: "Blog post not found" });
    }

    res.json(post);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const blogPostService = container.resolve(BlogPostService);
    const post = await blogPostService.getBlogPostById(req.params.id);

    if (!post) {
      return res.status(404).json({ error: "Blog post not found" });
    }

    res.json(post);
  } catch (error) {
    next(error);
  }
});

router.post("/", authMiddleware, requireAdmin, async (req: AuthRequest, res, next) => {
  try {
    const data = createBlogPostSchema.parse(req.body);
    const blogPostService = container.resolve(BlogPostService);
    const post = await blogPostService.createBlogPost({
      ...data,
      authorId: req.user?.userId,
    });

    res.status(201).json(post);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Validation error", details: error.errors });
    }
    next(error);
  }
});

router.put("/:id", authMiddleware, requireAdmin, async (req, res, next) => {
  try {
    const data = updateBlogPostSchema.parse(req.body);
    const blogPostService = container.resolve(BlogPostService);
    const post = await blogPostService.updateBlogPost(req.params.id, data);

    res.json(post);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Validation error", details: error.errors });
    }
    next(error);
  }
});

router.delete("/:id", authMiddleware, requireAdmin, async (req, res, next) => {
  try {
    const blogPostService = container.resolve(BlogPostService);
    await blogPostService.deleteBlogPost(req.params.id);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

export default router;
