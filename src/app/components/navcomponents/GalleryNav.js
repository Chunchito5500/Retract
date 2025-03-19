// /navcomponents/GalleryNav.js
import React, { useEffect } from "react";

const GalleryNav = () => {
  useEffect(() => {
    // Load Instagram embed script dynamically
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="absolute top-full left-0 w-full bg-[rgba(29,38,59,0.85)] shadow-lg p-6 animate-slideDown z-50">
      <div className="max-w-screen-lg mx-auto grid grid-cols-3 gap-6">
        {/* Left Section: Stacked Links */}
        <div className="space-y-4">
          <a
            href="/gallery"
            className="block font-raleway text-white text-left group"
            style={{ fontSize: "40px" }}
          >
            Gallery
            <div className="bg-white h-[3px] w-0 group-hover:w-full transition-all duration-500"></div>
          </a>
          <a
            href="/privacypolicy"
            className="block font-raleway text-white text-left group"
            style={{ fontSize: "40px" }}
          >
            Privacy Policy
            <div className="bg-white h-[3px] w-0 group-hover:w-full transition-all duration-500"></div>
          </a>
        </div>

        {/* Right Section: Instagram Embed */}
        {/* <div className="col-span-2 flex justify-center">
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/p/DF-8HW2yCrh/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: "0",
              borderRadius: "3px",
              boxShadow:
                "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: "1px",
              maxWidth: "250px",
              minWidth: "250px",
              padding: "0",
              width: "250px",
            }}
          >
            <div style={{ padding: "8px" }}>
              <a
                href="https://www.instagram.com/p/DF-8HW2yCrh/?utm_source=ig_embed&amp;utm_campaign=loading"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#FFFFFF",
                  lineHeight: "0",
                  padding: "0",
                  textAlign: "center",
                  textDecoration: "none",
                  width: "100%",
                }}
              >
                View this post on Instagram
              </a>
            </div>
          </blockquote>
        </div> */}
      </div>
    </div>
  );
};

export default GalleryNav;
