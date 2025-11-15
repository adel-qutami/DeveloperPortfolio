import { injectable, inject } from "tsyringe";
import { GenericRepository } from "./GenericRepository";
import { PrismaService } from "../database/prisma.service";
import { IProjectRepository } from "../../domain/repositories/IRepository";
import { Project } from "../../domain/entities/Project";

@injectable()
export class ProjectRepository extends GenericRepository<Project> implements IProjectRepository {
  constructor(@inject(PrismaService) prisma: PrismaService) {
    super(prisma, "project");
  }

  async findByCategory(category: string): Promise<Project[]> {
    return this.prisma.project.findMany({
      where: { category, published: true },
      orderBy: [{ featured: "desc" }, { order: "asc" }, { createdAt: "desc" }],
    });
  }

  async findPublished(): Promise<Project[]> {
    return this.prisma.project.findMany({
      where: { published: true },
      orderBy: [{ featured: "desc" }, { order: "asc" }, { createdAt: "desc" }],
    });
  }

  async findFeatured(): Promise<Project[]> {
    return this.prisma.project.findMany({
      where: { published: true, featured: true },
      orderBy: [{ order: "asc" }, { createdAt: "desc" }],
    });
  }
}
