
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

export const UpcomingEvents = () => {
  const events = [
    {
      title: "Birdhouse Design Planning",
      date: "July 17th, 2025",
      time: "5:00 - 6:00 PM",
      location: "Zoom",
      chapter: "All Chapters",
      description: "Help plan our upcoming birdhouse making event!",
      spots: "Volunteers needed",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfxgPfbQjE6uQcwcpoCmPLG4_4-IvNKFhuws-8TloarWRFxvg/viewform?usp=dialog"
    },
    {
      title: "Social Media Project: Meeting 2",
      date: "July 18th, 2025",
      time: "5:00 - 6:00 PM",
      location: "Zoom",
      chapter: "All Chapters",
      description: "Help create Instagram Reels and TikToks to spread our message!",
      spots: "Volunteers needed",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSf2kwUDJGCqgGW9ha7aPOKUPr2w9yBqXiH4ePEWLGdhB1aYOA/viewform?usp=dialog"
    }
  ];

  return (
    <section 
        className="py-20 text-white bg-cover bg-center bg-no-repeat relative"
      >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us at upcoming volunteer events and training sessions. 
            Summer meetings and events usually include all chapters.
          </p>
        </div>
        <hr className="border-white" />
        <div className="grid lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-gray-800 mb-2">{event.title}</CardTitle>
                    <CardDescription className="text-blue-600 font-semibold">
                      {event.chapter}
                    </CardDescription>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
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
                
                <a href= {event.link} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Register for Event
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
