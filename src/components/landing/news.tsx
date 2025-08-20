import React from "react";
import localFont from "next/font/local";
import Link from "next/link";

const BebasNeue = localFont({
  src: "../../fonts/BebasNeue-Regular.ttf",
});
const Roboto = localFont({
  src: "../../fonts/Roboto-Regular.ttf",
});

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "How we designed the Pioneer",
      description: "Read about the design process of our first bike, the Pioneer.",
      category: "PRODUCT",
      date: "July 2025",
      slug: "pioneer-design",
    },
    {
      id: 2,
      title: "Retractability Bicycles at Change the World!",
      description: "Read about our experiences at the Change the World event at ASU.",
      category: "EVENTS",
      date: "April 2025",
      slug: "change-the-world",
    },
    {
      id: 3,
      title: "From a College Problem to a Biking Revolution",
      description: "The story behind Retractability and how we're changing urban mobility.",
      category: "COMPANY",
      date: "April 2025",
      slug: "problem-to-revolution",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Main container with enhanced glassmorphism */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 p-6 md:p-10 relative overflow-hidden">
          {/* Enhanced glassmorphism background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-white/10 rounded-3xl"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>

          <div className="relative z-10 grid lg:grid-cols-5 gap-8">
            {/* Left section - Title and description */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <h1
                className={`text-6xl font-bold text-white leading-tight mb-4 ${BebasNeue.className}`}
              >
                Latest News
              </h1>
              <p
                className={`text-white/80 text-base leading-relaxed mb-6 ${Roboto.className}`}
              >
                Stay updated with our latest developments, events, and insights from the Retractability team as we revolutionize biking.
              </p>
              <Link
                href="/news"
                className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-fit border border-white/30"
              >
                View All News
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Right section - News articles */}
            <div className="lg:col-span-3 space-y-4">
              {newsArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/news/${article.slug}`}
                  className="group block"
                >
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20 hover:bg-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer relative overflow-hidden">
                    {/* Glass effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl"></div>

                    <div className="relative z-10">
                      {/* Category and Date */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-block px-3 py-1 bg-[#ea6051]/80 backdrop-blur-sm text-white text-xs font-medium rounded-full uppercase tracking-wide border border-[#ea6051]/30">
                          {article.category}
                        </span>
                        <span className="text-white/60 text-xs font-medium uppercase tracking-wide">
                          {article.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#333544]/90 transition-colors duration-300 line-clamp-2">
                        {article.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/70 leading-relaxed mb-3 text-sm line-clamp-2">
                        {article.description}
                      </p>

                      {/* Arrow icon */}
                      <div className="flex justify-end">
                        <div className="w-7 h-7 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#003356]/20 transition-colors duration-300 border border-white/20">
                          <svg
                            className="w-3 h-3 text-white/70 group-hover:text-[#003356] transition-colors duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 17L17 7M17 7H7M17 7v10"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
