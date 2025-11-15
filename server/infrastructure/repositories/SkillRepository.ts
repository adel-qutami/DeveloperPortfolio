import { injectable, inject } from "tsyringe";
import { GenericRepository } from "./GenericRepository";
import { PrismaService } from "../database/prisma.service";
import { ISkillRepository } from "../../domain/repositories/IRepository";
import { Skill } from "../../domain/entities/Skill";

@injectable()
export class SkillRepository extends GenericRepository<Skill> implements ISkillRepository {
  constructor(@inject(PrismaService) prisma: PrismaService) {
    super(prisma, "skill");
  }

  async findByCategory(category: string): Promise<Skill[]> {
    return this.prisma.skill.findMany({
      where: { category },
      orderBy: { order: "asc" },
    });
  }

  async findAll(): Promise<Skill[]> {
    return this.prisma.skill.findMany({
      orderBy: [{ category: "asc" }, { order: "asc" }],
    });
  }
}
