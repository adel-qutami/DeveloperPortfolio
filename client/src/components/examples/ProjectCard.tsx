import { ProjectCard } from '../ProjectCard';
import heroImage from '@assets/generated_images/Featured_project_1_preview_61d32e7a.png';

export default function ProjectCardExample() {
  return (
    <ProjectCard
      title="SaaS Analytics Platform"
      description="A comprehensive analytics dashboard for tracking user metrics, revenue, and engagement across multiple products."
      image={heroImage}
      technologies={["React", "TypeScript", "Node.js", "PostgreSQL"]}
      githubUrl="https://github.com"
      liveUrl="https://example.com"
      onClick={() => console.log('Project card clicked')}
    />
  );
}
