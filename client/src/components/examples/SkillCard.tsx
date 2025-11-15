import { SkillCard } from '../SkillCard';
import { Code2 } from 'lucide-react';

export default function SkillCardExample() {
  return (
    <SkillCard
      icon={Code2}
      title="React & TypeScript"
      proficiency={95}
    />
  );
}
