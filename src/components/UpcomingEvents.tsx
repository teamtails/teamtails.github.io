
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

export const UpcomingEvents = () => {
  const events = [
    {
      title: "Volunteer Training Workshop",
      date: "March 15, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Austin Community Center",
      chapter: "Team Tails Austin",
      description: "Learn the basics of animal care and volunteer safety protocols.",
      spots: "12 spots available"
    },
    {
      title: "Community Outreach Fair",
      date: "March 22, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Chicago Downtown Park",
      chapter: "Team Tails Chicago",
      description: "Join us for a day of community education and pet care awareness.",
      spots: "Volunteers needed"
    },
    {
      title: "Monthly Chapter Meeting",
      date: "April 3, 2024",
      time: "7:00 PM - 8:30 PM",
      location: "Virtual Meeting",
      chapter: "All Chapters",
      description: "Monthly planning meeting for all Team Tails volunteers.",
      spots: "Open to all"
    },
    {
      title: "Pet Safety Education Drive",
      date: "April 12, 2024",
      time: "11:00 AM - 3:00 PM",
      location: "Los Angeles City Mall",
      chapter: "Team Tails Los Angeles",
      description: "Educational booth about pet safety and responsible ownership.",
      spots: "8 spots available"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us at upcoming volunteer events and training sessions. 
            Together, we can make a bigger impact in our communities.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-gray-800 mb-2">{event.title}</CardTitle>
                    <CardDescription className="text-[#31389f] font-semibold">
                      {event.chapter}
                    </CardDescription>
                  </div>
                  <div className="bg-[#31389f]/10 rounded-lg p-2">
                    <Calendar className="w-5 h-5 text-[#31389f]" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-3" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-3" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-3" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-3" />
                    <span>{event.spots}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-[#31389f] hover:bg-[#2a3091]">
                  Register for Event
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
