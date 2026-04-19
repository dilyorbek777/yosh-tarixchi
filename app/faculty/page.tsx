import { facultyDetails, colors } from "@/constants";

export default function FacultyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.cream }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className="text-4xl font-bold mb-4"
            style={{ color: colors.bordo }}
          >
            {facultyDetails.title}
          </h1>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: colors.bordoDark }}
          >
            {facultyDetails.description}
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyDetails.faculties.map((faculty, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="text-center">
                {/* Faculty Icon */}
                <div 
                  className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold"
                  style={{ 
                    backgroundColor: colors.bordo,
                    color: colors.cream
                  }}
                >
                  {index + 1}
                </div>
                
                {/* Faculty Name */}
                <h3 
                  className="text-xl font-bold mb-2"
                  style={{ color: colors.bordo }}
                >
                  {faculty.name}
                </h3>
                
                {/* Specialty Badge */}
                <div 
                  className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-3"
                  style={{ 
                    backgroundColor: colors.cream,
                    color: colors.bordo
                  }}
                >
                  {faculty.specialty}
                </div>
                
                {/* Description */}
                <p 
                  className="text-sm mb-4"
                  style={{ color: colors.bordoDark }}
                >
                  {faculty.description}
                </p>
                
                {/* Student Count */}
                <div className="flex items-center justify-center space-x-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    style={{ color: colors.bordo }}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 011 0zM12 14a7 7 0 00-7 7h14a7 7 0 007-7z" />
                  </svg>
                  <span 
                    className="font-medium"
                    style={{ color: colors.bordo }}
                  >
                    {faculty.students} talaba
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <button 
            className="px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 hover:opacity-80"
            style={{ 
              backgroundColor: colors.bordo,
              color: colors.cream
            }}
          >
            Barcha fakultetlar
          </button>
        </div>
      </div>
    </div>
  );
}
