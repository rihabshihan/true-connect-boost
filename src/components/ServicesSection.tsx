import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi, Shield, Headphones, Settings, Globe, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

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
            toggleActions: "play none none reverse"
          }
        }
      );

      // Services animation
      gsap.fromTo(servicesRef.current?.children,
        { opacity: 0, y: 80, rotationX: 45 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Wifi,
      title: "Dedicated Leased Lines",
      description: "High-speed dedicated internet connections with guaranteed bandwidth and maximum uptime for your business operations.",
      color: "text-brand-blue"
    },
    {
      icon: Shield,
      title: "Secure Connectivity",
      description: "Enterprise-grade security with encrypted connections, firewall protection, and secure data transmission protocols.",
      color: "text-brand-red"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical support from our expert team to ensure your connectivity is always optimized.",
      color: "text-brand-yellow"
    },
    {
      icon: Settings,
      title: "Network Management",
      description: "Proactive network monitoring and management services to maintain peak performance and prevent downtime.",
      color: "text-brand-blue"
    },
    {
      icon: Globe,
      title: "Global Connectivity",
      description: "Connect to anywhere in the world with our extensive network infrastructure and international partnerships.",
      color: "text-brand-red"
    },
    {
      icon: Zap,
      title: "Scalable Solutions",
      description: "Flexible bandwidth options that grow with your business needs, from startup to enterprise scale.",
      color: "text-brand-yellow"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 ref={titleRef} className="font-brand text-4xl md:text-6xl font-bold mb-6">
              Our <span className="heading-gradient">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive internet connectivity solutions designed to empower 
              your business with reliable, fast, and secure connections.
            </p>
          </div>

          {/* Services Grid */}
          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group glass hover:shadow-glow transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <h3 className="text-brand-primary text-xl font-bold mb-3">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Hover Effect Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;