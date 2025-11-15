import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillCard } from "@/components/SkillCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { BlogCard } from "@/components/BlogCard";
import { Link } from "wouter";
import {
  Code2,
  Database,
  GitBranch,
  Server,
  Smartphone,
  Cloud,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
  Star,
} from "lucide-react";
import heroImage from '@assets/generated_images/Hero_section_background_image_89a46b5e.png';
import project1 from '@assets/generated_images/Featured_project_1_preview_61d32e7a.png';
import project2 from '@assets/generated_images/Featured_project_2_preview_700013de.png';
import project3 from '@assets/generated_images/Featured_project_3_preview_6bdcf2e2.png';
import profileImage from '@assets/generated_images/Developer_profile_photo_8ed1b970.png';
import testimonial1 from '@assets/generated_images/Testimonial_client_1_photo_4ad055da.png';
import testimonial2 from '@assets/generated_images/Testimonial_client_2_photo_224764d4.png';
import testimonial3 from '@assets/generated_images/Testimonial_client_3_photo_64df76d2.png';
import blog1 from '@assets/generated_images/Blog_post_1_featured_image_9ec53d58.png';
import blog2 from '@assets/generated_images/Blog_post_2_featured_image_3ff8fef6.png';

export default function Home() {
  const skills = [
    { icon: Code2, title: "React & TypeScript", proficiency: 95 },
    { icon: Server, title: "Node.js & Express", proficiency: 90 },
    { icon: Database, title: "PostgreSQL & Prisma", proficiency: 88 },
    { icon: Cloud, title: "AWS & DevOps", proficiency: 85 },
    { icon: GitBranch, title: "Git & CI/CD", proficiency: 92 },
    { icon: Smartphone, title: "Mobile Development", proficiency: 80 },
    { icon: Shield, title: "Security & Auth", proficiency: 87 },
    { icon: Zap, title: "Performance", proficiency: 90 },
  ];

  const achievements = [
    { label: "Years Experience", value: "8+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "GitHub Stars", value: "2.5K+" },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-20">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary-foreground border-primary/30">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Available for hire
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
              Full Stack Developer & Software Architect
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
              I craft exceptional digital experiences with clean code, modern technologies, and enterprise-grade architecture. Specializing in React, TypeScript, Node.js, and scalable cloud solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="gap-2" data-testid="button-get-in-touch">
                  Get In Touch
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20" data-testid="button-view-work">
                  View My Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of my recent work showcasing clean architecture and modern development practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <ProjectCard
              title="SaaS Analytics Platform"
              description="Enterprise-grade analytics dashboard with real-time data visualization, multi-tenant architecture, and advanced reporting capabilities."
              image={project1}
              technologies={["React", "TypeScript", "Node.js", "PostgreSQL", "Redis"]}
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            <ProjectCard
              title="E-Commerce Mobile App"
              description="Full-featured shopping app with payment integration, inventory management, and personalized recommendations using ML."
              image={project2}
              technologies={["React Native", "Express", "MongoDB", "Stripe"]}
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            <ProjectCard
              title="AI-Powered DevTools"
              description="Developer productivity suite with AI code suggestions, automated testing, and intelligent debugging assistance."
              image={project3}
              technologies={["TypeScript", "Python", "OpenAI", "Docker"]}
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
          </div>
          
          <div className="text-center">
            <Link href="/projects">
              <Button variant="outline" size="lg" data-testid="button-view-all-projects">
                View All Projects
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">Technical Expertise</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Proficient in modern technologies and architectural patterns
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <SkillCard key={skill.title} {...skill} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">Recognition & Impact</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Delivering measurable results and building lasting solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement) => (
              <div key={achievement.label} className="text-center space-y-2" data-testid={`stat-${achievement.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="text-4xl md:text-5xl font-bold text-primary">{achievement.value}</div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { icon: CheckCircle2, title: "Certified Professional", desc: "AWS Solutions Architect & Kubernetes Administrator" },
              { icon: Star, title: "Open Source Contributor", desc: "Active maintainer of popular TypeScript libraries" },
              { icon: Zap, title: "Performance Expert", desc: "Optimized applications serving 1M+ users" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-6 rounded-lg bg-background border hover-elevate transition-all">
                <div className="p-3 rounded-lg bg-primary/10 h-fit">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">Latest Blog Posts</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Insights on software architecture, development best practices, and emerging technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <BlogCard
              id="clean-architecture-typescript"
              title="Implementing Clean Architecture in TypeScript"
              excerpt="Learn how to structure your TypeScript applications using Clean Architecture principles for better maintainability, testability, and scalability in enterprise projects."
              image={blog1}
              category="Architecture"
              date="Nov 10, 2025"
              readTime="8 min read"
            />
            <BlogCard
              id="devops-best-practices"
              title="DevOps Best Practices for Modern Web Applications"
              excerpt="Explore essential DevOps strategies including CI/CD pipelines, infrastructure as code, monitoring, and automated testing for production-ready applications."
              image={blog2}
              category="DevOps"
              date="Nov 5, 2025"
              readTime="6 min read"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link href="/blog">
              <Button variant="outline" size="lg" data-testid="button-view-all-posts">
                View All Posts
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">Client Testimonials</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              What clients and colleagues say about working with me
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Alex delivered an exceptional web application that exceeded our expectations. The code quality and architecture were top-notch, making future maintenance a breeze."
              author="Sarah Johnson"
              role="CTO"
              company="TechCorp"
              avatar={testimonial1}
            />
            <TestimonialCard
              quote="Working with Alex was a pleasure. The project was delivered on time, within budget, and the technical implementation was flawless. Highly recommended!"
              author="Michael Chen"
              role="Product Manager"
              company="StartupXYZ"
              avatar={testimonial2}
            />
            <TestimonialCard
              quote="Alex's expertise in clean architecture and modern development practices transformed our legacy system into a scalable, maintainable platform. Exceptional work!"
              author="David Martinez"
              role="Engineering Director"
              company="Enterprise Solutions Inc"
              avatar={testimonial3}
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-lg mb-8 opacity-90">
            I'm currently available for freelance projects and consulting opportunities. Whether you need a full-stack application, architecture review, or technical guidance, I'm here to help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" data-testid="button-start-project">
                Start a Project
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" data-testid="button-view-services">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
