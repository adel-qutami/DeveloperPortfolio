import { PrismaClient } from "@prisma/client";
import { singleton } from "tsyringe";

@singleton()
export class PrismaService {
  private client: PrismaClient;

  constructor() {
    this.client = new PrismaClient({
      log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    });
  }

  get project() {
    return this.client.project;
  }

  get blogPost() {
    return this.client.blogPost;
  }

  get skill() {
    return this.client.skill;
  }

  get testimonial() {
    return this.client.testimonial;
  }

  get contactSubmission() {
    return this.client.contactSubmission;
  }

  get user() {
    return this.client.user;
  }

  get $transaction() {
    return this.client.$transaction.bind(this.client);
  }

  async $connect() {
    await this.client.$connect();
  }

  async $disconnect() {
    await this.client.$disconnect();
  }
}
