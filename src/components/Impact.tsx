
export const Impact = () => {
  const stats = [
    { number: "2,500+", label: "Animals Rescued", color: "text-blue-600" },
    { number: "1,800+", label: "Successful Adoptions", color: "text-green-600" },
    { number: "300+", label: "Active Volunteers", color: "text-purple-600" },
    { number: "15", label: "Years of Service", color: "text-orange-600" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Making a Difference
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Together, we've transformed thousands of lives and created countless happy endings.
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
