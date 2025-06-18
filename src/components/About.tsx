
import { Users, Heart, HandHeart } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
           A Collective of Nine Schools Joining Forces to Make an Impact in Animal Welfare and the Support of Our Shelters

          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
              <Heart className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Community Outreach</h3>
            <p className="text-gray-600 leading-relaxed">
              We are dedicated to creating opportunities for youth to interact and help their local shelter.


            </p>
          </div>
          
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
              <HandHeart className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Volunteer Support</h3>
            <p className="text-gray-600 leading-relaxed">
              We advertise and spread awareness about animals in need of homes. 
            </p>
          </div>
          
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-300">
              <Users className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Advocacy</h3>
            <p className="text-gray-600 leading-relaxed">
              We advocate for animal rights along with animal welfare issues across the globe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
