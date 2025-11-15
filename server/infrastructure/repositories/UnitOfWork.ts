import { injectable, inject } from "tsyringe";
import { IUnitOfWork } from "../../domain/repositories/IUnitOfWork";
import { ProjectRepository } from "./ProjectRepository";
import { BlogPostRepository } from "./BlogPostRepository";
import { SkillRepository } from "./SkillRepository";
import { TestimonialRepository } from "./TestimonialRepository";
import { ContactSubmissionRepository } from "./ContactSubmissionRepository";
import { UserRepository } from "./UserRepository";
import { PrismaService } from "../database/prisma.service";

@injectable()
export class UnitOfWork implements IUnitOfWork {
  constructor(
    @inject(ProjectRepository) public projects: ProjectRepository,
    @inject(BlogPostRepository) public blogPosts: BlogPostRepository,
    @inject(SkillRepository) public skills: SkillRepository,
    @inject(TestimonialRepository) public testimonials: TestimonialRepository,
    @inject(ContactSubmissionRepository) public contactSubmissions: ContactSubmissionRepository,
    @inject(UserRepository) public users: UserRepository,
    @inject(PrismaService) private prisma: PrismaService
  ) {}

  async commit(): Promise<void> {
    // Prisma auto-commits individual operations
    // For complex multi-repository operations, use transaction()
  }

  async rollback(): Promise<void> {
    // Prisma auto-rolls back on errors
    // For complex multi-repository operations, use transaction()
  }

  async transaction<T>(fn: () => Promise<T>): Promise<T> {
    return this.prisma.$transaction(async () => {
      return await fn();
    });
  }
}
