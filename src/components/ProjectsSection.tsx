
import React from 'react';
import { ShoppingCart, Building2, Shield, ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A fully functional online store with product listings, shopping cart functionality, and streamlined order processing flow.",
      tools: ["HTML", "CSS", "JavaScript"],
      icon: ShoppingCart,
      color: "text-primary",
      bgColor: "bg-primary/10",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    {
      title: "Bank Management System",
      description: "A console-based application designed to efficiently manage bank accounts, transactions, and customer data with secure operations.",
      tools: ["C"],
      icon: Building2,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop"
    },
    {
      title: "File OTP Generator Tool",
      description: "A secure GUI application that encrypts text files with advanced password protection and OTP validation for enhanced security.",
      tools: ["Python", "Tkinter"],
      icon: Shield,
      color: "text-accent",
      bgColor: "bg-accent/10",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6">Things I've built with passion and purpose</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 overflow-hidden">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className={`absolute top-4 left-4 p-3 rounded-full ${project.bgColor} ${project.color}`}>
                  <project.icon size={24} />
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span 
                        key={toolIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 hover:bg-primary hover:text-white hover:border-primary transition-all"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 hover:bg-secondary hover:text-white hover:border-secondary transition-all"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-3 text-lg rounded-full transition-all hover:scale-105">
            View More Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
