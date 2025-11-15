import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
}: TestimonialCardProps) {
  const initials = author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="hover-elevate transition-all" data-testid={`card-testimonial-${author.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="p-6 space-y-4">
        <Quote className="h-8 w-8 text-primary/20" />
        <p className="text-muted-foreground leading-relaxed italic" data-testid="text-testimonial-quote">
          "{quote}"
        </p>
        <div className="flex items-center gap-4 pt-4">
          <Avatar>
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium" data-testid="text-testimonial-author">{author}</p>
            <p className="text-sm text-muted-foreground">
              {role} at {company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
