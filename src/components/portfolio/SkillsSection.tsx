import { Code, Database, Globe, Settings, Terminal, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Java", "Python"]
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["Responsive Design", "SEO Optimization", "Web Performance", "Cross-browser Compatibility"]
    },
    {
      icon: Database,
      title: "Tools & Databases",
      skills: ["Git", "MySQL", "Android Studio", "Visual Studio Code"]
    },
    {
      icon: Terminal,
      title: "Operating Systems",
      skills: ["Windows", "Linux", "Command Line", "System Administration"]
    },
    {
      icon: Settings,
      title: "Development Skills",
      skills: ["Version Control", "Debugging", "Testing", "Prompt Engineering"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      skills: ["Data Privacy", "Access Control", "Authentication", "Cryptography"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications and secure systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <Card 
                key={category.title} 
                className="p-6 gradient-card shadow-soft hover:shadow-medium transition-smooth group"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-3 group-hover:bg-primary/20 transition-smooth">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="px-3 py-2 bg-background/50 rounded-md text-sm font-medium text-foreground/80 hover:bg-background/80 transition-smooth"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Skills Grid */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-6">Core Competencies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Problem Solving", "Team Collaboration", "Agile Development", 
                "Code Review", "Documentation", "Performance Optimization",
                "User Experience", "Mobile-First Design", "API Integration"
              ].map((competency) => (
                <span 
                  key={competency}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-smooth"
                >
                  {competency}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;