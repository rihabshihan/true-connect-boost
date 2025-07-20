import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Internet Leased Lines", href: "#" },
      { label: "Dedicated Bandwidth", href: "#" },
      { label: "Network Security", href: "#" },
      { label: "24/7 Support", href: "#" }
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Privacy Policy", href: "#" }
    ],
    support: [
      { label: "Contact Support", href: "#contact" },
      { label: "Documentation", href: "#" },
      { label: "System Status", href: "#" },
      { label: "Service Level Agreement", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img 
                src="/lovable-uploads/6fb5d993-12f8-4f87-bafe-8eddfa1bf3fb.png" 
                alt="True Connect Logo" 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-background/80 leading-relaxed">
                Empowering businesses with high-speed, reliable internet connectivity 
                solutions. Your trusted partner for enterprise-grade leased lines.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-yellow" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brand-yellow" />
                <span className="text-sm">info@trueconnect.in</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-brand-yellow mt-0.5" />
                <span className="text-sm">123 Business District, Tech Park<br />Mumbai 400001, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-brand-yellow">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-brand-yellow transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-brand-yellow">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-brand-yellow transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-brand-yellow">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-brand-yellow transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-background/60">
              © {currentYear} True Connect. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-background/10 hover:bg-brand-yellow rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <social.icon className="h-4 w-4 text-background group-hover:text-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center mt-8">
            <p className="font-tagline text-xl font-bold text-gradient bg-gradient-to-r from-brand-yellow via-brand-blue to-brand-red bg-clip-text text-transparent">
              BOOST YOUR SPEED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;