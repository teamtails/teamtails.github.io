
export const Impact = () => {
  const stats = [
    { number: "2,500+", label: "Volunteers Trained", color: "text-[#31389f]" },
    { number: "1,800+", label: "Community Events", color: "text-[#992032]" },
    { number: "50+", label: "Active Chapters", color: "text-[#f8cd21]" },
    { number: "15", label: "Years of Service", color: "text-[#31389f]" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#31389f] to-[#992032] text-white">
      <div className="container mx-auto px-6">
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
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
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
