import { TestimonialStatus as PrismaTestimonialStatus } from "@prisma/client";

export const TestimonialStatus = PrismaTestimonialStatus;
export type TestimonialStatus = PrismaTestimonialStatus;

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string | null;
  status: TestimonialStatus;
  order: number;
  createdAt: Date;
  updatedAt: Date;
  approvedById?: string | null;
}

export interface CreateTestimonialInput {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  status?: TestimonialStatus;
  order?: number;
}

export interface UpdateTestimonialInput {
  quote?: string;
  author?: string;
  role?: string;
  company?: string;
  avatar?: string | null;
  status?: TestimonialStatus;
  order?: number;
  approvedById?: string | null;
}
