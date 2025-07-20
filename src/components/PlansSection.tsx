import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PlansSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const plansRef = useRef<HTMLDivElement>(null);

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

      // Plans animation
      gsap.fromTo(plansRef.current?.children,
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: plansRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const plans = [
    {
      name: "Starter",
      speed: "10 Mbps",
      price: "₹15,000",
      features: [
        "Dedicated Bandwidth",
        "99.5% Uptime SLA",
        "Email Support",
        "Basic Monitoring",
        "Standard Installation"
      ],
      popular: false
    },
    {
      name: "Business",
      speed: "50 Mbps",
      price: "₹45,000",
      features: [
        "Dedicated Bandwidth",
        "99.9% Uptime SLA",
        "24/7 Phone Support",
        "Advanced Monitoring",
        "Priority Installation",
        "Static IP Included"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      speed: "100 Mbps",
      price: "₹85,000",
      features: [
        "Dedicated Bandwidth",
        "99.99% Uptime SLA",
        "24/7 Premium Support",
        "Real-time Monitoring",
        "Express Installation",
        "Multiple Static IPs",
        "Redundant Connection"
      ],
      popular: false
    }
  ];

  return (
    <section id="plans" ref={sectionRef} className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 ref={titleRef} className="font-brand text-4xl md:text-6xl font-bold mb-6">
              Choose Your <span className="text-gradient">Plan</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Scalable internet solutions designed for businesses of all sizes. 
              Experience the power of dedicated leased lines.
            </p>
          </div>

          {/* Plans Grid */}
          <div ref={plansRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-500 hover:scale-105 ${
                  plan.popular 
                    ? 'ring-2 ring-primary shadow-glow' 
                    : 'glass hover:shadow-elegant'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-brand-blue to-brand-yellow p-2">
                    <div className="flex items-center justify-center space-x-1">
                      <Star className="h-4 w-4 text-white" />
                      <span className="text-white font-semibold text-sm">Most Popular</span>
                    </div>
                  </div>
                )}
                
                <CardHeader className={`text-center ${plan.popular ? 'pt-16' : 'pt-8'}`}>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {plan.name}
                  </CardTitle>
                  <div className="text-4xl font-bold text-gradient mb-2">
                    {plan.speed}
                  </div>
                  <div className="text-3xl font-bold text-foreground">
                    {plan.price}
                    <span className="text-lg text-muted-foreground font-normal">/month</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'btn-gradient' 
                        : 'btn-glow'
                    }`}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Custom Plans CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              Need a custom solution? We offer tailored plans for specific requirements.
            </p>
            <Button variant="outline" size="lg" className="border-2 border-primary hover:bg-primary hover:text-primary-foreground">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;