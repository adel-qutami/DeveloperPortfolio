import { injectable, inject } from "tsyringe";
import { GenericRepository } from "./GenericRepository";
import { PrismaService } from "../database/prisma.service";
import { ITestimonialRepository } from "../../domain/repositories/IRepository";
import { Testimonial, TestimonialStatus } from "../../domain/entities/Testimonial";

@injectable()
export class TestimonialRepository extends GenericRepository<Testimonial> implements ITestimonialRepository {
  constructor(@inject(PrismaService) prisma: PrismaService) {
    super(prisma, "testimonial");
  }

  async findByStatus(status: string): Promise<Testimonial[]> {
    return this.prisma.testimonial.findMany({
      where: { status: status as any },
      orderBy: { order: "asc" },
    });
  }

  async findApproved(): Promise<Testimonial[]> {
    return this.prisma.testimonial.findMany({
      where: { status: TestimonialStatus.APPROVED },
      orderBy: { order: "asc" },
    });
  }
}
