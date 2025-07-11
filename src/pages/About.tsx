
import { Navigation } from "@/components/Navigation";
import { About as AboutSection } from "@/components/About";
import { Impact } from "@/components/Impact";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <Navigation />
      <AboutSection />
        <Impact />
    <Footer />
  );
};

export default About;
