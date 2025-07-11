
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Impact } from "@/components/Impact";
import { GetInvolved } from "@/components/GetInvolved";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <Navigation />
      <Hero />
      <hr className="border-white" />
      <About />
      <hr className="border-white" />
      <Impact />
      <hr className="border-white" />
      <GetInvolved />
      <hr className="border-white" />
      <UpcomingEvents />      
      <hr className="border-white" />
      <Contact />
      <hr className="border-white" />
      <Footer />
    </div>
  );
};

export default Index;
