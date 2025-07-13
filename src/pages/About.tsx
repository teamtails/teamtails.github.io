
import { Navigation } from "@/components/Navigation";
import { About } from "@/components/About";
import { Impact } from "@/components/Impact";
import { Footer } from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <Navigation />
      <hr className="border-white" />
      <About />
      <hr className="border-white" />
      <Impact />
      <hr className="border-white" />
      <Footer />
    </div>
  );
};

export default AboutPage;
