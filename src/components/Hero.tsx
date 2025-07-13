
import { Button } from "@/components/ui/button";
import { Heart, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url("/ground.png")` }}
    >
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-2">
            <img src={"/favicon.ico"} className="w-38 h-38" />
          </div>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Join our community of passionate volunteers making a difference in animal welfare across Maryland!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-700 font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/chapters">Find Your Chapter</Link>
            </Button>
          </div>
          
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300"
            aria-label="Scroll to learn more"
          >
            <ArrowDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};
