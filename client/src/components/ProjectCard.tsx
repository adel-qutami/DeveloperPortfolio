import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  onClick?: () => void;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  onClick,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all group" data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center gap-2 p-6">
          {githubUrl && (
            <Button variant="secondary" size="sm" asChild data-testid="button-project-github">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button variant="default" size="sm" asChild data-testid="button-project-live">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
      
      <CardHeader className="cursor-pointer" onClick={onClick}>
        <h3 className="text-xl font-semibold" data-testid="text-project-title">{title}</h3>
      </CardHeader>
      
      <CardContent className="cursor-pointer" onClick={onClick}>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </CardContent>
      
      <CardFooter className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Badge key={tech} variant="secondary" className="text-xs" data-testid={`badge-tech-${tech.toLowerCase()}`}>
            {tech}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
