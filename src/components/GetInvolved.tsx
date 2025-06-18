
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, HandHeart, DollarSign } from "lucide-react";

export const GetInvolved = () => {
  const ways = [
    {
      icon: Heart,
      title: "Adopt a Pet",
      description: "Give a loving animal their forever home and gain a loyal companion for life.",
      action: "Browse Pets",
      color: "bg-red-50 border-red-200 hover:bg-red-100"
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our amazing team and help us care for animals in need. Every hour makes a difference.",
      action: "Join Us",
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100"
    },
    {
      icon: DollarSign,
      title: "Donate",
      description: "Your donation helps us provide food, medical care, and shelter for rescued animals.",
      action: "Donate Now",
      color: "bg-green-50 border-green-200 hover:bg-green-100"
    },
    {
      icon: HandHeart,
      title: "Foster",
      description: "Provide temporary care for animals recovering from medical procedures or awaiting adoption.",
      action: "Learn More",
      color: "bg-purple-50 border-purple-200 hover:bg-purple-100"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Get Involved
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            There are many ways to support our mission and help animals in need. 
            Every contribution, big or small, makes a meaningful impact.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold transition-all duration-300">
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
