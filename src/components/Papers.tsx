import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, HandHeart } from "lucide-react";

export const Papers = () => {
  const ways = [
    {
      title: "Emmitt",
      description: "blank",
      action: "Read here",
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      image: "../../../Molly.jpg"
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
            <Card key={index} className={`${way.color} border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col`}>
              <div className="relative w-full h-40 overflow-hidden rounded-t-md">
                <img src={way.image} alt={way.title} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <CardContent className="text-center p-4 flex-grow flex flex-col justify-center">
                <CardTitle className="text-xl text-gray-800 mb-2">{way.title}</CardTitle>
                <CardDescription className="text-gray-600 mb-4 leading-relaxed flex-grow">{way.description}</CardDescription>
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
