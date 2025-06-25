
export const Impact = () => {
  const stats = [
    { number: "2,500+", label: "Volunteers Trained", color: "text-blue-600" },
    { number: "1,800+", label: "Community Events", color: "text-green-600" },
    { number: "50+", label: "Active Chapters", color: "text-purple-600" },
    { number: "15", label: "Years of Service", color: "text-orange-600" }
  ];

  return (
    <section 
      className="py-20 text-white bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Making a Difference Together
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Through dedicated volunteers and strong community partnerships, we're creating positive change for animals nationwide.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color.replace('text-', 'text-white')}`}>
                  {stat.number}
                </div>
                <div className="text-lg font-semibold">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
