import { injectable, inject } from "tsyringe";
import { GenericRepository } from "./GenericRepository";
import { PrismaService } from "../database/prisma.service";
import { IContactSubmissionRepository } from "../../domain/repositories/IRepository";
import { ContactSubmission } from "../../domain/entities/ContactSubmission";

@injectable()
export class ContactSubmissionRepository extends GenericRepository<ContactSubmission> implements IContactSubmissionRepository {
  constructor(@inject(PrismaService) prisma: PrismaService) {
    super(prisma, "contactSubmission");
  }

  async findUnread(): Promise<ContactSubmission[]> {
    return this.prisma.contactSubmission.findMany({
      where: { read: false },
      orderBy: { createdAt: "desc" },
    });
  }

  async markAsRead(id: string): Promise<void> {
    await this.prisma.contactSubmission.update({
      where: { id },
      data: { read: true },
    });
  }

  async findAll(): Promise<ContactSubmission[]> {
    return this.prisma.contactSubmission.findMany({
      orderBy: { createdAt: "desc" },
    });
  }
}
