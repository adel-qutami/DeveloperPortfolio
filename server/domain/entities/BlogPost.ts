export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  published: boolean;
  featured: boolean;
  readTime: string;
  createdAt: Date;
  updatedAt: Date;
  authorId?: string | null;
}

export interface CreateBlogPostInput {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags?: string[];
  published?: boolean;
  featured?: boolean;
  readTime: string;
  authorId?: string;
}

export interface UpdateBlogPostInput {
  title?: string;
  slug?: string;
  excerpt?: string;
  content?: string;
  image?: string;
  category?: string;
  tags?: string[];
  published?: boolean;
  featured?: boolean;
  readTime?: string;
}
