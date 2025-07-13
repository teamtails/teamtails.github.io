
import { Navigation } from "@/components/Navigation";
import { AboutPage } from "@/components/About";
import { Impact } from "@/components/Impact";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <Navigation />
      <hr className="border-white" />
      <AboutPage />
      <hr className="border-white" />
      <Impact />
      <hr className="border-white" />
      <Footer />a
    </div>
  );
};

export default About;
