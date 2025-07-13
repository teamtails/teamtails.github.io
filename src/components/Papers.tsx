import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, HandHeart } from "lucide-react";

export const Papers = () => {
  const ways = [
    {
      title: "Emmitt",
      description: "blank",
      action: "Read here",
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gray-50"
      style={{ backgroundImage: `url("/ground.png")` }} >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Remembrance
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Help us in remembering these beloved animals by reading each of their bios
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {ways.map((way, index) => (
            <Card key={index} className={`${way.color} border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
              <CardHeader className="text-center">
                <div className="w-16 h-32 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
                  <img src="../../../Molly.jpg" alt = "Emmitt" w-14 h-24 />
                </div>
                <CardTitle className="text-xl text-gray-800">{way.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                  {way.description}
                </CardDescription>
                <Button 
                  className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold transition-all duration-300"
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
