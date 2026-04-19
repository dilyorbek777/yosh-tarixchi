import { colors } from "@/constants";

interface ForumCategoryProps {
  title: string;
  description: string;
  postCount: number;
  icon: string;
  color: string;
}

export default function ForumCategory({ 
  title, 
  description, 
  postCount, 
  icon, 
  color 
}: ForumCategoryProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
      style={{ borderLeft: `4px solid ${color}` }}
    >
      {/* Category Header */}
      <div className="flex items-center space-x-3 mb-4">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold"
          style={{ backgroundColor: color, color: colors.cream }}
        >
          {icon}
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
            {postCount} ta muhokama
          </p>
        </div>
      </div>

      {/* Category Description */}
      <p 
        className="text-sm leading-relaxed"
        style={{ color: colors.bordoDark }}
      >
        {description}
      </p>
    </div>
  );
}
