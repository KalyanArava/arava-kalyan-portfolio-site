
import React from 'react';
import { MapPin, Mail, Phone, Github, Linkedin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-coral-blush rounded-full animate-float blur-sm"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-wine-velvet rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-slate-storm rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-silver-mist rounded-full animate-float blur-sm" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-black/10"></div>

      <div className="container mx-auto px-6 py-20 text-center text-white relative z-10">
        <div className="animate-fade-in-up">
          {/* Enhanced Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl animate-pulse-glow elegant-hover">
                <img 
                  src="/lovable-uploads/91021503-695b-4d00-b64f-89738917b7a0.png" 
                  alt="Arava Kalyan"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-coral-blush/20 to-wine-velvet/20 animate-shimmer"></div>
            </div>
          </div>

          {/* Enhanced Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight gradient-text">
            Arava Kalyan
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light opacity-90 text-white/90">
            Aspiring Web Developer | MCA Student | Turning Ideas into Code
          </p>

          {/* Enhanced Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base">
            <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full elegant-hover">
              <MapPin size={16} className="text-coral-blush" />
              <span>Chowdepalle, Andhra Pradesh</span>
            </div>
            <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full elegant-hover">
              <Mail size={16} className="text-coral-blush" />
              <span>kalyanarava2929@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full elegant-hover">
              <Phone size={16} className="text-coral-blush" />
              <span>+91 9100954460</span>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg rounded-full transition-all hover:scale-105 elegant-hover shadow-lg hover:shadow-wine-velvet/25"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-3 text-lg rounded-full transition-all hover:scale-105 elegant-hover backdrop-blur-sm"
            >
              View Projects
            </Button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://share.google/Ywpx0xRbrhCsnaamz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-effect p-4 rounded-full hover:bg-white/20 transition-all hover:scale-110 elegant-hover group"
            >
              <Github size={24} className="group-hover:text-coral-blush transition-colors" />
            </a>
            <a 
              href="https://share.google/aHMxieuWhBkVAqqpW" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-effect p-4 rounded-full hover:bg-white/20 transition-all hover:scale-110 elegant-hover group"
            >
              <Linkedin size={24} className="group-hover:text-coral-blush transition-colors" />
            </a>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="glass-effect p-2 rounded-full">
            <ChevronDown size={32} className="text-white/70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
