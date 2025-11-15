import { Link } from "wouter";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Alex Morgan</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full Stack Developer crafting exceptional digital experiences with clean code and modern technologies.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {["About", "Projects", "Services", "Blog"].map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`}>
                  <span className="block text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid={`link-footer-${item.toLowerCase()}`}>
                    {item}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Services</h4>
            <nav className="flex flex-col gap-2">
              {["Web Development", "Mobile Apps", "Consulting", "Code Review"].map((item) => (
                <span key={item} className="text-sm text-muted-foreground">
                  {item}
                </span>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild data-testid="button-social-github">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild data-testid="button-social-linkedin">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild data-testid="button-social-twitter">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild data-testid="button-social-email">
                <a href="mailto:alex@example.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Alex Morgan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
