import { colors } from "@/constants";

interface ForumPostProps {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  replies: number;
  views: number;
  lastActivity: string;
  category: string;
  tags: string[];
}

export default function ForumPost({ 
  id, 
  title, 
  excerpt, 
  author, 
  replies, 
  views, 
  lastActivity, 
  category, 
  tags 
}: ForumPostProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:scale-102">
      {/* Post Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
            style={{ backgroundColor: colors.bordo, color: colors.cream }}
          >
            {author.charAt(0).toUpperCase()}
          </div>
          <div>
            <h3 
              className="text-lg font-bold"
              style={{ color: colors.bordo }}
            >
              {title}
            </h3>
            <p 
              className="text-sm"
              style={{ color: colors.bordoDark }}
            >
              {category}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-sm">
          <span style={{ color: colors.bordoDark }}>
            {views} ko'rish
          </span>
          <span style={{ color: colors.bordoDark }}>
            {replies} javob
          </span>
          <span style={{ color: colors.bordoDark }}>
            {lastActivity}
          </span>
        </div>
      </div>

      {/* Post Content */}
      <p 
        className="text-gray-700 mb-4 line-clamp-3"
        style={{ color: colors.bordoDark }}
      >
        {excerpt}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{ 
              backgroundColor: colors.cream,
              color: colors.bordo
            }}
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Post Actions */}
      <div className="flex items-center justify-between pt-4 border-t">
        <button 
          className="text-sm font-medium hover:opacity-80 transition-colors duration-200"
          style={{ color: colors.bordo }}
        >
          Batafsil o'qish
        </button>
        <div className="flex space-x-3">
          <button 
            className="p-2 rounded-full transition-all duration-200 hover:scale-110"
            style={{ backgroundColor: colors.cream, color: colors.bordo }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3.172 5.172a4 4 0 014.656 0l5.657 5.657a4 4 0 014.656 0L10 10l5.657-5.657a4 4 0 0014.656 0L16.828 12l-5.657 5.657a4 4 0 0014.656 0z" />
            </svg>
          </button>
          <button 
            className="p-2 rounded-full transition-all duration-200 hover:scale-110"
            style={{ backgroundColor: colors.cream, color: colors.bordo }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3.172 5.172a4 4 0 014.656 0l5.657 5.657a4 4 0 014.656 0L10 10l5.657-5.657a4 4 0 0014.656 0L16.828 12l-5.657 5.657a4 4 0 0014.656 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
