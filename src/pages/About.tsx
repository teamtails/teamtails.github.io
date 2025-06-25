
import { Navigation } from "@/components/Navigation";
import { About as AboutSection } from "@/components/About";
import { Impact } from "@/components/Impact";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <Navigation />
      {/* Header */}
      <section 
        className="py-20 text-white bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518077202469-dc8d3c0c6c64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Team Tails
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Learn about our mission, values, and the passionate community working to improve animal welfare across the nation.
          </p>
        </div>
      </section>
      
      <div className="pt-8">
        <AboutSection />
        <Impact />
      </div>
      <Footer />
    </div>
  );
};

export default About;
