"use client";

import { useState } from "react";
import ForumPost from "@/components/ForumPost";
import ForumCategory from "@/components/ForumCategory";
import ForumSidebar from "@/components/ForumSidebar";
import { colors } from "@/constants";

const forumCategories = [
  {
    title: "Umumiy muhokamalar",
    description: "Tarix bo'yicha umumiy suhbatlar va muhokamalar",
    postCount: 156,
    icon: "U",
    color: colors.bordo
  },
  {
    title: "Arxeologiya",
    description: "Qazishmalar, topilmalar va arxeologik tadqiqotlar",
    postCount: 89,
    icon: "A",
    color: colors.bordoDark
  },
  {
    title: "Qadimiy davlatlar",
    description: "Qadimiy shaharlar, davlatlar va sivilizatsiyalar",
    postCount: 124,
    icon: "Q",
    color: colors.bordo
  }
];

const forumPosts = [
  {
    id: 1,
    title: "Amir Temurning harbiy strategiyasi haqida",
    excerpt: "Buyuk sarkarda Amir Temurning qo'shinlarini tashkil etishdagi noyob usullari va harbiy strategiyalari to'g'risida muhokama...",
    author: "Bahodir Aliyev",
    replies: 23,
    views: 456,
    lastActivity: "2 soat oldin",
    category: "Umumiy muhokamalar",
    tags: ["Amir Temur", "Harbiy strategiya", "XV asr"]
  },
  {
    id: 2,
    title: "Xorazm shohligining poytaxti qayerda?",
    excerpt: "Arxeologik tadqiqotlar natijasida Xorazm shohligining poytaxti haqida yangi ma'lumotlar topildi. Bu haqda batafsil...",
    author: "Dilnoza Karimova",
    replies: 45,
    views: 789,
    lastActivity: "5 daqiqa oldin",
    category: "Arxeologiya",
    tags: ["Xorazm", "Arxeologiya", "Qazishmalar"]
  },
  {
    id: 3,
    title: "Buyuk ipak yo'li va O'zbekiston",
    excerpt: "Buyuk ipak yo'lining O'zbekiston tarixidagi o'rni va ahamiyati to'g'risida ilmiy muhokama boshlandi...",
    author: "Komiljon Rahimov",
    replies: 67,
    views: 1234,
    lastActivity: "1 kun oldin",
    category: "Qadimiy davlatlar",
    tags: ["Ipak yo'li", "Savdo", "Tarix"]
  }
];

export default function ForumPage() {
  const [activeCategory, setActiveCategory] = useState("Barchasi");

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.cream }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 
            className="text-4xl font-bold mb-4"
            style={{ color: colors.bordo }}
          >
            Tarix Forumi
          </h1>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: colors.bordoDark }}
          >
            Tarixsevarlar jamoasi. Bilimlaringizni baham ko'ring, savollaringizga javob toping
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <ForumSidebar 
            categories={forumCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {/* Main Content */}
          <div className="flex-1">
            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {forumCategories.map((category) => (
                <ForumCategory key={category.title} {...category} />
              ))}
            </div>

            {/* Posts */}
            <div className="space-y-6">
              {forumPosts.map((post) => (
                <ForumPost key={post.id} {...post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
