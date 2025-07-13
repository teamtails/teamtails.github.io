import React, { useState } from 'react'; // Import useState
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, HandHeart } from "lucide-react";

export const Papers = () => {
  const ways = [
    {
      title: "Emmitt the Cat",
      sDescription: "Takoma Park, 2007-2025",
      lDescription: "Emmitt was a cherished member of our family for 18 wonderful years. He loved sunbeams, chasing laser pointers, and quiet evenings on the couch. His gentle purr and playful nature brought joy to everyone he met. He will be deeply missed and forever remembered in our hearts. His favorite toy was a crinkly ball, and he always knew when it was dinner time, greeting us with insistent meows. He had a special bond with the smallest members of our family, always patient and kind. Even in his older years, he maintained a youthful spirit, often surprising us with sudden bursts of energy. Emmitt's presence filled our home with warmth and comfort, and we are grateful for every moment we had with him. He taught us the meaning of unconditional love and the simple pleasures in life.",
      action: "Read More", // Changed action text to be more descriptive
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
          {ways.map((way, index) => {
            // State to manage expansion for each card
            const [isExpanded, setIsExpanded] = useState(false);

            const toggleExpansion = () => {
              setIsExpanded(!isExpanded);
            };

            return (
              <Card
                key={index}
                className={`${way.color} border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col ${isExpanded ? 'h-auto' : ''}`} // Adjust height dynamically
              >
                <div className="relative w-full h-64 overflow-hidden rounded-t-md p-4">
                  <img src={way.image} alt={way.title} className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-cover" />
                </div>
                <CardContent className="text-center p-4 flex-grow flex flex-col">
                  <CardTitle className="text-xl text-gray-800 mb-2">{way.title}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {/* Conditionally render sDescription or lDescription */}
                    {isExpanded ? way.lDescription : way.sDescription}
                  </CardDescription>
                  <Button
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold transition-all duration-300 mt-auto" // mt-auto pushes button to bottom
                    onClick={toggleExpansion} // Toggle expansion on click
                  >
                    {isExpanded ? "Read Less" : way.action} {/* Change button text */}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
