
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kalyanarava2929@gmail.com",
      link: "mailto:kalyanarava2929@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9100954460",
      link: "tel:+919100954460",
      color: "text-secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chowdepalle, Andhra Pradesh, India",
      link: null,
      color: "text-accent"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://share.google/Ywpx0xRbrhCsnaamz",
      color: "text-foreground hover:text-primary"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://share.google/aHMxieuWhBkVAqqpW",
      color: "text-foreground hover:text-secondary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6">
            Let's connect and discuss opportunities to work together
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl border-2 hover:border-primary/20 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-center gradient-text">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="h-12 border-2 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-12 border-2 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="border-2 focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white h-12 text-lg rounded-full transition-all hover:scale-105"
                  >
                    <Send className="mr-2" size={18} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="group">
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-lg border hover:shadow-xl transition-all hover:-translate-y-1"
                        >
                          <div className={`p-3 rounded-full bg-${info.color.split('-')[1]}/10`}>
                            <info.icon className={info.color} size={24} />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{info.label}</p>
                            <p className="text-muted-foreground group-hover:text-primary transition-colors">{info.value}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-lg border">
                          <div className={`p-3 rounded-full bg-${info.color.split('-')[1]}/10`}>
                            <info.icon className={info.color} size={24} />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{info.label}</p>
                            <p className="text-muted-foreground">{info.value}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 bg-card rounded-xl shadow-lg border hover:shadow-xl transition-all hover:scale-105 ${social.color}`}
                    >
                      <social.icon size={24} />
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-2xl border border-primary/20">
                <h3 className="text-xl font-bold mb-3 gradient-text">Let's Build Something Amazing</h3>
                <p className="text-muted-foreground mb-4">
                  I'm always excited to discuss new opportunities, collaborate on projects, 
                  or just have a chat about technology and development.
                </p>
                <p className="text-sm text-muted-foreground">
                  ⚡ Usually responds within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
