import Image from "next/image";
import React from "react";

const items = [
  // Row 1
  {
    type: "img",
    src: "/green/flowers.jpg",
    alt: "Windmill on water",
    col: 1,
    span: 3,
    row: 1,
  },
  { type: "text", variant: "hero", col: 4, span: 6, row: 1 },
  {
    type: "img",
    src: "/green/canyon.jpg",
    alt: "Solar roof install",
    col: 10,
    span: 3,
    row: 1,
  },

  // Row 2
  {
    type: "img",
    src: "/green/recycle.jpg",
    alt: "Solar field",
    col: 1,
    span: 3,
    row: 2,
  },
  {
    type: "img",
    src: "/green/stream.jpg",
    alt: "Modern wind turbine",
    col: 4,
    span: 3,
    row: 2,
  },
  { type: "text", variant: "stat", col: 7, span: 6, row: 2 },
];

const Portfolio = () => {
  return (
    <div className="bg-[#f8f9fa]">
      <section className="w-full px-6 lg:px-24 my-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => {
            if (item.type === "img") {
              return (
                <div
                  key={idx}
                  className="relative rounded-2xl overflow-hidden aspect-[3/4]"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              );
            }

            if (item.variant === "hero") {
              return (
                <div
                  key={idx}
                  className="rounded-2xl flex flex-col justify-center p-8 space-y-4 bg-violet-200/70 aspect-auto"
                >
                  <h3 className="text-3xl font-bold leading-snug">
                    Looking Ahead: A Greener Decade
                  </h3>
                  <p className="text-gray-700">
                    We’re laying the groundwork for the next 10 years of
                    sustainable innovation. From smarter materials to scalable
                    eco-programs, our mission is to build a cleaner ride — and a
                    cleaner world.
                  </p>
                  <p className="text-gray-500 italic">
                    We’re proud of the early impact we’ve made, especially in
                    our local communities. And we’re just getting started.
                  </p>
                </div>
              );
            }

            // stat card
            return (
              <div
                key={idx}
                className="rounded-2xl flex flex-col justify-between p-8 bg-white border border-gray-200 aspect-auto"
              >
                <div>
                  <h4 className="text-3xl font-bold leading-snug">
                    50% Less Waste. 100% More Impact.
                  </h4>
                  <p className="text-gray-700 mb-2">
                    We’re working to cut our resource waste in half by improving
                    manufacturing efficiency and eliminating excess at every
                    stage — from prototyping to packaging.
                  </p>
                  <p className="text-gray-700">
                    We’re also committed to giving back — through local
                    partnerships, community programs, and long-term investments
                    in sustainability education.
                  </p>
                </div>
                <a
                  href="https://www.machinemetrics.com/morgan-olson-case-study"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 self-start rounded-full text-emerald-700 font-semibold"
                >
                  Explore our roadmap →
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
