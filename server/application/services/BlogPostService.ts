import { injectable, inject } from "tsyringe";
import { UnitOfWork } from "../../infrastructure/repositories/UnitOfWork";
import { CreateBlogPostInput, UpdateBlogPostInput, BlogPost } from "../../domain/entities/BlogPost";

@injectable()
export class BlogPostService {
  constructor(@inject(UnitOfWork) private unitOfWork: UnitOfWork) {}

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return this.unitOfWork.blogPosts.findAll();
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return this.unitOfWork.blogPosts.findPublished();
  }

  async getFeaturedBlogPosts(): Promise<BlogPost[]> {
    return this.unitOfWork.blogPosts.findFeatured();
  }

  async getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
    return this.unitOfWork.blogPosts.findByCategory(category);
  }

  async getBlogPostById(id: string): Promise<BlogPost | null> {
    return this.unitOfWork.blogPosts.findById(id);
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    return this.unitOfWork.blogPosts.findBySlug(slug);
  }

  async createBlogPost(data: CreateBlogPostInput): Promise<BlogPost> {
    return this.unitOfWork.blogPosts.create(data);
  }

  async updateBlogPost(id: string, data: UpdateBlogPostInput): Promise<BlogPost> {
    return this.unitOfWork.blogPosts.update(id, data);
  }

  async deleteBlogPost(id: string): Promise<void> {
    await this.unitOfWork.blogPosts.delete(id);
  }
}
