import { whyUs, colors } from "@/constants";

export default function WhyUs() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: colors.bordo }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: colors.cream }}
          >
            {whyUs.title}
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: colors.creamDark }}
          >
            {whyUs.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUs.reasons.map((reason, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              style={{ backgroundColor: colors.cream }}
            >
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold"
                style={{ backgroundColor: colors.bordo, color: colors.cream }}
              >
                {reason.icon}
              </div>
              
              <h3 
                className="text-lg font-bold mb-2"
                style={{ color: colors.bordo }}
              >
                {reason.title}
              </h3>
              
              <p 
                className="text-sm leading-relaxed"
                style={{ color: colors.bordoDark }}
              >
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            className="px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 hover:opacity-80"
            style={{ 
              backgroundColor: colors.cream,
              color: colors.bordo
            }}
          >
            Boshlanish
          </button>
        </div>
      </div>
    </section>
  );
}
