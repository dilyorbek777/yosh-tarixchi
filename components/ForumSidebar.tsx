"use client";

import { useState } from "react";
import { colors } from "@/constants";

interface ForumSidebarProps {
  categories: Array<{
    title: string;
    description: string;
    postCount: number;
    icon: string;
    color: string;
  }>;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ForumSidebar({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: ForumSidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="w-full lg:w-80 bg-white rounded-lg shadow-lg p-6">
      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Forumda qidirish..."
            className="w-full px-4 py-3 pr-10 rounded-lg border focus:outline-none focus:ring-2"
            style={{ 
              borderColor: colors.bordoDark,
              color: colors.bordo
            }}
          />
          <button 
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            style={{ color: colors.bordoDark }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100-4 4 0 0 4 4 0 008zM2 4a6 6 0 1006 0 0 4 4 0 004zM14 14a6 6 0 1006 0 0 4 4 0 004z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 
            className="text-lg font-bold"
            style={{ color: colors.bordo }}
          >
            Kategoriyalar
          </h2>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 rounded hover:bg-gray-100 transition-colors duration-200"
            style={{ color: colors.bordoDark }}
          >
            <svg 
              className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10.586 18.586a1 1 0 001.414 1.414L8.172 15.172a4 4 0 00-5.656 5.656L5.293 11.657a4 4 0 00-.565.005l.828.828.828H8.344l.828.828H16.828l-.828-.828H8.344s-.565.005-.565.005A1 1 0 006.828 6.828L5.293 11.657a1 1 0 01.414 1.414L2.172 8.172a4 4 0 005.656 5.656z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        <div className={`space-y-2 ${isExpanded ? 'block' : 'hidden'}`}>
          {categories.map((category) => (
            <button
              key={category.title}
              onClick={() => onCategoryChange(category.title)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                activeCategory === category.title
                  ? 'shadow-md scale-105'
                  : 'hover:scale-102'
              }`}
              style={{
                backgroundColor: activeCategory === category.title ? colors.bordo : 'transparent',
                color: activeCategory === category.title ? colors.cream : colors.bordo,
                borderLeft: activeCategory === category.title ? `4px solid ${colors.bordo}` : '4px solid transparent'
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: category.color, color: colors.cream }}
                  >
                    {category.icon}
                  </div>
                  <span className="font-medium">{category.title}</span>
                </div>
                <span 
                  className="text-sm font-medium"
                  style={{ color: activeCategory === category.title ? colors.cream : colors.bordoDark }}
                >
                  {category.postCount}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div>
        <h2 
          className="text-lg font-bold mb-4"
          style={{ color: colors.bordo }}
        >
          Ommabopiy teglar
        </h2>
        <div className="flex flex-wrap gap-2">
          {['Tarix', 'Arxeologiya', 'Madaniyat', 'Qadimiy davlat', 'Buyuk allomalar'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 hover:scale-110"
              style={{ 
                backgroundColor: colors.cream,
                color: colors.bordo
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
