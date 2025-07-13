
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Calendar, Mail } from "lucide-react";
import { Footer } from "@/components/Footer";

const Chapters = () => {
  const chapters = [
    {
      name: "Team Tails Churchill",
      state: "Maryland",
      city: "Potomac",
      leader: "Beckett Bonness",
    },
    {
      name: "Team Tails Wheaton",
      state: "Maryland",
      city: "Wheaton",
      leader: "Rafi Pikofsky-Christiansen",
    },
    {
      name: "Team Tails RM",
      state: "Maryland",
      city: "Rockville",
      leader: "Rohan Rai",
    },
    {
      name: "Team Tails Rockville",
      state: "Maryland",
      city: "Rockville",
      leader: "Rebecca Vasquez",
    },
    {
      name: "Team Tails Blair",
      state: "Maryland",
      city: "Silver Spring",
      leader: "Molly O'Brien & Maddie Seelke",
    },
    {
      name: "Team Tails Damascus",
      state: "Maryland",
      city: "Damascus",
      leader: "Caleigh Hoffman",
    },
    {
      name: "Team Tails Einstein",
      state: "Maryland",
      city: "Kensington",
      leader: "Ella Tomas & Alex Hirsch",
    },
    {
      name: "Team Tails Walter Johnson",
      state: "Maryland",
      city: "Bethesda",
      leader: "Jay Resnik",
    },
    {
      name: "Team Tails Northwood",
      state: "Maryland",
      city: "Rockville",
      leader: "Lucia Rocha",
    }
  ];

  const states = [...new Set(chapters.map(chapter => chapter.state))].sort();

  return (
    <div className="bg-gradient-to-b from-white to-blue-600" >
      <Navigation />
        <section 
          className="py-20 text-white bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: `url("/ground.png")`
          }}
      >
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Chapters
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Team Tails has chapters all across Montgomery County, Maryland, each serving their local communities with dedicated volunteers and targeted programs.
          </p>
        </div>
      </section>
      <hr className="border-white" />
      {/* Chapters Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {chapters.map((chapter, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">{chapter.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-3" />
                      <span>{chapter.city}, {chapter.state}</span>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-3" />
                      <span>{chapter.leader}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Join This Chapter
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <hr className="border-white" />
      {/* Start a Chapter CTA */}
      <section 
        className="py-20 text-white bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url("/ground.png")`
        }}
      >
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't See Your Area?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Help us expand our reach by starting a new Team Tails chapter in your community. We'll provide all the support and resources you need.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScyBASx2aqdYI2ClW35ohcKlhqbF0WhRF7u5AFaDlKTXCjirQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-4 text-lg">
              Start a New Chapter
            </Button>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Chapters;
