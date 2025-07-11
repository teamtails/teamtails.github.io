
export const Impact = () => {
  const stats = [
    { number: "2", label: "Ongoing Advocacy Iniatives", color: "text-blue-600" },
    { number: "9", label: "Active Chapters", color: "text-green-600" },
    { number: "5", label: "Ongoing Volunteer Iniatives", color: "text-purple-600" },
  ];

  return (
    <section 
      className="py-20 text-white bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url("/ground.png")` }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We're Doing Now
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Sign up for volunteer projects through our Instagram. Get in contact with us for advocacy projects!
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-11">
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
