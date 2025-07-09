
import React from 'react';
import { Quote, Heart, Code2 } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi, I'm <span className="text-primary font-semibold">Arava Kalyan</span> — a tech enthusiast with a BSc in Computers, 
                currently pursuing my MCA at Sree Venkateswara College of Engineering, Tirupati.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm passionate about web development, learning new tools, and creating meaningful digital experiences. 
                I'm eager to contribute to real-world projects that make an impact.
              </p>
              
              {/* Fun Fact */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-2xl border border-primary/20">
                <div className="flex items-start gap-4">
                  <Quote className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="text-lg font-medium text-foreground mb-2">My Philosophy</p>
                    <p className="text-muted-foreground italic">"Code is poetry, and every problem is a story waiting to be told through elegant solutions."</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Stats/Highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <Code2 className="text-primary" size={24} />
                    <h3 className="font-semibold">Learning</h3>
                  </div>
                  <p className="text-2xl font-bold text-primary">3+</p>
                  <p className="text-sm text-muted-foreground">Programming Languages</p>
                </div>
                
                <div className="bg-card p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <Heart className="text-secondary" size={24} />
                    <h3 className="font-semibold">Passion</h3>
                  </div>
                  <p className="text-2xl font-bold text-secondary">Web Dev</p>
                  <p className="text-sm text-muted-foreground">Frontend & Backend</p>
                </div>
              </div>

              {/* Personal Interests */}
              <div className="bg-card p-6 rounded-2xl shadow-lg border">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <span className="text-accent">🌟</span> When I'm Not Coding
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Exploring new technologies and frameworks</p>
                  <p>• Contributing to open-source projects</p>
                  <p>• Learning about UI/UX design principles</p>
                  <p>• Building side projects for fun</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
