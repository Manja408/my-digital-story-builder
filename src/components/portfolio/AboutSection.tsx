import { Code, Users, Zap, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Proficient in HTML, CSS, JavaScript, and Java with a focus on clean, maintainable code."
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Expert in responsive design, SEO principles, and web optimization for superior user experiences."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Strong communicator who thrives in cross-functional teams and agile environments."
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Skilled in debugging, troubleshooting, and finding innovative solutions to complex challenges."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate developer dedicated to creating exceptional web experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a Master's graduate in Computer Application with a strong foundation in web technologies, 
                I bring both theoretical knowledge and practical experience to every project. My journey in 
                technology has been driven by curiosity and a commitment to continuous learning.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I specialize in creating responsive, user-friendly web applications that not only look great 
                but perform exceptionally. My expertise spans from front-end development with modern JavaScript 
                frameworks to backend development with Java, always with a focus on best practices and 
                clean architecture.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond coding, I'm passionate about cybersecurity and staying updated with the latest 
                industry trends. I believe in the power of collaborative development and enjoy working 
                with teams to bring innovative ideas to life.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">What I Bring</h3>
              <div className="grid gap-4">
                {highlights.map((highlight) => (
                  <Card key={highlight.title} className="p-4 gradient-card shadow-soft hover:shadow-medium transition-smooth">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <highlight.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{highlight.title}</h4>
                        <p className="text-sm text-muted-foreground">{highlight.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;