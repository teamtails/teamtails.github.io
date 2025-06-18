
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch with our team",
      contact: "volunteer@teamtails.org",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with a volunteer coordinator",
      contact: "(555) 123-TAILS",
      action: "Call Now"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "National headquarters",
      contact: "123 Volunteer Way, Washington, DC 20001",
      action: "Get Directions"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Join our community of passionate volunteers today. Reach out to learn more about volunteer opportunities in your area.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <method.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">{method.title}</CardTitle>
                <CardDescription className="text-white/80">
                  {method.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-4 text-white/90">{method.contact}</p>
                <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold">
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <MessageSquare className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
            <p className="text-white/90 mb-6">
              Our volunteer coordinators are here to help you find the perfect way to get involved with Team Tails.
            </p>
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-4 text-lg">
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
