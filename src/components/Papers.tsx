
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

interface PetMemorial {
  id: string;
  name: string;
  photo: string;
  dateOfBirth?: string;
  dateOfPassing: string;
  description: string;
  breed?: string;
}

// Sample data - you can replace this with real data later
const petMemorials: PetMemorial[] = [
  {
    id: "1",
    name: "Bella",
    photo: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
    dateOfBirth: "2018-03-15",
    dateOfPassing: "2024-11-20",
    description: "Beloved orange tabby who brought joy to our family every day. She loved sunny windowsills and gentle head scratches.",
    breed: "Orange Tabby"
  },
  {
    id: "2",
    name: "Max",
    photo: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop",
    dateOfBirth: "2019-07-08",
    dateOfPassing: "2024-10-15",
    description: "A playful grey kitten at heart who never grew out of chasing shadows and playing with yarn balls.",
    breed: "Grey Tabby"
  },
  {
    id: "3",
    name: "Luna",
    photo: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop",
    dateOfBirth: "2016-12-03",
    dateOfPassing: "2024-09-28",
    description: "A gentle soul who loved long walks and watching over the family. Her loyalty knew no bounds.",
    breed: "Mixed Breed"
  },
  {
    id: "4",
    name: "Charlie",
    photo: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=400&h=400&fit=crop",
    dateOfBirth: "2015-05-20",
    dateOfPassing: "2024-08-12",
    description: "A majestic companion who loved open fields and gentle breezes. Always free-spirited and strong.",
    breed: "Horse"
  }
];

const PolaroidCard = ({ memorial }: { memorial: PetMemorial }) => {
  return (
    <Card className="bg-white shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300 hover:scale-105 w-64 mx-auto">
      <CardContent className="p-4">
        {/* Photo section */}
        <div className="bg-gray-100 mb-4 aspect-square overflow-hidden">
          <img 
            src={memorial.photo} 
            alt={memorial.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
            }}
          />
        </div>
        
        {/* Text section */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-1 mb-2">
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <h3 className="text-lg font-bold text-gray-800">{memorial.name}</h3>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
          </div>
          
          {memorial.breed && (
            <p className="text-sm text-gray-600 italic">{memorial.breed}</p>
          )}
          
          <div className="text-xs text-gray-500 space-y-1">
            {memorial.dateOfBirth && (
              <p>Born: {new Date(memorial.dateOfBirth).toLocaleDateString()}</p>
            )}
            <p>Passed: {new Date(memorial.dateOfPassing).toLocaleDateString()}</p>
          </div>
          
          <p className="text-sm text-gray-700 leading-relaxed mt-3">
            {memorial.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export const Papers = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Beloved Companions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A celebration of the precious pets who filled our lives with unconditional love, 
            joy, and countless cherished memories. Though they are no longer with us, 
            their spirits live on in our hearts forever.
          </p>
        </div>
        
        {/* Polaroid Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {petMemorials.map((memorial) => (
            <div key={memorial.id} className="flex justify-center">
              <PolaroidCard memorial={memorial} />
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-4">
            Would you like to add your beloved companion to our memorial board?
          </p>
          <p className="text-sm text-gray-500">
            Contact us to share their story and celebrate their life
          </p>
        </div>
      </div>
    </section>
  );
};
