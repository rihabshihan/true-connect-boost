import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useToast } from '@/hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

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

      // Form animation
      gsap.fromTo(formRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Info animation
      gsap.fromTo(infoRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Business District", "Tech Park, Mumbai 400001", "Maharashtra, India"],
      color: "text-brand-blue"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 98765 43211", "Mon-Sat: 9AM-6PM"],
      color: "text-brand-yellow"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["sales@trueconnect.in", "support@trueconnect.in", "info@trueconnect.in"],
      color: "text-brand-red"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM-6PM", "Saturday: 9AM-2PM", "24/7 Emergency Support"],
      color: "text-brand-blue"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 ref={titleRef} className="font-brand text-4xl md:text-6xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to boost your business connectivity? Contact our experts for 
              personalized internet solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card ref={formRef} className="glass shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gradient">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your requirements *"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="btn-gradient w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div ref={infoRef} className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="glass hover:shadow-glow transition-all duration-500">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center flex-shrink-0">
                        <info.icon className={`h-6 w-6 ${info.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
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

export default ContactSection;