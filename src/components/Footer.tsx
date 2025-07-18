import { Heart, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from 'react-router-dom'; // <--- IMPORT Link from React Router

export const Footer = () => {
  return (
    <footer 
      className="bg-white py-12 bg-cover bg-center relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-rounded-full flex items-center justify-center">
                <img src={"/favicon.ico"} className="w-9 h-9 rounded-full object-cover" />
              </div>
              <span className="text-2xl font-bold">Team Tails</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Connecting passionate volunteers to create positive change in animal welfare communities across Maryland.
            </p>
            <div className="flex space-x-4 mt-6">
              {/* These are just icons, not actual links for now */}
              <Instagram className="w-6 h-6 text-white hover:text-pink-400 cursor-pointer transition-colors duration-300" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-gray-600">
       
              <li>
                <Link to="/chapters" className="hover:text-gray-400 transition-colors duration-300">
                  Find and Join a Chapter
                </Link>
              </li>
            
              <li>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScyBASx2aqdYI2ClW35ohcKlhqbF0WhRF7u5AFaDlKTXCjirQ/viewform?usp=dialog" className="hover:text-gray-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                  Start a Chapter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <ul className="space-y-2 text-gray-600">
             
              <li>
                <Link to="/officers" className="hover:text-gray-400 transition-colors duration-300">
                  Meet Our Officers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Email us at:</li>
              <li> 
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=teamtailsmd@gmail.com"
                  className="text-blue-600 hover:underline"
                  target="_blank" // opens Gmail in a new tab
                  rel="noopener noreferrer"
                >
                  teamtailsmd@gmail.com
                </a>
              </li> 
            </ul>
          </div>
        </div>

        <div className="border-t border-white mt-8 pt-8 text-center text-black">
          <p>
            &copy; 2025 Team Tails. All rights reserved. Website:
            <span className="inline-block mx-1">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=brendan.weinstein@gmail.com"
                className="text-blue-600 hover:underline"
                target="_blank" rel="noopener noreferrer"
              > Brendan Weinstein </a>
            </span>
            and
            <span className="inline-block mx-1">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=beckett.bonness@gmail.com"
                className="text-blue-600 hover:underline"
                target="_blank" rel="noopener noreferrer"
              > Beckett Bonness</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
