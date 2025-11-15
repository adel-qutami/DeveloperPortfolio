import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <span className="text-xl font-bold hover-elevate active-elevate-2 px-2 py-1 rounded-md cursor-pointer" data-testid="link-home">
              <span className="font-mono">AM</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors hover-elevate active-elevate-2 cursor-pointer ${
                    location === item.href
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground/80"
                  }`}
                  data-testid={`link-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="flex flex-col p-4 gap-2">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className={`px-4 py-3 text-sm font-medium rounded-md transition-colors hover-elevate active-elevate-2 cursor-pointer block ${
                    location === item.href
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground/80"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
