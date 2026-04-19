"use client";

import { useState } from "react";
import { whyUs, colors } from "@/constants";

export default function AdvantagesPage() {
  const [activeReason, setActiveReason] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.cream }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className="text-4xl font-bold mb-4"
            style={{ color: colors.bordo }}
          >
            {whyUs.title}
          </h1>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: colors.bordoDark }}
          >
            {whyUs.description}
          </p>
        </div>

        {/* Main Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {whyUs.reasons.map((reason, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 cursor-pointer ${
                activeReason === index ? 'shadow-xl scale-105' : 'hover:shadow-lg hover:scale-102'
              }`}
              onClick={() => setActiveReason(activeReason === index ? null : index)}
              style={{
                borderLeft: activeReason === index ? `4px solid ${colors.bordo}` : '4px solid transparent'
              }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300"
                style={{ 
                  backgroundColor: activeReason === index ? colors.bordo : colors.cream,
                  color: activeReason === index ? colors.cream : colors.bordo
                }}
              >
                {reason.icon}
              </div>
              
              {/* Title */}
              <h3 
                className="text-lg font-bold text-center mb-3"
                style={{ color: colors.bordo }}
              >
                {reason.title}
              </h3>
              
              {/* Description */}
              <p 
                className="text-sm text-center leading-relaxed"
                style={{ color: colors.bordoDark }}
              >
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed View */}
        {activeReason !== null && (
          <div 
            className="bg-white rounded-xl shadow-xl p-8 mb-16 transition-all duration-500"
            style={{ borderLeft: `4px solid ${colors.bordo}` }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 
                className="text-2xl font-bold"
                style={{ color: colors.bordo }}
              >
                {whyUs.reasons[activeReason].title} - Batafsil
              </h2>
              <button
                onClick={() => setActiveReason(null)}
                className="p-2 rounded-full transition-all duration-200 hover:scale-110"
                style={{ backgroundColor: colors.cream, color: colors.bordo }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 
                  className="text-lg font-semibold mb-4"
                  style={{ color: colors.bordo }}
                >
                  Asosiy xususiyatlar
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: colors.bordo }}
                    />
                    <span style={{ color: colors.bordoDark }}>
                      Yuqori sifatli kontent va materiallar
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: colors.bordo }}
                    />
                    <span style={{ color: colors.bordoDark }}>
                      Tajribali o'qituvchilar va olimlar
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: colors.bordo }}
                    />
                    <span style={{ color: colors.bordoDark }}>
                      Zamonaviy o'qitish usullari
                    </span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 
                  className="text-lg font-semibold mb-4"
                  style={{ color: colors.bordo }}
                >
                  Natijalar
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div 
                      className="text-3xl font-bold mb-1"
                      style={{ color: colors.bordo }}
                    >
                      95%
                    </div>
                    <div 
                      className="text-sm"
                      style={{ color: colors.bordoDark }}
                    >
                      Muvaffaqiyat
                    </div>
                  </div>
                  <div className="text-center">
                    <div 
                      className="text-3xl font-bold mb-1"
                      style={{ color: colors.bordo }}
                    >
                      1500+
                    </div>
                    <div 
                      className="text-sm"
                      style={{ color: colors.bordoDark }}
                    >
                      Bitiruvchilar
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Additional Features */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 
            className="text-2xl font-bold text-center mb-8"
            style={{ color: colors.bordo }}
          >
            Qo'shimcha imkoniyatlar
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div 
                className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl font-bold"
                style={{ backgroundColor: colors.cream, color: colors.bordo }}
              >
                24/7
              </div>
              <h3 
                className="text-lg font-bold mb-2"
                style={{ color: colors.bordo }}
              >
                Doimiy yordam
              </h3>
              <p 
                className="text-sm"
                style={{ color: colors.bordoDark }}
              >
                Kuniga 24 soat yordam va maslahat xizmati
              </p>
            </div>
            
            <div className="text-center">
              <div 
                className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl font-bold"
                style={{ backgroundColor: colors.cream, color: colors.bordo }}
              >
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                  <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
              </div>
              <h3 
                className="text-lg font-bold mb-2"
                style={{ color: colors.bordo }}
              >
                Sertifikatlar
              </h3>
              <p 
                className="text-sm"
                style={{ color: colors.bordoDark }}
              >
                Xalqaro tan olingan sertifikatlar
              </p>
            </div>
            
            <div className="text-center">
              <div 
                className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl font-bold"
                style={{ backgroundColor: colors.cream, color: colors.bordo }}
              >
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 
                className="text-lg font-bold mb-2"
                style={{ color: colors.bordo }}
              >
                Hamjamiyat
              </h3>
              <p 
                className="text-sm"
                style={{ color: colors.bordoDark }}
              >
                Faol tarixsevarlar hamjamiyati
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
