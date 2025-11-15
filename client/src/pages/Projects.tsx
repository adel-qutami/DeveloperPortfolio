import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import project1 from '@assets/generated_images/Featured_project_1_preview_61d32e7a.png';
import project2 from '@assets/generated_images/Featured_project_2_preview_700013de.png';
import project3 from '@assets/generated_images/Featured_project_3_preview_6bdcf2e2.png';

const allProjects = [
  {
    id: 1,
    title: "SaaS Analytics Platform",
    description: "Enterprise-grade analytics dashboard with real-time data visualization, multi-tenant architecture, and advanced reporting capabilities.",
    image: project1,
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
    category: "Web App",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 2,
    title: "E-Commerce Mobile App",
    description: "Full-featured shopping app with payment integration, inventory management, and personalized recommendations using ML.",
    image: project2,
    technologies: ["React Native", "Express", "MongoDB", "Stripe"],
    category: "Mobile",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 3,
    title: "AI-Powered DevTools",
    description: "Developer productivity suite with AI code suggestions, automated testing, and intelligent debugging assistance.",
    image: project3,
    technologies: ["TypeScript", "Python", "OpenAI", "Docker"],
    category: "Tools",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 4,
    title: "Real-Time Chat Platform",
    description: "Scalable messaging application with end-to-end encryption, voice/video calls, and file sharing capabilities.",
    image: project1,
    technologies: ["React", "WebSocket", "Node.js", "Redis"],
    category: "Web App",
    githubUrl: "https://github.com",
  },
  {
    id: 5,
    title: "Project Management Suite",
    description: "Comprehensive project tracking system with Kanban boards, time tracking, and team collaboration features.",
    image: project2,
    technologies: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
    category: "Web App",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 6,
    title: "API Gateway & Documentation",
    description: "Microservices API gateway with automatic documentation generation, rate limiting, and authentication.",
    image: project3,
    technologies: ["Node.js", "Express", "Swagger", "Docker"],
    category: "Tools",
    githubUrl: "https://github.com",
  },
];

const categories = ["All", "Web App", "Mobile", "Tools"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            My Projects
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects showcasing clean architecture, modern development practices, and real-world solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12 sticky top-20 z-40 bg-background/80 backdrop-blur-lg py-4 border-y">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              data-testid={`button-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              onClick={() => console.log(`Viewing project: ${project.title}`)}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No projects found in this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
