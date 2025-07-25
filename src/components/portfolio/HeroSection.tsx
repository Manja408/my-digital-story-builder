import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-hero">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-gradient">Manjunatha V</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
              Web Developer | Java Enthusiast | Cybersecurity Learner
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Passionate web developer with expertise in modern technologies and a collaborative approach 
              to building exceptional digital experiences. I love turning ideas into reality through clean, 
              efficient code.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              onClick={() => scrollToSection('#projects')}
              size="lg"
              className="shadow-medium hover:shadow-glow transition-smooth"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              onClick={() => scrollToSection('#contact')}
              className="shadow-soft hover:shadow-medium transition-smooth"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="mailto:manjunathvenkatesh478@gmail.com"
              className="p-3 rounded-full bg-card/80 hover:bg-primary hover:text-primary-foreground transition-smooth shadow-soft hover:shadow-medium"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/manja478"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/80 hover:bg-primary hover:text-primary-foreground transition-smooth shadow-soft hover:shadow-medium"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="tel:9880608036"
              className="p-3 rounded-full bg-card/80 hover:bg-primary hover:text-primary-foreground transition-smooth shadow-soft hover:shadow-medium"
            >
              <Phone size={20} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button 
              onClick={() => scrollToSection('#about')}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;