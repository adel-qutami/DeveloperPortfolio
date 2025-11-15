export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: Date;
}

export interface CreateContactSubmissionInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}
