
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { Footer } from "@/components/Footer";

const Officers = () => {
  const officers = [
    {
      name: "Sarah Johnson",
      title: "National President",
      bio: "Sarah has been with Team Tails for over 8 years and has led initiatives that have expanded our reach to over 50 chapters nationwide. She holds a degree in Animal Science and previously worked at the National Animal Welfare Association.",
      email: "sarah.johnson@teamtails.org",
      phone: "(555) 123-0001",
      location: "National Headquarters, Washington DC",
      image: "/placeholder.svg"
    },
    {
      name: "Michael Chen",
      title: "Vice President of Operations",
      bio: "Michael oversees the day-to-day operations of all Team Tails chapters. With a background in nonprofit management, he ensures our volunteers have the resources and support they need to succeed.",
      email: "michael.chen@teamtails.org",
      phone: "(555) 123-0002",
      location: "National Headquarters, Washington DC",
      image: "/placeholder.svg"
    },
    {
      name: "Emily Rodriguez",
      title: "Director of Volunteer Programs",
      bio: "Emily develops and implements training programs for our volunteers. She has a passion for education and has created curriculum used by animal welfare organizations across the country.",
      email: "emily.rodriguez@teamtails.org",
      phone: "(555) 123-0003",
      location: "Training Center, Austin TX",
      image: "/placeholder.svg"
    },
    {
      name: "David Thompson",
      title: "Community Outreach Coordinator",
      bio: "David leads our community engagement efforts and helps establish new chapters. His grassroots organizing experience has been instrumental in our expansion into rural communities.",
      email: "david.thompson@teamtails.org",
      phone: "(555) 123-0004",
      location: "Regional Office, Denver CO",
      image: "/placeholder.svg"
    },
    {
      name: "Lisa Park",
      title: "Secretary & Communications Director",
      bio: "Lisa manages our communications and keeps our organization running smoothly. She coordinates between chapters and ensures consistent messaging across all our platforms.",
      email: "lisa.park@teamtails.org",
      phone: "(555) 123-0005",
      location: "National Headquarters, Washington DC",
      image: "/placeholder.svg"
    },
    {
      name: "Robert Williams",
      title: "Treasurer",
      bio: "Robert oversees our financial operations and ensures transparency in all our funding. His background in nonprofit accounting helps us maximize the impact of every dollar we manage.",
      email: "robert.williams@teamtails.org",
      phone: "(555) 123-0006",
      location: "National Headquarters, Washington DC",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Meet Our Officers
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            The dedicated leaders who guide Team Tails in our mission to improve animal welfare through volunteer action.
          </p>
        </div>
      </section>

      {/* Officers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {officers.map((officer, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {officer.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-gray-800">{officer.name}</CardTitle>
                      <CardDescription className="text-lg text-blue-600 font-semibold">
                        {officer.title}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">{officer.bio}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Mail className="w-4 h-4 mr-3" />
                      <a href={`mailto:${officer.email}`} className="hover:text-blue-600 transition-colors">
                        {officer.email}
                      </a>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="w-4 h-4 mr-3" />
                      <span>{officer.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-3" />
                      <span>{officer.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Officers;
