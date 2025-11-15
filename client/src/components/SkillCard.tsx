import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  proficiency?: number;
}

export function SkillCard({ icon: Icon, title, proficiency }: SkillCardProps) {
  return (
    <Card className="hover-elevate transition-all" data-testid={`card-skill-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
        <div className="p-3 rounded-lg bg-primary/10">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-sm font-medium text-center" data-testid="text-skill-title">{title}</h3>
        {proficiency !== undefined && (
          <div className="w-full">
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all"
                style={{ width: `${proficiency}%` }}
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
