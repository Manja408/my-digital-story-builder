import { ExternalLink, Github, Play } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Netflix Clone",
      description: "A responsive front-end clone of Netflix with modern UI/UX design, featuring cross-browser compatibility and smooth animations. Built with focus on user experience and performance optimization.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      features: [
        "Pixel-perfect UI replication",
        "Responsive design for all devices",
        "Smooth hover animations",
        "Cross-browser compatibility"
      ],
      image: "🎬",
      type: "Web Application"
    },
    {
      title: "My Spy Android",
      description: "A comprehensive surveillance application with robust backend integration and responsive UI. Features real-time monitoring capabilities with secure data handling and user authentication.",
      techStack: ["Java", "Android Studio", "Backend Integration", "UI/UX"],
      features: [
        "Real-time monitoring system",
        "Secure backend integration",
        "Responsive Android UI",
        "User authentication system"
      ],
      image: "📱",
      type: "Mobile Application"
    },
    {
      title: "Cybersecurity in Big Data Era",
      description: "An in-depth exploration of data privacy, access control, and cryptography in the modern big data landscape. Features comprehensive security analysis and implementation of protection mechanisms.",
      techStack: ["Java", "MySQL", "JFrame", "Cryptography"],
      features: [
        "Data privacy analysis",
        "Access control implementation",
        "Cryptographic algorithms",
        "Database security measures"
      ],
      image: "🔒",
      type: "Research Project"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical expertise and problem-solving capabilities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="group overflow-hidden gradient-card shadow-soft hover:shadow-large transition-smooth"
              >
                <div className="p-6">
                  {/* Project Icon & Type */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{project.image}</div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {project.type}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span 
                          key={tech}
                          className="text-xs px-2 py-1 bg-secondary rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-muted-foreground flex items-center">
                          <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1 hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      <ExternalLink size={14} className="mr-1" />
                      View
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost"
                      className="hover:bg-secondary transition-smooth"
                    >
                      <Github size={14} />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Want to see more? Check out my other projects and contributions.
            </p>
            <Button variant="outline" size="lg">
              <Github size={16} className="mr-2" />
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;