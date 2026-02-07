"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { FaCity, FaHome, FaTrain, FaLeaf } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import localFont from "next/font/local";

const BebasNeue = localFont({
  src: "../../fonts/BebasNeue-Regular.ttf",
  display: "swap",
});

const Roboto = localFont({
  src: "../../fonts/Roboto-Regular.ttf",
  display: "swap",
});

interface LifestyleCard {
  id: number;
  category: string;
  icon: React.ReactNode;
  taglinePart1: string;
  taglineEmphasis: string;
  taglinePart2?: string;
  image: string;
  expandedContent: {
    title: string;
    description: string;
    features: string[];
  };
}

const lifestyleData: LifestyleCard[] = [
  {
    id: 1,
    category: "Urban Mobility",
    icon: <FaCity className="w-4 h-4" />,
    taglinePart1: "Live large in",
    taglineEmphasis: "small spaces",
    image: "/new/azcenter1.JPG",
    expandedContent: {
      title: "Navigate Urban Life",
      description:
        "Weave through congested streets with agility. The Pioneer is a premium folding commuter bike built for campus and city streets. Quick to take inside, easy to store, and ready whenever you are.",
      features: [
        "Bring it indoors in seconds",
        "No bike rack needed",
        "Zero emissions commute",
      ],
    },
  },
  {
    id: 2,
    category: "Space Freedom",
    icon: <FaHome className="w-4 h-4" />,
    taglinePart1: "Your bike belongs inside",
    taglineEmphasis: "right where you do",
    image: "/pioneer/RBikeF.jpeg",
    expandedContent: {
      title: "Apartment-Friendly Design",
      description:
        "No garage? No problem. The Pioneer folds to fit in closets, under desks, or behind doors. Your bike, your space, your rules.",
      features: [
        "Closet-sized footprint",
        "Tucks under desks",
        "No outdoor storage needed",
      ],
    },
  },
  {
    id: 3,
    category: "Multi-Modal Transit",
    icon: <FaTrain className="w-4 h-4" />,
    taglinePart1: "Fold fast",
    taglineEmphasis: "move faster",
    image: "/new/travel.JPG",
    expandedContent: {
      title: "Seamless Connections",
      description:
        "Ride to the station, fold, board, unfold, ride. The Pioneer is built for multi-modal commuting without turning your day into a logistics problem.",
      features: [
        "Bus & train compatible",
        "1-minute fold time",
        "Carry-on size when folded",
      ],
    },
  },
  {
    id: 4,
    category: "Weekend Explorer",
    icon: <FaLeaf className="w-4 h-4" />,
    taglinePart1: "Bring your bike",
    taglineEmphasis: "on every trip",
    image: "/new/folded1.JPG",
    expandedContent: {
      title: "Explore Without Limits",
      description:
        "Throw it in the car. Take it on vacation. The Pioneer is a travel-ready folding bike that fits where full-size bikes can't. So you can ride at new places without racks, straps, or compromise.",
      features: [
        "Fits any car trunk",
        "Suitcase-ready fold",
        "Made for easy transport",
      ],
    },
  },
];

interface CardProps {
  card: LifestyleCard;
  isExpanded: boolean;
  onClick: () => void;
  onClose: (e: React.MouseEvent) => void;
}

const LifestyleCardItem = ({
  card,
  isExpanded,
  onClick,
  onClose,
}: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={!isExpanded ? onClick : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative rounded-3xl overflow-hidden
        transition-all duration-700 ease-out
        h-full
        ${isExpanded ? "cursor-default" : "cursor-pointer"}
      `}
      style={{
        width: isExpanded ? "min(900px, 70vw)" : "min(380px, 80vw)",
        flexShrink: 0,
      }}
    >
      <div className="absolute inset-0">
        <Image
          src={card.image}
          alt={card.category}
          fill
          className={`
            object-cover transition-transform duration-700 ease-out
            ${isHovered && !isExpanded ? "scale-105" : "scale-100"}
          `}
        />
        <div
          className={`
            absolute inset-0 transition-all duration-500
            ${
              isExpanded
                ? "bg-gradient-to-r from-black/70 via-black/40 to-transparent"
                : "bg-gradient-to-t from-black/70 via-black/20 to-transparent"
            }
          `}
        />
      </div>

      <div className="relative h-full flex flex-col justify-between p-6 sm:p-8">
        <div className="flex items-start justify-between">
          <div
            className={`
              inline-flex items-center gap-2 px-4 py-2 rounded-full
              backdrop-blur-md transition-all duration-300
              ${
                isExpanded
                  ? "bg-white/20 text-white"
                  : "bg-white/90 text-[#333544]"
              }
            `}
          >
            {card.icon}
            <span className={`text-sm font-medium ${Roboto.className}`}>
              {card.category}
            </span>
          </div>

          <button
            onClick={isExpanded ? onClose : undefined}
            className={`
              w-10 h-10 rounded-full flex items-center justify-center
              transition-all duration-300 backdrop-blur-md
              ${
                isExpanded
                  ? "bg-white text-[#333544] hover:bg-white/90"
                  : "bg-white/90 text-[#333544] hover:bg-white"
              }
            `}
          >
            {isExpanded ? (
              <IoClose className="w-5 h-5" />
            ) : (
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  isHovered ? "rotate-90" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`transition-all duration-500 ${isExpanded ? "max-w-lg" : "max-w-full"}`}
        >
          <h3
            className={`
              text-white transition-all duration-500
              ${
                isExpanded
                  ? `text-4xl sm:text-5xl lg:text-6xl leading-tight ${BebasNeue.className}`
                  : `text-2xl sm:text-3xl ${BebasNeue.className}`
              }
            `}
          >
            {card.taglinePart1}
            <br />
            <em className="font-normal">{card.taglineEmphasis}</em>
            {card.taglinePart2 && <span> {card.taglinePart2}</span>}
          </h3>

          <div
            className={`
              overflow-hidden transition-all duration-500 ease-out
              ${isExpanded ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"}
            `}
          >
            <div className="pt-6 border-t border-white/30 space-y-5">
              <p
                className={`text-white/90 text-base sm:text-lg leading-relaxed ${Roboto.className}`}
              >
                {card.expandedContent.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {card.expandedContent.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className={`
                      px-4 py-2 rounded-full text-sm
                      bg-white/10 backdrop-blur-sm text-white
                      border border-white/20
                      ${Roboto.className}
                    `}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <button
                className={`
                  mt-4 px-6 py-3 rounded-full text-sm font-medium
                  transition-all duration-300
                  ${Roboto.className}
                `}
              ></button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`
          absolute inset-0 pointer-events-none
          bg-gradient-to-tr from-transparent via-white/5 to-transparent
          transition-opacity duration-300
          ${isHovered && !isExpanded ? "opacity-100" : "opacity-0"}
        `}
      />
    </div>
  );
};

export default function Lifestyle() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollToCard = (cardId: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardIndex = lifestyleData.findIndex((c) => c.id === cardId);
    const cards = container.querySelectorAll("[data-card]");
    const card = cards[cardIndex] as HTMLElement;

    if (!card) return;

    // Get left padding based on screen size
    const leftPadding =
      window.innerWidth >= 1024 ? 64 : window.innerWidth >= 640 ? 32 : 16;

    // Calculate target scroll position to show card at left with padding
    const targetScroll = card.offsetLeft - leftPadding;

    container.scrollTo({
      left: Math.max(0, targetScroll),
      behavior: "smooth",
    });
  };

  const handleCardClick = (id: number) => {
    if (expandedCard === id) return;

    const wasSwitching = expandedCard !== null;
    setExpandedCard(id);

    // Always scroll to focus on the clicked card
    // Multiple scroll calls ensure we catch the card after width animations

    if (wasSwitching) {
      // Switching between cards - need more time for animations
      setTimeout(() => scrollToCard(id), 50); // Initial position
      setTimeout(() => scrollToCard(id), 300); // Mid-transition
      setTimeout(() => scrollToCard(id), 600); // After transition
    } else {
      // Opening fresh
      setTimeout(() => scrollToCard(id), 50); // Quick initial
      setTimeout(() => scrollToCard(id), 400); // After expand animation
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    const closingCardId = expandedCard;
    setExpandedCard(null);

    // Keep the closed card in view after it collapses
    if (closingCardId !== null) {
      setTimeout(() => scrollToCard(closingCardId), 400);
    }
  };

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 10);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10,
    );
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    checkScrollButtons();
    container.addEventListener("scroll", checkScrollButtons);
    window.addEventListener("resize", checkScrollButtons);

    return () => {
      container.removeEventListener("scroll", checkScrollButtons);
      window.removeEventListener("resize", checkScrollButtons);
    };
  }, []);

  useEffect(() => {
    setTimeout(checkScrollButtons, 750);
  }, [expandedCard]);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = direction === "left" ? -420 : 420;
    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full">
      {/* Section Header */}
      <div className="text-center mb-12 px-4 sm:px-6 lg:px-12 mx-auto max-w-7xl">
        <p
          className={`text-sm tracking-[0.3em] text-white/60 uppercase mb-4 ${Roboto.className}`}
        >
          Life with Pioneer
        </p>
        <h2
          className={`text-4xl sm:text-5xl lg:text-6xl text-white/90 ${BebasNeue.className}`}
        >
          Designed for How You Live
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative w-full">
        <div
          ref={scrollContainerRef}
          className="flex gap-5 pb-4 overflow-x-auto scrollbar-hide pl-4 sm:pl-8 lg:pl-16 pr-4"
        >
          {lifestyleData.map((card) => (
            <div
              key={card.id}
              data-card
              className="h-[500px] sm:h-[550px] lg:h-[600px]"
              style={{ flexShrink: 0 }}
            >
              <LifestyleCardItem
                card={card}
                isExpanded={expandedCard === card.id}
                onClick={() => handleCardClick(card.id)}
                onClose={handleClose}
              />
            </div>
          ))}
          {/* End spacer for last card */}
          <div
            className="w-4 sm:w-8 lg:w-16 flex-shrink-0"
            aria-hidden="true"
          />
        </div>

        {/* Right fade */}
        {canScrollRight && (
          <div
            className="absolute right-0 top-0 bottom-4 w-20 sm:w-32 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, rgb(22, 33, 75) 0%, rgba(22, 33, 75, 0.6) 40%, rgba(22, 33, 75, 0) 100%)",
            }}
          />
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8 px-4">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`
            w-12 h-12 rounded-full flex items-center justify-center
            border transition-all duration-300
            ${
              canScrollLeft
                ? "border-white/40 text-white hover:bg-white/10"
                : "border-white/20 text-white/30 cursor-not-allowed"
            }
          `}
          aria-label="Scroll left"
        >
          <IoChevronBack className="w-5 h-5" />
        </button>

        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`
            w-12 h-12 rounded-full flex items-center justify-center
            border transition-all duration-300
            ${
              canScrollRight
                ? "border-white/40 text-white hover:bg-white/10"
                : "border-white/20 text-white/30 cursor-not-allowed"
            }
          `}
          aria-label="Scroll right"
        >
          <IoChevronForward className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
