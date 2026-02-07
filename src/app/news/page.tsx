"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoTimeOutline, IoArrowForward } from "react-icons/io5";
import { Navbar } from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import localFont from "next/font/local";

const BebasNeue = localFont({
  src: "../../fonts/BebasNeue-Regular.ttf",
  display: "swap",
});

const Roboto = localFont({
  src: "../../fonts/Roboto-Regular.ttf",
  display: "swap",
});

const articles = [
  {
    id: 1,
    slug: "pioneer-design",
    title: "Built by Students, for Students: The Retractability Pioneer",
    excerpt:
      "The story of how we designed and built the Pioneer in dorms and garages, with every consideration made for fellow students.",
    author: "Lucas Somoshegyi-Szokol",
    date: "August 11, 2025",
    readTime: "8 min read",
    category: "Design & Engineering",
    image: "/news/origin/bikechain.JPEG",
  },
  {
    id: 2,
    slug: "problem-to-revolution",
    title: "From a College Problem to a Biking Revolution",
    excerpt:
      "How the frustration of bike theft at ASU led to reimagining what a folding bike could be.",
    author: "Zephan Deepu",
    date: "April 28, 2025",
    readTime: "5 min read",
    category: "Founder Story",
    image: "/news/skate.JPEG",
  },
  {
    id: 3,
    slug: "change-the-world",
    title: "Retractability at Change the World: Our Mission, Our Momentum",
    excerpt:
      "A look back at our experience showcasing the Pioneer at ASU's Change the World event.",
    author: "Basel Kurian",
    date: "April 14, 2025",
    readTime: "8 min read",
    category: "Events",
    image: "/news/fullteam.JPG",
  },
];

export default function NewsPage() {
  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <div className="min-h-screen bg-[#0c0e12]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p
            className={`text-sm tracking-[0.3em] text-white/40 uppercase mb-6 ${Roboto.className}`}
          >
            News & Updates
          </p>
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] mb-6 ${BebasNeue.className}`}
          >
            Stories from
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Retractability
            </span>
          </h1>
          <p
            className={`text-lg text-white/60 max-w-2xl mx-auto ${Roboto.className}`}
          >
            Follow our journey as we build the future of urban mobility.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-white/10" />
            <span
              className={`text-xs tracking-[0.2em] text-white/30 uppercase ${Roboto.className}`}
            >
              Featured
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <Link href={`/news/${featuredArticle.slug}`} className="group block">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#1a1d24]">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span
                    className={`
                      inline-block px-3 py-1 rounded-full text-xs font-medium border
                      bg-blue-500/80 text-blue-300 border-blue-500/30
                      ${Roboto.className}
                    `}
                  >
                    {featuredArticle.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-5">
                <h2
                  className={`text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1] group-hover:text-blue-400 transition-colors duration-300 ${BebasNeue.className}`}
                >
                  {featuredArticle.title}
                </h2>
                <p
                  className={`text-white/60 text-lg leading-relaxed ${Roboto.className}`}
                >
                  {featuredArticle.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
                  <span
                    className={`text-white/70 text-sm font-medium ${Roboto.className}`}
                  >
                    {featuredArticle.author}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <span className={`text-white/40 text-sm ${Roboto.className}`}>
                    {featuredArticle.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <span
                    className={`text-white/40 text-sm flex items-center gap-1.5 ${Roboto.className}`}
                  >
                    <IoTimeOutline className="w-4 h-4" />
                    {featuredArticle.readTime}
                  </span>
                </div>
                <div className="pt-2">
                  <span
                    className={`inline-flex items-center gap-2 text-blue-400 text-sm font-medium group-hover:gap-3 transition-all ${Roboto.className}`}
                  >
                    Read Article
                    <IoArrowForward className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Other Articles */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-white/10" />
            <span
              className={`text-xs tracking-[0.2em] text-white/30 uppercase ${Roboto.className}`}
            >
              More Stories
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {otherArticles.map((article) => (
              <Link
                key={article.id}
                href={`/news/${article.slug}`}
                className="group block"
              >
                <article className="bg-[#12151a] rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 group-hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12151a] via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`
                          inline-block px-3 py-1 rounded-full text-xs font-medium border
                      bg-blue-500/80 text-blue-300 border-blue-500/30
                          ${Roboto.className}
                        `}
                      >
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3
                      className={`text-xl sm:text-2xl text-white leading-tight group-hover:text-blue-400 transition-colors duration-300 ${BebasNeue.className}`}
                    >
                      {article.title}
                    </h3>
                    <p
                      className={`text-white/50 text-sm leading-relaxed line-clamp-2 ${Roboto.className}`}
                    >
                      {article.excerpt}
                    </p>
                    <div
                      className={`flex flex-wrap items-center gap-x-3 gap-y-1 pt-2 text-white/40 text-sm ${Roboto.className}`}
                    >
                      <span className="font-medium text-white/60">
                        {article.author}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                      <span>{article.date}</span>
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                      <span className="flex items-center gap-1">
                        <IoTimeOutline className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
