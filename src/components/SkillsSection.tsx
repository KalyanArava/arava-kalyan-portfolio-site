
import React from 'react';
import { Code2, Database, BarChart3, Globe, Terminal, Palette } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "C", level: 85 },
        { name: "Python", level: 80 },
        { name: "Java", level: 75 }
      ]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Flask", level: 70 }
      ]
    },
    {
      title: "Data & Tools",
      icon: Database,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: [
        { name: "SQL", level: 80 },
        { name: "DBMS", level: 85 },
        { name: "Power BI", level: 70 }
      ]
    }
  ];

  const additionalSkills = [
    { name: "Problem Solving", icon: Terminal, color: "text-primary" },
    { name: "UI/UX Design", icon: Palette, color: "text-secondary" },
    { name: "Data Analysis", icon: BarChart3, color: "text-accent" }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6">Technologies I work with and love to learn</p>
        </div>

        {/* Main Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card p-8 rounded-2xl shadow-lg border hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-full ${category.bgColor}`}>
                  <category.icon className={`${category.color}`} size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${
                          category.color === 'text-primary' ? 'bg-primary' :
                          category.color === 'text-secondary' ? 'bg-secondary' : 'bg-accent'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Additional Strengths</h3>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {additionalSkills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex items-center gap-3 bg-card px-6 py-4 rounded-full shadow-lg border hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
                  <skill.icon className={`${skill.color} group-hover:scale-110 transition-transform`} size={20} />
                  <span className="font-medium text-foreground">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Journey */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-8 rounded-2xl border border-primary/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Always Learning</h3>
            <p className="text-muted-foreground text-lg">
              I believe in continuous growth and staying updated with the latest technologies. 
              Currently exploring React, Node.js, and advanced web development frameworks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
