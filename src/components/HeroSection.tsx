import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Globe, Shield } from 'lucide-react';
import gsap from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // Animate title
      tl.fromTo(titleRef.current, 
        { opacity: 0, y: 100, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }
      );
      
      // Animate tagline
      tl.fromTo(taglineRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      );
      
      // Animate buttons
      tl.fromTo(buttonsRef.current?.children,
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.2, ease: "back.out(1.7)" },
        "-=0.3"
      );
      
      // Animate features
      tl.fromTo(featuresRef.current?.children,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
        "-=0.4"
      );
      
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-brand-blue/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-brand-yellow/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-brand-red/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 ref={titleRef} className="font-brand text-6xl md:text-8xl lg:text-9xl font-bold mb-6">
            <span className="heading-gradient">TRUE</span>{' '}
            <span className="text-brand-primary">CONNECT</span>
          </h1>
          
          {/* Tagline */}
          <p ref={taglineRef} className="font-tagline text-2xl md:text-4xl font-bold text-hero mb-8 tracking-wider">
            BOOST YOUR SPEED
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Enterprise Internet Leased Line Provider delivering unprecedented reliability, 
            high bandwidth, and exceptional support for today's connected businesses.
          </p>
          
          {/* CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="btn-gradient text-lg px-8 py-4">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" className="btn-secondary text-lg px-8 py-4">
              View Plans
            </Button>
          </div>
          
          {/* Key Features */}
          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 glass p-6 rounded-2xl shadow-card hover:shadow-glow transition-all duration-500">
              <Zap className="h-8 w-8 text-brand-yellow" />
              <span className="font-semibold text-lg">High Speed</span>
            </div>
            <div className="flex items-center justify-center space-x-3 glass p-6 rounded-2xl shadow-card hover:shadow-glow transition-all duration-500">
              <Globe className="h-8 w-8 text-brand-blue" />
              <span className="font-semibold text-lg">Global Reach</span>
            </div>
            <div className="flex items-center justify-center space-x-3 glass p-6 rounded-2xl shadow-card hover:shadow-glow transition-all duration-500">
              <Shield className="h-8 w-8 text-brand-red" />
              <span className="font-semibold text-lg">Secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;