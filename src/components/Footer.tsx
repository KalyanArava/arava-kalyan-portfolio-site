
import React from 'react';
import { Github, Linkedin, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand/Name */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">Arava Kalyan</h3>
            <p className="text-muted-foreground">
              Aspiring Web Developer crafting digital solutions with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links & Newsletter */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              <a
                href="https://share.google/Ywpx0xRbrhCsnaamz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-all hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://share.google/aHMxieuWhBkVAqqpW"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-full hover:bg-secondary hover:text-white transition-all hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            </div>
            
            {/* Back to Top Button */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="hover:bg-primary hover:text-white hover:border-primary transition-all"
            >
              <ArrowUp size={16} className="mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} Arava Kalyan. Made with</span>
            <Heart className="text-red-500" size={16} />
            <span>and lots of ☕</span>
          </div>
          
          <div className="text-muted-foreground text-sm">
            <span>Built with React, TypeScript & Tailwind CSS</span>
          </div>
        </div>

        {/* Fun Footer Note */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground italic">
            "The best way to predict the future is to create it." - Peter Drucker
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
