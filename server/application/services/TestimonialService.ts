import { injectable, inject } from "tsyringe";
import { UnitOfWork } from "../../infrastructure/repositories/UnitOfWork";
import { CreateTestimonialInput, UpdateTestimonialInput, Testimonial, TestimonialStatus } from "../../domain/entities/Testimonial";

@injectable()
export class TestimonialService {
  constructor(@inject(UnitOfWork) private unitOfWork: UnitOfWork) {}

  async getAllTestimonials(): Promise<Testimonial[]> {
    return this.unitOfWork.testimonials.findAll();
  }

  async getApprovedTestimonials(): Promise<Testimonial[]> {
    return this.unitOfWork.testimonials.findApproved();
  }

  async getTestimonialsByStatus(status: TestimonialStatus): Promise<Testimonial[]> {
    return this.unitOfWork.testimonials.findByStatus(status);
  }

  async getTestimonialById(id: string): Promise<Testimonial | null> {
    return this.unitOfWork.testimonials.findById(id);
  }

  async createTestimonial(data: CreateTestimonialInput): Promise<Testimonial> {
    return this.unitOfWork.testimonials.create(data);
  }

  async updateTestimonial(id: string, data: UpdateTestimonialInput): Promise<Testimonial> {
    return this.unitOfWork.testimonials.update(id, data);
  }

  async approveTestimonial(id: string, approvedById: string): Promise<Testimonial> {
    return this.unitOfWork.testimonials.update(id, {
      status: TestimonialStatus.APPROVED,
      approvedById,
    });
  }

  async rejectTestimonial(id: string): Promise<Testimonial> {
    return this.unitOfWork.testimonials.update(id, {
      status: TestimonialStatus.REJECTED,
    });
  }

  async deleteTestimonial(id: string): Promise<void> {
    await this.unitOfWork.testimonials.delete(id);
  }
}
