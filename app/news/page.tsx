"use client";

import { useState } from "react";
import Image from "next/image";
import { newsData, colors } from "@/constants";

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 9;
  
  const totalPages = Math.ceil(newsData.length / newsPerPage);
  const startIndex = (currentPage - 1) * newsPerPage;
  const endIndex = startIndex + newsPerPage;
  const currentNews = newsData.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.cream }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 
            className="text-4xl font-bold mb-4"
            style={{ color: colors.bordo }}
          >
            Yangiliklar
          </h1>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: colors.bordoDark }}
          >
            O'zbekiston va dunyo tarixidagi eng so'ngi yangiliklar va voqealar
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentNews.map((news) => (
            <div 
              key={news.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              {/* News Image */}
              <div className="relative h-48">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* News Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span 
                    className="text-xs font-medium px-2 py-1 rounded"
                    style={{ 
                      backgroundColor: colors.bordo,
                      color: colors.cream 
                    }}
                  >
                    {news.category}
                  </span>
                  <span 
                    className="text-sm"
                    style={{ color: colors.bordoDark }}
                  >
                    {news.date}
                  </span>
                </div>
                
                <h2 
                  className="text-xl font-bold mb-3"
                  style={{ color: colors.bordo }}
                >
                  {news.title}
                </h2>
                
                <p 
                  className="text-sm mb-3 line-clamp-2"
                  style={{ color: colors.bordoDark }}
                >
                  {news.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span 
                    className="text-sm font-medium"
                    style={{ color: colors.bordoDark }}
                  >
                    {news.author}
                  </span>
                  <span 
                    className="text-sm"
                    style={{ color: colors.bordoDark }}
                  >
                    {news.readTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-4 mt-8">
          <button
            onClick={goToPrevious}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              currentPage === 1 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:opacity-80'
            }`}
            style={{ 
              backgroundColor: currentPage === 1 ? colors.creamDark : colors.bordo,
              color: currentPage === 1 ? colors.bordoDark : colors.cream
            }}
          >
            Oldingi
          </button>
          
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => goToPage(index + 1)}
                className={`w-10 h-10 rounded-lg font-medium transition-all duration-200 ${
                  currentPage === index + 1
                    ? 'shadow-lg scale-110'
                    : 'hover:scale-105'
                }`}
                style={{
                  backgroundColor: currentPage === index + 1 ? colors.bordo : colors.cream,
                  color: currentPage === index + 1 ? colors.cream : colors.bordo
                }}
              >
                {index + 1}
              </button>
            ))}
          </div>
          
          <button
            onClick={goToNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              currentPage === totalPages 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:opacity-80'
            }`}
            style={{ 
              backgroundColor: currentPage === totalPages ? colors.creamDark : colors.bordo,
              color: currentPage === totalPages ? colors.bordoDark : colors.cream
            }}
          >
            Keyingi
          </button>
        </div>
      </div>
    </div>
  );
}
