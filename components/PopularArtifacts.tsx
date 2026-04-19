import { popularArtifacts, colors } from "@/constants";

export default function PopularArtifacts() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: colors.bordo }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: colors.cream }}
          >
            Forumdan mashhur artefaktlar
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: colors.creamDark }}
          >
            Jamoat tomonidan muhokama qilingan eng qiziqarli tarixiy asarlar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularArtifacts.map((artifact) => (
            <div 
              key={artifact.id}
              className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              style={{ backgroundColor: colors.cream }}
            >
              {/* Image placeholder */}
              <div 
                className="h-48 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${artifact.image})`,
                  backgroundColor: colors.bordoDark
                }}
              >
                <div className="w-full h-full bg-black bg-opacity-20" />
              </div>
              
              <div className="p-6">
                <h3 
                  className="text-xl font-bold mb-2"
                  style={{ color: colors.bordo }}
                >
                  {artifact.title}
                </h3>
                <p 
                  className="text-sm mb-4 line-clamp-2"
                  style={{ color: colors.bordoDark }}
                >
                  {artifact.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <span 
                    className="font-medium"
                    style={{ color: colors.bordoDark }}
                  >
                    {artifact.author}
                  </span>
                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        style={{ color: colors.bordo }}
                        viewBox="0 0 20 20"
                      >
                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                      </svg>
                      <span style={{ color: colors.bordoDark }}>{artifact.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        style={{ color: colors.bordo }}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      <span style={{ color: colors.bordoDark }}>{artifact.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button 
            className="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:opacity-80"
            style={{ 
              backgroundColor: colors.cream,
              color: colors.bordo
            }}
          >
            Forumga o'tish
          </button>
        </div>
      </div>
    </section>
  );
}
