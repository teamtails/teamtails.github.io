
import { Navigation } from "@/components/Navigation";
import { About as AboutSection } from "@/components/About";
import { Impact } from "@/components/Impact";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <Navigation />
      <div className="pt-8">
        <AboutSection />
        <Impact />
      </div>
      <Footer />
    </div>
  );
};

export default About;
