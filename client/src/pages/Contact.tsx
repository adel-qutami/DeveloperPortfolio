import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Twitter, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alex.morgan@example.com",
      href: "mailto:alex.morgan@example.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/alexmorgan",
      href: "https://linkedin.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/alexmorgan",
      href: "https://github.com",
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@alexmorgan_dev",
      href: "https://twitter.com",
    },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss collaboration opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 text-sm hover-elevate active-elevate-2 p-2 rounded-md -ml-2"
                        data-testid={`link-${item.label.toLowerCase()}`}
                      >
                        <item.icon className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">{item.label}</p>
                          <p className="text-muted-foreground">{item.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <div className="flex items-start gap-3 text-sm mb-4">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">San Francisco, CA</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-muted-foreground">Usually within 24 hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Current Availability</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm">Available for new projects</span>
                </div>
                <p className="text-sm opacity-90">
                  I'm currently accepting new freelance and consulting opportunities. Let's build something amazing together!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
