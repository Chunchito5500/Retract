"use client";
import React from 'react';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';
import { Navbar } from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import localFont from "next/font/local";

const BebasNeue = localFont({ src: "../../fonts/BebasNeue-Regular.ttf" });
const Roboto = localFont({ src: "../../fonts/Roboto-Regular.ttf" });

export default function NewsPage() {
  const articles = [
    {
      id: 1,
      slug: "pioneer-design",
      title: "How we designed the Pioneer",
      excerpt: "Read about the design process of our first bike, the Pioneer.",
      author: "Lucas Somoshegyi-Szokol",
      date: "July 28, 2025",
      readTime: "6 min read",
      category: "Product",
      image: "/bikeBONE.png"
    },
    {
      id: 2,
      slug: "problem-to-revolution",
      title: "From a College Problem to a Biking Revolution",
      excerpt: "The story behind Retractability and how we&apos;re changing mobility.",
      author: "Zephan Deepu",
      date: "April 28, 2025",
      readTime: "4 min read",
      category: "Company",
      image: "/news/skate.JPEG"
    },
    {
      id: 3,
      slug: "change-the-world",
      title: "Retractability Bicycles at Change the World!",
      excerpt: "Read about our experiences at the Change the World event at ASU.",
      author: "Basel Kurian",
      date: "April 14, 2025",
      readTime: "5 min read",
      category: "Events",
      image: "/carousel/ctw.jpg",
      featured: true
    }
  ];

  const featuredArticle = articles[0];
  const regularArticles = articles.slice(1);

  const scrollToArticles = () => {
    const element = document.getElementById('articles');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#162521]">
      <div className="relative">
        <Navbar />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="text-center space-y-8">
            <div className="max-w-4xl mx-auto">
              <h1 className={`text-6xl sm:text-6xl md:text-6xl lg:text-8xl font-bold text-white leading-tight ${BebasNeue.className}`}>
                Our Latest News
                <span className="block text-[#ea6051]">
                  & Updates
                </span>
              </h1>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <p className={`text-xl text-white/90 leading-relaxed ${Roboto.className}`}>
                Follow Retractability Bicycle&apos;s journey as we revolutionize urban mobility with innovative, retractable bicycle technology.
              </p>
            </div>
            
            <div className="pt-4">
              <button 
                onClick={scrollToArticles}
                className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white font-medium px-8 py-4 rounded-full transition-all duration-300"
              >
                Start Reading
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <main id="articles" className="relative -mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#161721] rounded-3xl shadow-2xl overflow-hidden">
              <div className="p-8 lg:p-12">
                <div className="mb-20">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="h-1 w-12 bg-[#ea6051] rounded"></div>
                    <span className={`text-sm font-semibold text-gray-400 uppercase tracking-wider ${Roboto.className}`}>Featured Story</span>
                  </div>
          
                  <a href={`/news/${featuredArticle.slug}`} className="group block">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className="relative h-80 lg:h-96 overflow-hidden rounded-2xl bg-gray-800 shadow-2xl">
                        <Image 
                          src={featuredArticle.image} 
                          alt={featuredArticle.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-6 left-6">
                          <span className="bg-[#ea6051] text-black px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                            {featuredArticle.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <h2 className={`text-3xl lg:text-4xl font-bold text-white leading-tight group-hover:text-[#ea6051] transition-colors duration-300 ${BebasNeue.className}`}>
                          {featuredArticle.title}
                        </h2>
                        <p className={`text-gray-300 text-lg leading-relaxed ${Roboto.className}`}>
                          {featuredArticle.excerpt}
                        </p>
                        <div className={`flex items-center gap-6 text-sm text-gray-400 ${Roboto.className}`}>
                          <span className="font-medium">{featuredArticle.author}</span>
                          <span>•</span>
                          <span>{featuredArticle.date}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{featuredArticle.readTime}</span>
                          </div>
                        </div>
                        <div className="pt-2">
                          <span className={`inline-flex items-center gap-2 text-[#ea6051] font-medium group-hover:gap-3 transition-all ${Roboto.className}`}>
                            Read Full Story
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="flex items-center gap-4 mb-16">
                  <div className="flex-1 h-px bg-gray-600"></div>
                  <span className={`text-sm font-semibold text-gray-400 uppercase tracking-wider ${Roboto.className}`}>More Stories</span>
                  <div className="flex-1 h-px bg-gray-600"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-20">
                  {regularArticles.map((article) => (
                    <a
                      key={article.id}
                      href={`/news/${article.slug}`}
                      className="group block"
                    >
                      <div className="bg-gray-800 rounded-2xl hover:bg-gray-700 transition-all duration-300 overflow-hidden border border-gray-700 hover:border-gray-600 group-hover:-translate-y-2">
                        <div className="relative h-64 overflow-hidden bg-gray-900">
                          <Image 
                            src={article.image} 
                            alt={article.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-[#ea6051] text-black px-3 py-1 rounded-full text-xs font-medium shadow-md">
                              {article.category}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-6 space-y-4">
                          <h3 className={`text-xl font-bold text-white leading-tight group-hover:text-[#ea6051] transition-colors duration-300 ${Roboto.className}`}>
                            {article.title}
                          </h3>
                          <p className={`text-gray-300 leading-relaxed ${Roboto.className}`}>
                            {article.excerpt}
                          </p>
                          <div className={`flex items-center gap-4 text-sm text-gray-400 pt-2 ${Roboto.className}`}>
                            <span className="font-medium">{article.author}</span>
                            <span>•</span>
                            <span>{article.date}</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                

                
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}