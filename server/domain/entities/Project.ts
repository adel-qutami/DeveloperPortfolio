export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl?: string | null;
  liveUrl?: string | null;
  featured: boolean;
  published: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
  authorId?: string | null;
}

export interface CreateProjectInput {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  published?: boolean;
  order?: number;
  authorId?: string;
}

export interface UpdateProjectInput {
  title?: string;
  description?: string;
  image?: string;
  technologies?: string[];
  category?: string;
  githubUrl?: string | null;
  liveUrl?: string | null;
  featured?: boolean;
  published?: boolean;
  order?: number;
}
