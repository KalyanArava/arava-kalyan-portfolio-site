
import React from 'react';
import { GraduationCap, School, Calendar, Award } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "MCA",
      institution: "Sree Venkateswara College of Engineering",
      location: "Tirupati",
      period: "2024–Present",
      grade: "8.10 CGPA",
      icon: GraduationCap,
      color: "text-primary"
    },
    {
      degree: "B.Sc Computers",
      institution: "Sanjay Gandhi Government Degree College",
      location: "",
      period: "2021–2024",
      grade: "70%",
      icon: School,
      color: "text-secondary"
    },
    {
      degree: "HSC",
      institution: "Govt. Junior College, Chowdepalle",
      location: "",
      period: "2019–2021",
      grade: "61%",
      icon: School,
      color: "text-accent"
    },
    {
      degree: "SSC",
      institution: "ZP High School, Pudipatla",
      location: "",
      period: "2018–2019",
      grade: "8.2 CGPA",
      icon: School,
      color: "text-primary"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6">My academic journey and achievements</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative flex items-start gap-6 group">
                  {/* Timeline dot */}
                  <div className={`relative z-10 bg-background border-4 border-primary rounded-full p-3 ${edu.color} group-hover:scale-110 transition-transform`}>
                    <edu.icon size={24} />
                  </div>
                  
                  {/* Content card */}
                  <div className="flex-1 bg-card p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-all group-hover:translate-x-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                        <p className="text-lg text-primary font-semibold">{edu.institution}</p>
                        {edu.location && <p className="text-sm text-muted-foreground">{edu.location}</p>}
                      </div>
                      <div className="text-right mt-2 md:mt-0">
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                          <Calendar size={16} />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2 justify-end">
                          <Award size={16} className="text-accent" />
                          <span className="font-semibold text-accent">{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
