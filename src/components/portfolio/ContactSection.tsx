import { Mail, Phone, Linkedin, MapPin, Send, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "manjunathvenkatesh478@gmail.com",
      href: "mailto:manjunathvenkatesh478@gmail.com",
      description: "Drop me a line anytime"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9880608036",
      href: "tel:9880608036",
      description: "Let's have a conversation"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/manja478",
      href: "https://linkedin.com/in/manja478",
      description: "Connect professionally"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#",
      description: "Available for remote work"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'm always open to discussing new opportunities 
              and exciting projects. Let's connect!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              
              {contactInfo.map((contact) => (
                <Card key={contact.label} className="p-6 gradient-card shadow-soft hover:shadow-medium transition-smooth group">
                  <a 
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start space-x-4 group-hover:text-primary transition-smooth"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                      <contact.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{contact.label}</h4>
                      <p className="text-foreground/80 font-medium mb-1">{contact.value}</p>
                      <p className="text-sm text-muted-foreground">{contact.description}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Quick Message Form */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Send a Quick Message</h3>
              <Card className="p-6 gradient-card shadow-soft">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 input-dark rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 input-dark rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 input-dark rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none"
                      placeholder="Let's discuss your project..."
                    ></textarea>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full shadow-medium hover:shadow-glow transition-smooth"
                    size="lg"
                  >
                    <Send size={16} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="p-8 gradient-card shadow-medium">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you need a new website, want to improve an existing application, or have 
                an innovative idea you'd like to explore, I'm here to help turn your vision into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="shadow-medium hover:shadow-glow transition-smooth"
                  onClick={() => window.location.href = 'mailto:manjunathvenkatesh478@gmail.com'}
                >
                  <MessageCircle size={16} className="mr-2" />
                  Start a Conversation
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="shadow-soft hover:shadow-medium transition-smooth"
                  onClick={() => window.location.href = 'https://linkedin.com/in/manja478'}
                >
                  <Linkedin size={16} className="mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;