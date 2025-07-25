import { Building, Calendar, MapPin, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ExperienceSection = () => {
  const experience = {
    title: "Cybersecurity Virtual Intern",
    company: "Palo Alto Cybersecurity Academy",
    duration: "March 2022 - May 2022",
    location: "Virtual",
    type: "Internship",
    description: "Intensive virtual internship program focusing on modern cybersecurity practices, enterprise security frameworks, and industry best practices.",
    responsibilities: [
      "Implemented authentication and access control mechanisms for secure systems",
      "Developed comprehensive IT documentation and security protocols",
      "Analyzed cybersecurity threats and vulnerability assessment techniques",
      "Collaborated on security architecture design and implementation",
      "Participated in incident response simulation exercises",
      "Studied advanced cryptographic methods and data protection strategies"
    ],
    skills: ["Authentication Systems", "Access Control", "IT Documentation", "Security Protocols", "Threat Analysis", "Incident Response"],
    achievements: [
      "Successfully completed comprehensive cybersecurity training program",
      "Gained hands-on experience with enterprise security tools",
      "Developed strong foundation in cybersecurity principles"
    ]
  };

  const education = [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "Dayananda Sagar University",
      year: "2023",
      grade: "CGPA: 8.18",
      description: "Comprehensive program covering advanced computer science concepts, software engineering, and emerging technologies."
    },
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Vishwa Chethana Degree College",
      year: "2020",
      grade: "CGPA: 7.13",
      description: "Foundation in computer science fundamentals, programming languages, and database management systems."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and academic background
            </p>
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Building className="w-6 h-6 text-primary mr-2" />
              Professional Experience
            </h3>
            
            <Card className="p-8 gradient-card shadow-medium">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">{experience.title}</h4>
                  <p className="text-lg font-semibold text-foreground mb-1">{experience.company}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {experience.duration}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {experience.location}
                    </span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                      {experience.type}
                    </span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <Shield className="w-12 h-12 text-primary/20" />
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {experience.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-3">Key Responsibilities:</h5>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold mb-3">Skills Developed:</h5>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {experience.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="text-xs px-2 py-1 bg-secondary rounded-md font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <h5 className="font-semibold mb-3">Achievements:</h5>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <span className="text-2xl mr-2">🎓</span>
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 gradient-card shadow-soft hover:shadow-medium transition-smooth">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-primary mb-1">{edu.degree}</h4>
                      <p className="font-semibold text-foreground mb-1">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground mb-3">{edu.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">{edu.year}</p>
                      <p className="text-sm font-medium text-primary">{edu.grade}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;