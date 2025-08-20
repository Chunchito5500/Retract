// app/aboutus/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { HiLightBulb } from "react-icons/hi";
import { MdComputer } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";

import localFont from "next/font/local";

const BebasNeue = localFont({
  src: "../../fonts/BebasNeue-Regular.ttf",
});
const Roboto = localFont({
  src: "../../fonts/Roboto-Regular.ttf",
});

const AboutUsPage: React.FC = () => {
  const teamMembers = [
    { 
      src: "/aboutus/team/luc.jpg", 
      alt: "Lucas", 
      role: "Co-Founder & CEO",
      linkedin: "https://www.linkedin.com/in/lucas-somoshegyi-szokol/"
    },
    { 
      src: "/aboutus/team/Bas.jpg", 
      alt: "Basel", 
      role: "Co-Founder & CTO",
      linkedin: "https://www.linkedin.com/in/basel-kurian/"
    },
    { 
      src: "/aboutus/team/sav.jpg", 
      alt: "Savannah", 
      role: "Supply Chain Manager",
      linkedin: "https://www.linkedin.com/in/savannahbalbin/"
    },
    { 
      src: "/aboutus/team/zeph.jpg", 
      alt: "Zephan", 
      role: "Marketing Manager",
      linkedin: "https://www.linkedin.com/in/zephan-deepu-80a07832a/"
    },
  ];

  const handleMemberClick = (linkedin: string) => {
    window.open(linkedin, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[700px] bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-80">
          <Image
            src="/aboutus/ctwlb.jpg"
            alt="Our team"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 flex items-center justify-center">
          <h1 className={`text-white text-6xl md:text-7xl lg:text-8xl tracking-[8px] uppercase ${BebasNeue.className}`}>
            ABOUT US
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-24">
          
          {/* Mission Statement Section */}
          <section className="text-center mb-24">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl tracking-[4px] uppercase text-white mb-8 ${BebasNeue.className}`}>
              Our Mission Statement
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className={`text-xl md:text-2xl font-light text-gray-100 max-w-4xl mx-auto leading-relaxed ${Roboto.className}`}>
At Retractability, we don&apos;t believe in sacrificing quality for convenience, especially when it comes to bikes. Cycling isn&apos;t only a pastime, but a necessity for many, and it should be smarter and more adaptable. We challenge the conventional design of bikes to create something that fits seamlessly into everyday life. The way people move is evolving, and so should their bicycles.            </p>
          </section>
          
          
          
          {/* Two Column Section */}
          <section className="grid md:grid-cols-2 gap-20 mb-32 items-center">
            <div className="relative h-[450px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/aboutus/team.jpg"
                alt="Team collaboration"
                fill
                style={{ objectFit: "cover" }}
                className="transition-all duration-500"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                
                <h3 className={`text-2xl md:text-3xl tracking-[3px] uppercase text-white ${BebasNeue.className}`}>
                  Our Story
                </h3>
              </div>
              <p className={`text-lg text-gray-100 leading-relaxed ${Roboto.className}`}>
                We&apos;re two college students who first turned to skateboards for portability, but quickly ran into the limitations of balance and control. We tried bikes next, yet being students on a busy college campus, made us fear bike theft. And finally, foldable bikes? We found they compromised too much on ride quality.
              </p>
              <p className={`text-lg text-gray-100 leading-relaxed ${Roboto.className}`}>
                That frustration inspired the Retractability Pioneer: a full-sized bicycle that folds small enough for a backpack or suitcase, giving you both stability and ultimate portability.
              </p>
              <p className={`text-lg text-gray-100 leading-relaxed ${Roboto.className}`}>
                From dorm room sketches to working prototypes, we&apos;ve dedicated ourselves to solving the fundamental challenge of bike transportation: how to have a real bike that goes anywhere.
              </p>
            </div>
          </section>
          
          {/* Three Column Section */}
          <section className="mb-32">
            <h2 className={`text-4xl md:text-5xl tracking-[4px] uppercase text-center text-white mb-4 ${BebasNeue.className}`}>
              What Sets Us Apart
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-16"></div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300">
                    <MdDesignServices className="text-3xl text-gray-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className={`text-xl md:text-2xl tracking-[2px] uppercase text-gray-100 mb-6 ${BebasNeue.className}`}>
                  Design + Craft
                </h3>
                <p className={`text-lg text-gray-200 leading-relaxed mb-4 ${Roboto.className}`}>
                  Our bikes are meticulously designed with foldability and portability at their core, ensuring you get the best of both worlds without compromise.
                </p>
                
              </div>
              
              <div className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300">
                    <MdComputer className="text-3xl text-gray-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className={`text-xl md:text-2xl tracking-[2px] uppercase text-gray-100 mb-6 ${BebasNeue.className}`}>
                  Technology
                </h3>
                <p className={`text-lg text-gray-200 leading-relaxed mb-4 ${Roboto.className}`}>
                  Our unique approach allows full-sized bikes to fold into compact spaces, offering unparalleled portability and convenience for modern life.
                </p>
                
              </div>
              
              <div className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300">
                    <HiLightBulb className="text-3xl text-gray-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className={`text-xl md:text-2xl tracking-[2px] uppercase text-gray-100 mb-6 ${BebasNeue.className}`}>
                  Innovation
                </h3>
                <p className={`text-lg text-gray-200 leading-relaxed mb-4 ${Roboto.className}`}>
                  We are a culture of designers and creators who believe in changing the world. Our commitment to quality and innovation ensures trust in every ride.
                </p>
                
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section>
            <h2 className={`text-4xl md:text-5xl tracking-[4px] uppercase text-center text-white mb-4 ${BebasNeue.className}`}>
              Meet the Team
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-16"></div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div 
                  key={member.alt} 
                  className="text-center group cursor-pointer transform transition-all duration-300 hover:-translate-y-4 hover:scale-105"
                  onClick={() => handleMemberClick(member.linkedin)}
                >
                  <div className="relative h-64 mb-6 rounded-lg overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                    <Image
                      src={member.src}
                      alt={member.alt}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-all duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  </div>
                  <div className="group-hover:transform group-hover:-translate-y-2 transition-transform duration-300">
                    <h4 className={`text-xl tracking-[2px] uppercase text-white mb-2 group-hover:text-blue-300 transition-colors duration-300 ${BebasNeue.className}`}>
                      {member.alt}
                    </h4>
                    <p className={`text-base text-gray-100 group-hover:text-gray-100 transition-colors duration-300 ${Roboto.className}`}>
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
        </div>
        <Footer />
      </main>
      
      
    </>
  );
};

export default AboutUsPage;