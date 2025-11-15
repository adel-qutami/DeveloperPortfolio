import { PrismaClient } from "@prisma/client";
import { IRepository } from "../../domain/repositories/IRepository";

export class GenericRepository<T> implements IRepository<T> {
  constructor(
    protected prisma: PrismaClient,
    protected modelName: string
  ) {}

  async findById(id: string): Promise<T | null> {
    const model = (this.prisma as any)[this.modelName];
    return model.findUnique({ where: { id } });
  }

  async findAll(): Promise<T[]> {
    const model = (this.prisma as any)[this.modelName];
    return model.findMany();
  }

  async create(data: Partial<T>): Promise<T> {
    const model = (this.prisma as any)[this.modelName];
    return model.create({ data });
  }

  async update(id: string, data: Partial<T>): Promise<T> {
    const model = (this.prisma as any)[this.modelName];
    return model.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    const model = (this.prisma as any)[this.modelName];
    await model.delete({ where: { id } });
  }
}
