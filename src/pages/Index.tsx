
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
      <About />
      <Impact />
      <GetInvolved />
      <UpcomingEvents />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
