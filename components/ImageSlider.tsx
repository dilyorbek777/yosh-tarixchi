"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { sliderImages, colors } from "@/constants";

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentIndex((prevIndex) =>
          prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
        );
        setTimeout(() => setIsAnimating(false), 500);
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [isAnimating]);

  const goToPrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(currentIndex === 0 ? sliderImages.length - 1 : currentIndex - 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(currentIndex === sliderImages.length - 1 ? 0 : currentIndex + 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden rounded-lg">
      {/* Slide Image */}
      <div className="relative w-full h-full">
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out ${
            isAnimating ? 'scale-105' : 'scale-100'
          }`}
          style={{
            backgroundImage: `url(${sliderImages[currentIndex].url})`,
            backgroundColor: colors.bordoDark,
            transform: `scale(${isAnimating ? 1.05 : 1})`,
          }}
        >
          {/* Overlay for text visibility */}
          <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${
            isAnimating ? 'opacity-50' : 'opacity-40'
          }`} />

          {/* Text Content */}
          <div className={`absolute inset-0 flex flex-col justify-center items-center text-center px-4 transition-all duration-500 ${
            isAnimating ? 'translate-y-2 opacity-80' : 'translate-y-0 opacity-100'
          }`}>
            <h1
              className="text-3xl md:text-5xl font-bold mb-4 transition-all duration-500 transform hover:scale-105"
              style={{ 
                color: colors.cream,
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}
            >
              {sliderImages[currentIndex].title}
            </h1>
            <p
              className="text-lg md:text-xl max-w-2xl transition-all duration-500 transform hover:scale-105"
              style={{ 
                color: colors.cream,
                textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
              }}
            >
              {sliderImages[currentIndex].description}
            </p>
          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-200 hover:scale-110 hover:shadow-lg active:scale-95"
        style={{ backgroundColor: colors.cream, color: colors.bordo }}
      >
        <svg
          className="w-6 h-6 transition-transform duration-200 group-hover:-translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-200 hover:scale-110 hover:shadow-lg active:scale-95"
        style={{ backgroundColor: colors.cream, color: colors.bordo }}
      >
        <svg
          className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              currentIndex === index 
                ? "scale-125 shadow-lg" 
                : "hover:scale-110"
            }`}
            style={{
              backgroundColor: currentIndex === index ? colors.bordo : colors.cream,
              opacity: currentIndex === index ? 1 : 0.5,
              border: currentIndex === index ? `0.5px solid ${colors.cream}` : 'none',
              boxShadow: currentIndex === index 
                ? `0 0 10px ${colors.cream}` 
                : 'none'
            }}
          />
        ))}
      </div>
    </div>
  );
}
