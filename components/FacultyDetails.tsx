import { facultyDetails, colors } from "@/constants";

export default function FacultyDetails() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: colors.cream }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: colors.bordo }}
          >
            {facultyDetails.title}
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: colors.bordoDark }}
          >
            {facultyDetails.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facultyDetails.faculties.map((faculty, index) => (
            <div 
              key={index}
              className="rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              style={{ backgroundColor: colors.bordo }}
            >
              <div className="text-center">
                <div 
                  className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold"
                  style={{ backgroundColor: colors.cream, color: colors.bordo }}
                >
                  {index + 1}
                </div>
                
                <h3 
                  className="text-xl font-bold mb-2"
                  style={{ color: colors.cream }}
                >
                  {faculty.name}
                </h3>
                
                <div 
                  className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-3"
                  style={{ backgroundColor: colors.cream, color: colors.bordo }}
                >
                  {faculty.specialty}
                </div>
                
                <p 
                  className="text-sm mb-4"
                  style={{ color: colors.creamDark }}
                >
                  {faculty.description}
                </p>
                
                <div className="flex items-center justify-center space-x-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    style={{ color: colors.cream }}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <span 
                    className="font-medium"
                    style={{ color: colors.cream }}
                  >
                    {faculty.students} talaba
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            className="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:opacity-80"
            style={{ 
              backgroundColor: colors.bordo,
              color: colors.cream
            }}
          >
            Barcha fakultetlar
          </button>
        </div>
      </div>
    </section>
  );
}
