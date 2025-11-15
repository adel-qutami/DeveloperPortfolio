import { UserRole as PrismaUserRole } from "@prisma/client";

export const UserRole = PrismaUserRole;
export type UserRole = PrismaUserRole;

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserInput {
  email: string;
  password: string;
  name: string;
  role?: UserRole;
}

export interface UpdateUserInput {
  email?: string;
  name?: string;
  role?: UserRole;
}

export interface UserPublic {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}
