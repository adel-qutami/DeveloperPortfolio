import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import {
  Code2,
  Smartphone,
  Cloud,
  Shield,
  Zap,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "End-to-end web application development using React, TypeScript, Node.js, and modern frameworks.",
    deliverables: [
      "Responsive web applications",
      "RESTful API development",
      "Database design & optimization",
      "Third-party integrations",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications with native performance and seamless user experience.",
    deliverables: [
      "iOS & Android apps",
      "React Native development",
      "App store deployment",
      "Push notifications & analytics",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Architecture & DevOps",
    description: "Scalable cloud infrastructure setup with CI/CD pipelines and automated deployment strategies.",
    deliverables: [
      "AWS/Azure infrastructure",
      "Docker & Kubernetes",
      "CI/CD pipeline setup",
      "Monitoring & logging",
    ],
  },
  {
    icon: Shield,
    title: "Security & Performance",
    description: "Comprehensive security audits and performance optimization for production applications.",
    deliverables: [
      "Security vulnerability assessment",
      "Performance optimization",
      "Load testing & scaling",
      "Best practices implementation",
    ],
  },
  {
    icon: Zap,
    title: "Technical Consulting",
    description: "Expert guidance on technology choices, architecture decisions, and development strategies.",
    deliverables: [
      "Architecture review",
      "Technology stack selection",
      "Code quality assessment",
      "Strategic planning",
    ],
  },
  {
    icon: Users,
    title: "Team Mentoring & Training",
    description: "Upskill your development team with modern practices, tools, and architectural patterns.",
    deliverables: [
      "Code review sessions",
      "Best practices workshops",
      "Pair programming",
      "Documentation creation",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your goals, requirements, and project scope through detailed consultation.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "Creating technical specifications, architecture diagrams, and project roadmap.",
  },
  {
    number: "03",
    title: "Development",
    description: "Agile development with regular updates, code reviews, and iterative improvements.",
  },
  {
    number: "04",
    title: "Delivery & Support",
    description: "Deployment, testing, documentation, and ongoing maintenance support.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Services
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive software development services from ideation to deployment and beyond
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="hover-elevate transition-all" data-testid={`card-service-${index}`}>
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="mb-20 bg-card rounded-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              My Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven approach to delivering high-quality software solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative" data-testid={`step-${index}`}>
                <div className="mb-4">
                  <div className="text-6xl font-bold text-primary/20">{step.number}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-muted-foreground/30" />
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-primary text-primary-foreground rounded-xl p-12 md:p-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how I can help bring your ideas to life with clean code and modern technology.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" data-testid="button-get-started">
                Get Started
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                data-testid="button-view-work"
              >
                View My Work
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
