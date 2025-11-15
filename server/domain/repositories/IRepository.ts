import { Project } from "../entities/Project";
import { BlogPost } from "../entities/BlogPost";
import { Skill } from "../entities/Skill";
import { Testimonial } from "../entities/Testimonial";
import { ContactSubmission } from "../entities/ContactSubmission";
import { User } from "../entities/User";

export interface IRepository<T> {
  findById(id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
  create(data: Partial<T>): Promise<T>;
  update(id: string, data: Partial<T>): Promise<T>;
  delete(id: string): Promise<void>;
}

export interface IProjectRepository extends IRepository<Project> {
  findByCategory(category: string): Promise<Project[]>;
  findPublished(): Promise<Project[]>;
  findFeatured(): Promise<Project[]>;
}

export interface IBlogPostRepository extends IRepository<BlogPost> {
  findBySlug(slug: string): Promise<BlogPost | null>;
  findPublished(): Promise<BlogPost[]>;
  findByCategory(category: string): Promise<BlogPost[]>;
  findFeatured(): Promise<BlogPost[]>;
}

export interface ISkillRepository extends IRepository<Skill> {
  findByCategory(category: string): Promise<Skill[]>;
}

export interface ITestimonialRepository extends IRepository<Testimonial> {
  findByStatus(status: string): Promise<Testimonial[]>;
  findApproved(): Promise<Testimonial[]>;
}

export interface IContactSubmissionRepository extends IRepository<ContactSubmission> {
  findUnread(): Promise<ContactSubmission[]>;
  markAsRead(id: string): Promise<void>;
}

export interface IUserRepository extends IRepository<User> {
  findByEmail(email: string): Promise<User | null>;
}
