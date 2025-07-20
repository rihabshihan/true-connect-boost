import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi, Users, Clock, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Content animation
      gsap.fromTo(contentRef.current?.children,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Stats animation
      gsap.fromTo(statsRef.current?.children,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            end: "bottom 60%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Users, value: "500+", label: "Enterprise Clients" },
    { icon: Wifi, value: "99.9%", label: "Uptime Guarantee" },
    { icon: Clock, value: "24/7", label: "Support Available" },
    { icon: Award, value: "15+", label: "Years Experience" }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 ref={titleRef} className="font-brand text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">True Connect</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div ref={contentRef} className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Revolutionizing Enterprise Connectivity
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As a leading Internet Leased Line Provider, True Connect delivers 
                  unparalleled reliability and support. Our cutting-edge infrastructure 
                  and innovative approach ensure your business stays connected with 
                  enterprise-grade solutions.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3 text-primary">
                  Our Mission
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  To provide businesses with the fastest, most reliable internet 
                  connectivity solutions, enabling them to thrive in the digital age 
                  with uninterrupted high-speed connections.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3 text-primary">
                  Why Choose Us?
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-yellow rounded-full mr-3"></div>
                    Dedicated leased lines for maximum reliability
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-blue rounded-full mr-3"></div>
                    24/7 expert technical support
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-red rounded-full mr-3"></div>
                    Scalable solutions for growing businesses
                  </li>
                </ul>
              </div>
            </div>

            {/* Stats Grid */}
            <div ref={statsRef} className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="glass hover:shadow-glow transition-all duration-500 hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <div className="text-3xl font-bold text-gradient mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;