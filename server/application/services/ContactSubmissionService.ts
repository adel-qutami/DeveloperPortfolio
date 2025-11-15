import { injectable, inject } from "tsyringe";
import { UnitOfWork } from "../../infrastructure/repositories/UnitOfWork";
import { CreateContactSubmissionInput, ContactSubmission } from "../../domain/entities/ContactSubmission";

@injectable()
export class ContactSubmissionService {
  constructor(@inject(UnitOfWork) private unitOfWork: UnitOfWork) {}

  async getAllSubmissions(): Promise<ContactSubmission[]> {
    return this.unitOfWork.contactSubmissions.findAll();
  }

  async getUnreadSubmissions(): Promise<ContactSubmission[]> {
    return this.unitOfWork.contactSubmissions.findUnread();
  }

  async getSubmissionById(id: string): Promise<ContactSubmission | null> {
    return this.unitOfWork.contactSubmissions.findById(id);
  }

  async createSubmission(data: CreateContactSubmissionInput): Promise<ContactSubmission> {
    return this.unitOfWork.contactSubmissions.create(data);
  }

  async markAsRead(id: string): Promise<void> {
    await this.unitOfWork.contactSubmissions.markAsRead(id);
  }

  async deleteSubmission(id: string): Promise<void> {
    await this.unitOfWork.contactSubmissions.delete(id);
  }
}
