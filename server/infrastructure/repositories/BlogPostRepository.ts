import { injectable, inject } from "tsyringe";
import { GenericRepository } from "./GenericRepository";
import { PrismaService } from "../database/prisma.service";
import { IBlogPostRepository } from "../../domain/repositories/IRepository";
import { BlogPost } from "../../domain/entities/BlogPost";

@injectable()
export class BlogPostRepository extends GenericRepository<BlogPost> implements IBlogPostRepository {
  constructor(@inject(PrismaService) prisma: PrismaService) {
    super(prisma, "blogPost");
  }

  async findBySlug(slug: string): Promise<BlogPost | null> {
    return this.prisma.blogPost.findUnique({
      where: { slug },
    });
  }

  async findPublished(): Promise<BlogPost[]> {
    return this.prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
    });
  }

  async findByCategory(category: string): Promise<BlogPost[]> {
    return this.prisma.blogPost.findMany({
      where: { category, published: true },
      orderBy: { createdAt: "desc" },
    });
  }

  async findFeatured(): Promise<BlogPost[]> {
    return this.prisma.blogPost.findMany({
      where: { published: true, featured: true },
      orderBy: { createdAt: "desc" },
    });
  }
}
