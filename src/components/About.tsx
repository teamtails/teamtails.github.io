
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
            At Team Tails, we believe every animal deserves a loving home and a second chance at happiness. 
            We rescue, rehabilitate, and rehome animals while building stronger communities through compassion.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
              <Heart className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Rescue</h3>
            <p className="text-gray-600 leading-relaxed">
              We rescue animals from dangerous situations, providing immediate medical care and safety.
            </p>
          </div>
          
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
              <HandHeart className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Rehabilitate</h3>
            <p className="text-gray-600 leading-relaxed">
              Our dedicated team provides medical treatment, behavioral training, and lots of love.
            </p>
          </div>
          
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-300">
              <Users className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Rehome</h3>
            <p className="text-gray-600 leading-relaxed">
              We carefully match animals with loving families, ensuring perfect forever homes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
