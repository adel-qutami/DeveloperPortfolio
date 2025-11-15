import { injectable, inject } from "tsyringe";
import { UnitOfWork } from "../../infrastructure/repositories/UnitOfWork";
import { CreateProjectInput, UpdateProjectInput, Project } from "../../domain/entities/Project";

@injectable()
export class ProjectService {
  constructor(@inject(UnitOfWork) private unitOfWork: UnitOfWork) {}

  async getAllProjects(): Promise<Project[]> {
    return this.unitOfWork.projects.findAll();
  }

  async getPublishedProjects(): Promise<Project[]> {
    return this.unitOfWork.projects.findPublished();
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return this.unitOfWork.projects.findFeatured();
  }

  async getProjectsByCategory(category: string): Promise<Project[]> {
    return this.unitOfWork.projects.findByCategory(category);
  }

  async getProjectById(id: string): Promise<Project | null> {
    return this.unitOfWork.projects.findById(id);
  }

  async createProject(data: CreateProjectInput): Promise<Project> {
    return this.unitOfWork.projects.create(data);
  }

  async updateProject(id: string, data: UpdateProjectInput): Promise<Project> {
    return this.unitOfWork.projects.update(id, data);
  }

  async deleteProject(id: string): Promise<void> {
    await this.unitOfWork.projects.delete(id);
  }
}
