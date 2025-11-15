export interface Skill {
  id: string;
  title: string;
  category: string;
  proficiency: number;
  icon?: string | null;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateSkillInput {
  title: string;
  category: string;
  proficiency?: number;
  icon?: string;
  order?: number;
}

export interface UpdateSkillInput {
  title?: string;
  category?: string;
  proficiency?: number;
  icon?: string | null;
  order?: number;
}
