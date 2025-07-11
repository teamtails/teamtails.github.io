
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
      <div className="border-t border-white mt-16 pt-16 text-center text-white">
      <About />
      <div className="border-t border-white mt-16 pt-16 text-center text-white">
      <Impact />
      <div className="border-t border-white mt-16 pt-16 text-center text-white">
      <GetInvolved />
      <div className="border-t border-white mt-16 pt-16 text-center text-white">
      <UpcomingEvents />      
      <div className="border-t border-white mt-16 pt-16 text-center text-white">
      <Contact />
      <div className="border-t border-white mt-16 pt-16 text-center text-white">
      <Footer />
    </div>
  );
};

export default Index;
