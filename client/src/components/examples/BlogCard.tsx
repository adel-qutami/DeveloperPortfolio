import { BlogCard } from '../BlogCard';
import blogImage from '@assets/generated_images/Blog_post_1_featured_image_9ec53d58.png';

export default function BlogCardExample() {
  return (
    <BlogCard
      id="clean-architecture-typescript"
      title="Implementing Clean Architecture in TypeScript"
      excerpt="Learn how to structure your TypeScript applications using Clean Architecture principles for better maintainability and testability."
      image={blogImage}
      category="Architecture"
      date="Nov 10, 2025"
      readTime="8 min read"
    />
  );
}
