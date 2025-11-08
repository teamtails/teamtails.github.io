
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

export const UpcomingEvents = () => {
  const events = [
    {
      title: "Social Media Meeting #4",
      date: "November 2th, 2025",
      time: "5:30 to 6:30",
      location: "Zoom",
      chapter: "All Chapters",
      description: "Learn how to make useful technology for shelters!",
      spots: "Anyone welcome",
      link: ""
    },
    {
      title: "Technology Meeting #2",
      date: "November 6th, 2025",
      time: "5:30 to 6:30",
      location: "Zoom",
      chapter: "All Chapters",
      description: "Help out at our video making sessions!",
      spots: "Anyone welcome",
      link: ""
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
