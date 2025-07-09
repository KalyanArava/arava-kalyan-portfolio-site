
import React from 'react';
import { Briefcase, Calendar, MapPin, Code, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const InternshipSection = () => {
  const achievements = [
    "Gained hands-on experience with Flask framework",
    "Developed full-stack web applications",
    "Worked on frontend/backend integration",
    "Learned industry best practices",
    "Collaborated with development team"
  ];

  return (
    <section id="internship" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6">Building real-world experience</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20 overflow-hidden">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Briefcase className="text-primary" size={32} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2 text-foreground">
                      Python Web Development Intern
                    </CardTitle>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <Code size={18} />
                        <span>Satva Foundation</span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>2024</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>Remote</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="mb-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Gained comprehensive hands-on experience in web development using Flask framework, 
                    working on full-stack applications with HTML, CSS, and advanced frontend/backend integration techniques.
                  </p>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-foreground">Key Achievements & Learning</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <CheckCircle className="text-secondary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4 text-foreground">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {["Python", "Flask", "HTML", "CSS", "JavaScript", "Web Development"].map((tech, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 rounded-full text-sm font-medium hover:from-primary/20 hover:to-secondary/20 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Looking Forward */}
          <div className="mt-12 text-center">
            <div className="bg-card p-8 rounded-2xl shadow-lg border">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Looking Forward</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Excited to take on new challenges and contribute to innovative projects that make a difference. 
                Always eager to learn from experienced developers and grow in the tech industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
