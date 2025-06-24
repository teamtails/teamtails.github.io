
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, HandHeart } from "lucide-react";

export const GetInvolved = () => {
  const ways = [
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our amazing team and help us care for animals in need. Every hour makes a difference.",
      action: "Join Us",
      color: "bg-[#31389f]/5 border-[#31389f]/20 hover:bg-[#31389f]/10"
    },
    {
      icon: HandHeart,
      title: "Start a Chapter",
      description: "Bring Team Tails to your community and help us expand our reach to help more animals.",
      action: "Learn More",
      color: "bg-[#992032]/5 border-[#992032]/20 hover:bg-[#992032]/10"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Get Involved
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our volunteer community and help us make a meaningful impact in animal welfare. 
            Every volunteer contribution helps us reach more animals in need.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {ways.map((way, index) => (
            <Card key={index} className={`${way.color} border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
                  <way.icon className="w-8 h-8 text-gray-700" />
                </div>
                <CardTitle className="text-xl text-gray-800">{way.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                  {way.description}
                </CardDescription>
                <Button 
                  className="w-full bg-[#31389f] hover:bg-[#2a3091] text-white font-semibold transition-all duration-300"
                  onClick={scrollToContact}
                >
                  {way.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
