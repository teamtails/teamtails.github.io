
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export const Contact = () => {
  return (
    <section 
      id="contact" 
      className="py-20 text-white bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Join our community of passionate volunteers today. Reach out to learn more about volunteer opportunities in your area.
          </p>
        </div>
        
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <MessageSquare className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Want To Get Started or Have Questions?</h3>
            <p className="text-white/90 mb-6">
              Get in touch with our team!
            </p>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkwsmPJVkmdtQZfMzNmPGWPmKCCvXKvnfWJfvZzLpcCCRQnXlCGCMttlcjNbfTzhtnrgKq">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-4 text-lg">
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
