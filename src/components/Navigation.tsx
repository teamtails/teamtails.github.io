
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={"/favicon.ico"} className="w-12 h-12 rounded-full object-cover" />
            <span className="text-2xl font-bold text-gray-800">Team Tails</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
              Home
            </Link>
            <Link to="/chapters" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
              Chapters
            </Link>
            <Link to="/officers" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
              Meet Our Officers
            </Link>
            <Link to="/events" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
              Events
            </Link>
            <Link to="/remembrance" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
              Remembrance
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/chapters" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Chapters
              </Link>
              <Link 
                to="/officers" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Meet our Officers
              </Link>
              <Link 
                to="/events" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link 
                to="/remembrance" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Remembrance
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
