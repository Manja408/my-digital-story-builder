import { Heart, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:manjunathvenkatesh478@gmail.com",
      label: "Email"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/manja478",
      label: "LinkedIn"
    },
    {
      icon: Phone,
      href: "tel:9880608036",
      label: "Phone"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-gradient mb-4">Manjunatha V</h3>
              <p className="text-muted-foreground mb-4">
                Web Developer passionate about creating exceptional digital experiences 
                through clean code and innovative solutions.
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="mr-2">🎯</span>
                <span>Available for new opportunities</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.querySelector(`#${link.toLowerCase()}`);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect With Me</h4>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center text-muted-foreground hover:text-primary transition-smooth group"
                  >
                    <social.icon className="w-4 h-4 mr-3 group-hover:scale-110 transition-smooth" />
                    {social.label}
                  </a>
                ))}
              </div>

              {/* Hobbies */}
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h5 className="font-medium mb-2 text-sm">When I'm not coding:</h5>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <span className="mr-1">♟️</span>
                    Chess
                  </span>
                  <span className="flex items-center">
                    <span className="mr-1">🎬</span>
                    Movies
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
            <div className="flex items-center text-sm text-muted-foreground mb-4 md:mb-0">
              <span>© {currentYear} Manjunatha V. Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
              <span>and lots of ☕</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="text-sm text-muted-foreground hover:text-primary transition-smooth flex items-center"
            >
              Back to top ↑
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              This portfolio showcases my journey as a developer. 
              <br className="hidden sm:block" />
              Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;