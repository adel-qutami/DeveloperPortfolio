import {
  IProjectRepository,
  IBlogPostRepository,
  ISkillRepository,
  ITestimonialRepository,
  IContactSubmissionRepository,
  IUserRepository,
} from "./IRepository";

export interface IUnitOfWork {
  projects: IProjectRepository;
  blogPosts: IBlogPostRepository;
  skills: ISkillRepository;
  testimonials: ITestimonialRepository;
  contactSubmissions: IContactSubmissionRepository;
  users: IUserRepository;

  commit(): Promise<void>;
  rollback(): Promise<void>;
}
