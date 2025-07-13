
import { Navigation } from "@/components/Navigation";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-blue-600">
      <Navigation />
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
