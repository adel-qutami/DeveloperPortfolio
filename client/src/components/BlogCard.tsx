import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { Link } from "wouter";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
}

export function BlogCard({
  id,
  title,
  excerpt,
  image,
  category,
  date,
  readTime,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${id}`}>
      <a>
        <Card className="overflow-hidden hover-elevate transition-all group h-full" data-testid={`card-blog-${id}`}>
          <div className="relative aspect-video overflow-hidden bg-muted">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" data-testid="badge-category">{category}</Badge>
            </div>
          </div>
          
          <CardHeader>
            <h3 className="text-xl font-semibold line-clamp-2" data-testid="text-blog-title">{title}</h3>
          </CardHeader>
          
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{excerpt}</p>
          </CardContent>
          
          <CardFooter className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{readTime}</span>
            </div>
          </CardFooter>
        </Card>
      </a>
    </Link>
  );
}
