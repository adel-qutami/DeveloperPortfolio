import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "wouter";
import { Download, Mail, Briefcase, GraduationCap, Award } from "lucide-react";
import profileImage from '@assets/generated_images/Developer_profile_photo_8ed1b970.png';

export default function About() {
  const timeline = [
    {
      year: "2023 - Present",
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc",
      type: "work" as const,
      description: "Leading development of enterprise SaaS applications using React, TypeScript, and Node.js. Implemented Clean Architecture and microservices patterns.",
    },
    {
      year: "2020 - 2023",
      title: "Full Stack Developer",
      company: "Digital Solutions Co",
      type: "work" as const,
      description: "Built and maintained multiple client projects. Specialized in React, Express, and PostgreSQL. Mentored junior developers.",
    },
    {
      year: "2018 - 2020",
      title: "Frontend Developer",
      company: "StartupHub",
      type: "work" as const,
      description: "Developed responsive web applications using React and TypeScript. Collaborated with design teams to implement pixel-perfect UIs.",
    },
    {
      year: "2014 - 2018",
      title: "B.S. Computer Science",
      company: "University of Technology",
      type: "education" as const,
      description: "Graduated with honors. Focus on software engineering, algorithms, and distributed systems.",
    },
  ];

  const expertise = [
    { category: "Frontend", skills: ["React", "TypeScript", "Next.js", "TailwindCSS"], level: 95 },
    { category: "Backend", skills: ["Node.js", "Express", "Prisma", "REST APIs"], level: 90 },
    { category: "Database", skills: ["PostgreSQL", "MongoDB", "Redis", "SQL"], level: 88 },
    { category: "DevOps", skills: ["Docker", "AWS", "CI/CD", "Kubernetes"], level: 85 },
  ];

  const interests = [
    "Open Source Contributing",
    "Technical Writing",
    "Mentoring Developers",
    "Photography",
    "Hiking & Travel",
    "Coffee Enthusiast",
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About Me
              </h1>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hi, I'm <span className="text-foreground font-semibold">Alex Morgan</span>, a passionate Full Stack Developer with over 8 years of experience building scalable web applications and modern digital solutions.
                </p>
                <p>
                  I specialize in <span className="text-foreground font-medium">Clean Architecture</span>, <span className="text-foreground font-medium">TypeScript</span>, and <span className="text-foreground font-medium">modern JavaScript frameworks</span>. My approach combines technical excellence with business value, ensuring every line of code serves a purpose.
                </p>
                <p>
                  Beyond coding, I'm an advocate for best practices, code quality, and continuous learning. I regularly contribute to open source projects and share knowledge through technical writing and mentoring.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/contact">
                  <Button size="lg" data-testid="button-contact">
                    <Mail className="h-4 w-4 mr-2" />
                    Get In Touch
                  </Button>
                </Link>
                <Button size="lg" variant="outline" data-testid="button-download-resume">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="aspect-square rounded-xl overflow-hidden bg-muted">
                  <img
                    src={profileImage}
                    alt="Alex Morgan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold">8+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
            Career & Education Timeline
          </h2>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative grid md:grid-cols-2 gap-8 ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={index % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}>
                    <Card className="hover-elevate transition-all" data-testid={`card-timeline-${index}`}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          {item.type === "work" ? (
                            <Briefcase className="h-5 w-5 text-primary" />
                          ) : (
                            <GraduationCap className="h-5 w-5 text-primary" />
                          )}
                          <Badge variant="secondary">{item.year}</Badge>
                        </div>
                        <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{item.company}</p>
                        <p className="text-sm leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
            Technical Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item) => (
              <Card key={item.category} className="hover-elevate transition-all">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{item.category}</h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="font-medium">{item.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20 bg-card rounded-xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
            Beyond Coding
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            When I'm not writing code, I enjoy exploring new technologies, contributing to the developer community, and pursuing creative interests.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((interest) => (
              <div
                key={interest}
                className="flex items-center gap-2 p-4 rounded-lg bg-background border hover-elevate transition-all"
              >
                <Award className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{interest}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
