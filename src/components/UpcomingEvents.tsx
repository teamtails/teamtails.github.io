
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

export const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Animal Welfare Workshop",
      date: "July 15, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Community Center, Downtown",
      type: "training",
      participants: "25 volunteers",
      description: "Comprehensive training session on animal behavior and handling techniques for new volunteers."
    },
    {
      id: 2,
      title: "Pet Care Education Fair",
      date: "July 22, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "City Park",
      type: "outreach",
      participants: "Expected 200+ attendees",
      description: "Community event featuring pet care demonstrations, educational booths, and volunteer recruitment."
    },
    {
      id: 3,
      title: "Volunteer Appreciation Dinner",
      date: "August 5, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Grand Hotel Ballroom",
      type: "social",
      participants: "All volunteers",
      description: "Annual celebration recognizing outstanding volunteer contributions and achievements."
    }
  ];

  const trainingEvents = events.filter(event => event.type === "training");
  const outreachEvents = events.filter(event => event.type === "outreach");
  const socialEvents = events.filter(event => event.type === "social");

  const EventCard = ({ event }: { event: typeof events[0] }) => (
    <Card className="mb-4 hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl text-gray-800">{event.title}</CardTitle>
        <CardDescription className="text-gray-600">{event.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-2" />
            <span>{event.participants}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us at our upcoming events and be part of the change you want to see in animal welfare.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Events</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="outreach">Outreach</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="training" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {trainingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="outreach" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {outreachEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="social" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {socialEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
