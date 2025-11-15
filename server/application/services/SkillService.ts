import { injectable, inject } from "tsyringe";
import { UnitOfWork } from "../../infrastructure/repositories/UnitOfWork";
import { CreateSkillInput, UpdateSkillInput, Skill } from "../../domain/entities/Skill";

@injectable()
export class SkillService {
  constructor(@inject(UnitOfWork) private unitOfWork: UnitOfWork) {}

  async getAllSkills(): Promise<Skill[]> {
    return this.unitOfWork.skills.findAll();
  }

  async getSkillsByCategory(category: string): Promise<Skill[]> {
    return this.unitOfWork.skills.findByCategory(category);
  }

  async getSkillById(id: string): Promise<Skill | null> {
    return this.unitOfWork.skills.findById(id);
  }

  async createSkill(data: CreateSkillInput): Promise<Skill> {
    return this.unitOfWork.skills.create(data);
  }

  async updateSkill(id: string, data: UpdateSkillInput): Promise<Skill> {
    return this.unitOfWork.skills.update(id, data);
  }

  async deleteSkill(id: string): Promise<void> {
    await this.unitOfWork.skills.delete(id);
  }
}
