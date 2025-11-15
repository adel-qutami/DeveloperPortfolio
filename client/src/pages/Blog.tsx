import { BlogCard } from "@/components/BlogCard";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import { useState } from "react";
import blog1 from '@assets/generated_images/Blog_post_1_featured_image_9ec53d58.png';
import blog2 from '@assets/generated_images/Blog_post_2_featured_image_3ff8fef6.png';

const allPosts = [
  {
    id: "clean-architecture-typescript",
    title: "Implementing Clean Architecture in TypeScript",
    excerpt: "Learn how to structure your TypeScript applications using Clean Architecture principles for better maintainability, testability, and scalability in enterprise projects.",
    image: blog1,
    category: "Architecture",
    date: "Nov 10, 2025",
    readTime: "8 min read",
  },
  {
    id: "devops-best-practices",
    title: "DevOps Best Practices for Modern Web Applications",
    excerpt: "Explore essential DevOps strategies including CI/CD pipelines, infrastructure as code, monitoring, and automated testing for production-ready applications.",
    image: blog2,
    category: "DevOps",
    date: "Nov 5, 2025",
    readTime: "6 min read",
  },
  {
    id: "react-performance",
    title: "React Performance Optimization Techniques",
    excerpt: "Deep dive into React performance optimization including memoization, code splitting, lazy loading, and profiling tools for building fast applications.",
    image: blog1,
    category: "React",
    date: "Oct 28, 2025",
    readTime: "10 min read",
  },
  {
    id: "api-design",
    title: "RESTful API Design Best Practices",
    excerpt: "Comprehensive guide to designing robust, scalable REST APIs with proper versioning, error handling, pagination, and documentation strategies.",
    image: blog2,
    category: "Backend",
    date: "Oct 20, 2025",
    readTime: "7 min read",
  },
  {
    id: "typescript-advanced",
    title: "Advanced TypeScript Patterns for Enterprise Apps",
    excerpt: "Explore advanced TypeScript features including generics, utility types, decorators, and type-safe patterns for building enterprise applications.",
    image: blog1,
    category: "TypeScript",
    date: "Oct 12, 2025",
    readTime: "9 min read",
  },
  {
    id: "database-optimization",
    title: "PostgreSQL Query Optimization Guide",
    excerpt: "Master PostgreSQL performance with indexing strategies, query optimization, EXPLAIN ANALYZE, and best practices for database schema design.",
    image: blog2,
    category: "Database",
    date: "Oct 5, 2025",
    readTime: "12 min read",
  },
];

const categories = ["All", "Architecture", "DevOps", "React", "Backend", "TypeScript", "Database"];
const popularTags = ["Clean Code", "Best Practices", "Performance", "Security", "Testing", "Cloud"];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = allPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Blog
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Insights on software architecture, development best practices, and emerging technologies
          </p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              data-testid="input-search"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`text-left px-3 py-2 rounded-md text-sm transition-colors hover-elevate active-elevate-2 ${
                        selectedCategory === category
                          ? "bg-accent text-accent-foreground font-medium"
                          : "text-muted-foreground"
                      }`}
                      data-testid={`button-category-${category.toLowerCase()}`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Popular Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="cursor-pointer hover-elevate">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Popular Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {allPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="text-sm">
                      <a
                        href={`/blog/${post.id}`}
                        className="font-medium hover:text-primary transition-colors line-clamp-2"
                      >
                        {post.title}
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>

          <div className="lg:col-span-3">
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} {...post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No articles found matching your criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
