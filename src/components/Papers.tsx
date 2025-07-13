import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, HandHeart } from "lucide-react";

export const Papers = () => {
  const ways = [
    {
      title: "Emmitt the Cat",
      sDescription: "Takoma Park, 2007-2025",
      lDescription: "Emmitt was a cherished member of our family for 18 wonderful years. He loved sunbeams, chasing laser pointers, and quiet evenings on the couch.\n\nHis gentle purr and playful nature brought joy to everyone he met. He will be deeply missed and forever remembered in our hearts. His favorite toy was a crinkly ball, and he always knew when it was dinner time, greeting us with insistent meows.\n\nHe had a special bond with the smallest members of our family, always patient and kind. Even in his older years, he maintained a youthful spirit, often surprising us with sudden bursts of energy. Emmitt's presence filled our home with warmth and comfort, and we are grateful for every moment we had with him. He taught us the meaning of unconditional love and the simple pleasures in life.",
      action: "Read More",
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      image: "../../../Molly.jpg"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      // KEY CHANGE: Replaced style prop with Tailwind gradient classes
      className="py-20 bg-gradient-to-b from-white to-blue-600"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            Remembrance
          </h2>
          <p className="text-xl text-blue-600 max-w-3xl mx-auto leading-relaxed">
            Help us in remembering these beloved animals by reading each of their bios
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {ways.map((way, index) => {
            const [isExpanded, setIsExpanded] = useState(false);

            const toggleExpansion = () => {
              setIsExpanded(!isExpanded);
            };

            const displayText = isExpanded ? way.lDescription : way.sDescription;

            const renderTextWithLineBreaks = (text) => {
              return text.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < text.split('\n').length - 1 && <br />}
                </React.Fragment>
              ));
            };

            return (
              <Card
                key={index}
                className={`${way.color} border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col ${isExpanded ? 'h-auto' : ''}`}
              >
                <div className="relative w-full h-64 overflow-hidden rounded-t-md p-4">
                  <img src={way.image} alt={way.title} className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-cover" />
                </div>
                <CardContent className="text-center p-4 flex-grow flex flex-col">
                  <CardTitle className="text-xl text-gray-800 mb-2">{way.title}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {renderTextWithLineBreaks(displayText)}
                  </CardDescription>
                  <Button
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold transition-all duration-300 mt-auto"
                    onClick={toggleExpansion}
                  >
                    {isExpanded ? "Read Less" : way.action}
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
