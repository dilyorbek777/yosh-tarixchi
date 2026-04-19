import { aboutUs, colors } from "@/constants";

export default function AboutUs() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: colors.cream }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: colors.bordo }}
          >
            {aboutUs.title}
          </h2>
          <p 
            className="text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: colors.bordoDark }}
          >
            {aboutUs.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutUs.features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
              style={{ 
                backgroundColor: colors.bordo,
                color: colors.cream
              }}
            >
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold"
                style={{ backgroundColor: colors.cream, color: colors.bordo }}
              >
                {index + 1}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
