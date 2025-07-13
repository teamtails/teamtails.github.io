import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, HandHeart } from "lucide-react";

const FADE_DURATION = 2000; // how long the fade is
const INTERVAL_TIME = 6000; 

export const Papers = () => {
  const ways = [
    {
      title: "Emmitt the Cat",
      sDescription: "Takoma Park, 2007-2025",
      lDescription: "Emmitt, beloved orange cat of Ginna, Jake and Andrew of Merwood Drive in Takoma Park, died peacefully in his sleep at home on July 8, 2025. \n\nEmmitt was 18 years old —roughly 100 in human years. He was a friendly and social cat who enjoyed children and dogs. His attitude towards other cats was more complicated.\n\nEmmitt lived a rich cat life full of adventure and naps. He was curious, playful, affectionate and always wanted to participate in whatever was going on. A graceful sprinter, Emmitt liked to “half climb” trees in his yard after charging towards them in full gallop. \n\nEmmitt was well known throughout the neighborhood — especially among children and dog walkers. Some knew him by name while others knew him as the sweet orange cat with the most excellent tail and beautiful stripes. He will be greatly missed by all.",
      action: "Read More",
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      images: [
        "../../../emmitt/1.jpeg",
        "../../../emmitt/2.jpeg",
        "../../../emmitt/3.jpeg"
      ]
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-blue-600"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Remembrance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Help us in remembering these beloved animals by reading each of their bios
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {ways.map((way, index) => {
            const [isExpanded, setIsExpanded] = useState(false);
            const [currentImageIndex, setCurrentImageIndex] = useState(0);
            // new state to control the fade animation
            const [isFading, setIsFading] = useState(false);

            useEffect(() => {
              if (way.images && way.images.length > 1) {
                const intervalId = setInterval(() => {
                  setIsFading(true); // Start fading out the current image

                  setTimeout(() => {
                    setCurrentImageIndex(prevIndex =>
                      (prevIndex + 1) % way.images.length
                    );
                    setIsFading(false); 
                  }, FADE_DURATION); 
                }, INTERVAL_TIME);

                return () => clearInterval(intervalId);
              }
            }, [way.images]); 

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

            const nextImageSrc = way.images[(currentImageIndex + 1) % way.images.length];

            return (
              <Card
                key={index}
                className={`${way.color} border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col ${isExpanded ? 'h-auto' : ''}`}
              >
                <div className="relative w-full h-64 overflow-hidden rounded-t-md p-4">
                  {/* Current image (fades out) */}
                  <img
                    key={`img-${currentImageIndex}`}
                    src={way.images[currentImageIndex]}
                    alt={way.title}
                    className={`absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-cover transition-opacity duration-${FADE_DURATION} ${isFading ? 'opacity-0' : 'opacity-100'}`}
                    style={{ zIndex: 2 }} 
                  />
 
                  <img
                    key={`img-next-${currentImageIndex}`} 
                    src={nextImageSrc}
                    alt={way.title}
                    className={`absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-cover`}
                    style={{ zIndex: 1 }} 
                  />
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
