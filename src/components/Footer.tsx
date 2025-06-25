
import { Heart, Facebook, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer 
      className="text-white py-12 bg-cover bg-center relative"
      style={{ backgroundImage: `url("/background.png")` }}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-8 h-8 text-red-400" />
              <span className="text-2xl font-bold">Team Tails</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Connecting passionate volunteers to create positive change in animal welfare communities nationwide.
            </p>
            <div className="flex space-x-4 mt-6">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-300" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-300" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors duration-300" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Join a Chapter</a></li>
              <li><a href="/chapters" className="hover:text-white transition-colors duration-300">Find Your Chapter</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Start a Chapter</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors duration-300">Our Mission</a></li>
              <li><a href="/officers" className="hover:text-white transition-colors duration-300">Meet Our Officers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Volunteer Way</li>
              <li>Washington, DC 20001</li>
              <li>(555) 123-TAILS</li>
              <li>info@teamtails.org</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Team Tails. All rights reserved. Made with ❤️ by volunteers for animals.</p>
        </div>
      </div>
    </footer>
  );
};
