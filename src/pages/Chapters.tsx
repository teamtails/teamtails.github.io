
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
      contact: "la@teamtails.org",
      description: "Our LA chapter focuses on supporting local shelters in the greater Los Angeles area. We organize monthly adoption events and educational workshops."
    },
    {
      name: "Team Tails Wheaton",
      state: "Maryland",
      city: "Wheaton",
      leader: "Rafi Pikofsky-Christiansen",
      contact: "austin@teamtails.org",
      description: "The Austin chapter is known for its innovative community outreach programs and partnerships with local veterinary schools."
    },
    {
      name: "Team Tails Rockville",
      state: "Maryland",
      city: "Rockville",
      leader: "Rebecca Vasquez",
      contact: "chicago@teamtails.org",
      description: "Our Chicago chapter covers the Chicagoland area and has pioneered several training programs now used nationwide."
    },
    {
      name: "Team Tails Blair",
      state: "Maryland",
      city: "Silver Spring",
      leader: "Molly O'Brien & Maddie Seelke",
      contact: "denver@teamtails.org",
      description: "The Denver chapter specializes in rural outreach and works with mountain communities to improve animal welfare."
    },
    {
      name: "Team Tails Damascus",
      state: "Maryland",
      city: "Damascus",
      leader: "Caleigh Hoffman",
      contact: "austin@teamtails.org",
      description: "Our Miami chapter focuses on multilingual community education and disaster preparedness for pets."
    },
    {
      name: "Team Tails Einstein",
      state: "Maryland",
      city: "Kensington",
      leader: "Ella Tomas & Alex Hirsch",
      contact: "austin@teamtails.org",
      description: "The Seattle chapter is known for its environmental awareness campaigns and sustainable pet care initiatives."
    },
    {
      name: "Team Tails Walter Johnson",
      state: "Maryland",
      city: "Bethesda",
      leader: "Jay Resnik",
      contact: "austin@teamtails.org",
      description: "Our newest chapter in Atlanta is rapidly growing and focuses on spay/neuter awareness campaigns."
    },
    {
      name: "Team Tails Northwood",
      state: "Maryland",
      city: "Rockville",
      leader: "Lucia Rocha",
      contact: "austin@teamtails.org",
      description: "The Phoenix chapter specializes in desert climate pet care education and heat safety awareness."
    }
  ];

  const states = [...new Set(chapters.map(chapter => chapter.state))].sort();

  return (
    <div className="min-h-screen" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
    }}>
      <Navigation />
      {/* Header */}
      <section 
        className="py-20 text-white bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Chapters
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Team Tails has chapters across the United States, each serving their local communities with dedicated volunteers and targeted programs.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">{chapters.length}</div>
              <div className="text-gray-600">Active Chapters</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">{states.length}</div>
              <div className="text-gray-600">States</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">150+</div>
              <div className="text-gray-600">Total Volunteers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">20</div>
              <div className="text-gray-600">Avg. Chapter Size</div>
            </div>
          </div>
        </div>
      </section>

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
                  <p className="text-gray-600 mb-4 leading-relaxed">{chapter.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-3" />
                      <span>{chapter.city}, {chapter.state}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Mail className="w-4 h-4 mr-3" />
                      <a href={`mailto:${chapter.contact}`} className="hover:text-blue-600 transition-colors">
                        {chapter.contact}
                      </a>
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

      {/* Start a Chapter CTA */}
      <section 
        className="py-20 text-white bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "@/background.png"
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't See Your Area?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Help us expand our reach by starting a new Team Tails chapter in your community. We'll provide all the support and resources you need.
          </p>
          <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-4 text-lg">
            Start a New Chapter
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Chapters;
