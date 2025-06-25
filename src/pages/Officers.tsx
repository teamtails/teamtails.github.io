
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { Footer } from "@/components/Footer";

const Officers = () => {
  const officers = [
    {
      name: "Beckett Bonness",
      title: "President",
      bio: "As President, he brings experience from business leadership through DECA, the World Trade Center Institute, and economics advocacy.",
      email: "sarah.johnson@teamtails.org",
      phone: "(555) 123-0001",
      location: "National Headquarters, Washington DC",
      image: "/econme-copy.jpg"
    },
    {
      name: "Molly O'Brien",
      title: "Vice President",
      bio: " As Vice President, she brings experience in government advocacy and student journalism through organizations like Silver Chips Online.",
      email: "michael.chen@teamtails.org",
      phone: "(555) 123-0002",
      location: "National Headquarters, Washington DC",
      image: "/Molly.jpg"
    },
    {
      name: "Rafi Pikofsky-Christiansen",
      title: "Vice President",
      bio: "As Vice President, he contributes leadership and dedication gained through representing the USA for gymnastics.",
      email: "emily.rodriguez@teamtails.org",
      phone: "(555) 123-0003",
      location: "Training Center, Austin TX",
      image: "/Rafi.png"
    },
    {
      name: "Maddie Seelke",
      title: "Head of PR",
      bio: "As Head of PR, she brings experience in communications and leadership through international events run through CIEE.",
      email: "david.thompson@teamtails.org",
      phone: "(555) 123-0004",
      location: "Regional Office, Denver CO",
      image: "/Maddie.jpg"
    },
    {
      name: "Brendan Weinstein",
      title: "Head of Technology",
      bio: "As Head of Technology, he contributes technical expertise in many coding languages as well as web design.",
      email: "robert.williams@teamtails.org",
      phone: "(555) 123-0006",
      location: "National Headquarters, Washington DC",
      image: "/Brendan.PNG"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <Navigation />
      {/* Header */}
      <section 
        className="py-20 text-white bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url("/background.PNG")`
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
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
                      <img src={officer.image} alt={officer.name} className="w-20 h-20 rounded-full object-cover" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-gray-800">{officer.name}</CardTitle>
                    <CardDescription className="text-lg text-blue-600 font-semibold">
                      {officer.title}
                      <p className="text-gray-600 mb-6 leading-relaxed">{officer.bio}</p>
                    </CardDescription>
                  </div>
                </CardHeader>
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
