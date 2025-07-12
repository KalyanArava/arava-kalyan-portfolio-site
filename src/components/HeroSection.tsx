
import React from 'react';
import { MapPin, Mail, Phone, Github, Linkedin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-foreground rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-foreground rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-foreground rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 text-center text-background relative z-10">
        <div className="animate-fade-in-up">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-background shadow-2xl animate-pulse-glow">
              <img 
                src="/lovable-uploads/91021503-695b-4d00-b64f-89738917b7a0.png" 
                alt="Arava Kalyan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-background">
            Arava Kalyan
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light opacity-90 text-background">
            Aspiring Web Developer | MCA Student | Turning Ideas into Code
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-background/20 px-4 py-2 rounded-full backdrop-blur-sm text-background">
              <MapPin size={16} />
              <span>Chowdepalle, Andhra Pradesh</span>
            </div>
            <div className="flex items-center gap-2 bg-background/20 px-4 py-2 rounded-full backdrop-blur-sm text-background">
              <Mail size={16} />
              <span>kalyanarava2929@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 bg-background/20 px-4 py-2 rounded-full backdrop-blur-sm text-background">
              <Phone size={16} />
              <span>+91 9100954460</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg rounded-full transition-all hover:scale-105"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              className="border-background text-background hover:bg-background hover:text-primary px-8 py-3 text-lg rounded-full transition-all hover:scale-105"
            >
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://share.google/Ywpx0xRbrhCsnaamz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-background/20 p-3 rounded-full hover:bg-background/30 transition-all hover:scale-110 text-background"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://share.google/aHMxieuWhBkVAqqpW" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-background/20 p-3 rounded-full hover:bg-background/30 transition-all hover:scale-110 text-background"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-background/70" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
