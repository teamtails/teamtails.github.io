
import { Navigation } from "@/components/Navigation";
import { Papers } from "@/components/Papers";
import { Footer } from "@/components/Footer";

const Remembrance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <Navigation />
      <Papers />
      <hr className="border-white" />
      <Footer />
    </div>
  );
};

export default Remembrance;
