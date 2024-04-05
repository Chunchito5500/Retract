"use client";

import React, { useState, useEffect, useRef } from "react";
import { IoHammer } from "react-icons/io5";
import { GiCartwheel } from "react-icons/gi";
import { FiMap } from "react-icons/fi";

const mobileBreakpoint = 768;

export default function Home() {
  const [modelSrc, setModelSrc] = useState("Bike Unfolded - Midnight Blue.glb");
  const [cameraOrbit, setCameraOrbit] = useState("-137deg 2m");
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [opacity, setOpacity] = useState(1);
  const [isMobile, setIsMobile] = useState(false); // Initialize as false
  const [cardVisible, setCardVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const modelViewerRef = useRef(null);

  useEffect(() => {
    const handleResize = () =>
      setIsMobile(window.innerWidth < mobileBreakpoint);
    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && !customElements.get("model-viewer")) {
      import("@google/model-viewer");
    }
  }, []);

  const textCards = [
    {
      title: "Innovative Design:",
      content:
        "The Quark Foldable Bike reimagines cycling mobility, offering unparalleled convenience without sacrificing style or functionality. It's your go-anywhere companion.",
    },
    {
      title: "Durability Redefined:",
      content:
        "Say goodbye to the fear of flat tires. The Quark's tires are crafted from a special pop-resistant material, offering peace of mind on any adventure.",
    },
    {
      title: "Versatility Unmatched:",
      content:
        "Engineered for every destination—work, college, parks, urban landscapes, or trails. The Quark Foldable Bike adapts to your lifestyle, ensuring you're ready for wherever life takes you.",
    },
  ];

  useEffect(() => {
    const updateIsMobile = () =>
      setIsMobile(window.innerWidth < mobileBreakpoint);
    updateIsMobile(); // Check immediately on mount
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && !customElements.get("model-viewer")) {
      import("@google/model-viewer");
    }
  }, []);

  const featuresConfig = {
    feature1: {
      modelSrc: "Bike Unfolded - Midnight Blue.glb",
      cameraOrbit: "180deg 0 0",
      textCardIndex: 0,
    },
    feature2: {
      modelSrc: "tire unfolded 1.glb",
      cameraOrbit: "-78deg -253deg 0",
      textCardIndex: 1,
    },
    feature3: {
      modelSrc: "Bike Folded - Midnight Blue.glb",
      cameraOrbit: "0 90deg 0",
      textCardIndex: 2,
    },
  };

  const buttonAndIconColor = "#456990";

  const buttonStyle = {
    color: buttonAndIconColor,
    borderColor: buttonAndIconColor,
    borderWidth: "1px",
    borderStyle: "solid",
    backgroundColor: "transparent",
    marginBottom: "10px",
    padding: "10px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  };

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#456990",
    color: "#fff",
  };

  const layoutContainerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    width: "100vw",
    height: "100vh",
    padding: "20px",
    background:
      "linear-gradient(to bottom, #859EB8 10%, #C0C6CC 30%, #E6E6E6 90%)",
  };

  const titlesAndCardContentStyle = {
    position: "absolute",
    top: "10%",
    left: "5%", // Adjust based on desired spacing
    zIndex: 2, // Above model viewer
    maxWidth: "300px", // Adjust as needed
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Align items to the start of the container
  };

  const modelViewerStyle = {
    width: isMobile ? "100vw" : "100vw", // Adjust width based on viewport
    height: "80vh",
    cursor: "default",
    opacity: opacity,
    transition: "opacity 500ms ease-in-out",
    zIndex: 1,
  };

  const buttonContainerStyle = {
    display: "flex",
    flexDirection: isMobile ? "row" : "column",
    gap: "10px",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute", // Position buttons absolutely for non-mobile view
    right: "5%", // Right align for desktop
    top: "50%", // Center vertically
    transform: "translateY(-50%)", // Adjust for exact vertical center
    zIndex: 3, // Above the model and text cards
  };

  const titleAndButtonContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start", // Align items to the start of the container
    height: "100%", // Take full height of its container
    padding: "20px",
    zIndex: 2, // Ensure it's above the model viewer
    color: "#456990", // Color for the titles
  };

  const textCardOverlayStyle = {
    position: "absolute",
    top: "20%", // Adjust as needed
    left: "75%", // Move to the right side of the viewport
    zIndex: 2,
    maxWidth: "20vw", // Adjust width to fit the side of the model viewer
    display: cardVisible ? "block" : "none", // Only display when a card is selected
  };

  const handleFeatureClick = (feature) => {
    const config = featuresConfig[feature];
    changeModelWithFade(config.modelSrc, config.cameraOrbit);
    setSelectedFeature(feature);
    setCardVisible(true);
    setActiveFeature(feature);
  };

  const changeModelWithFade = (newModelSrc, newCameraOrbit) => {
    setOpacity(0);
    setTimeout(() => {
      setModelSrc(newModelSrc);
      setCameraOrbit(newCameraOrbit);
      setOpacity(1);
    }, 500);
  };

  const renderTextCard = (index) => (
    <div
      className={`max-w-lg p-6 rounded-lg shadow transition-opacity duration-500 overflow-hidden ${
        cardVisible ? "visible" : ""
      }`}
      style={{
        border: "1px solid #c0c6cc",
        backgroundImage: "linear-gradient(to bottom, #457796 10%, #919BA0 90%)",
        color: "#fff",
      }}
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight">
        {textCards[index].title}
      </h5>
      <p className="font-normal">{textCards[index].content}</p>
    </div>
  );

  return (
    <div>
      <div style={layoutContainerStyle}>
        {!isMobile && (
          <div style={titlesAndCardContentStyle}>
            <p className="text-1xl font-semibold leading-7 text-[#456990]">
              The new way to bike
            </p>
            <h1 className="mt-2 text-6xl font-bold tracking-tight text-[#456990]">
              The Quark Foldable Bike
            </h1>
            <br></br>
            <br></br>
            {selectedFeature &&
              renderTextCard(featuresConfig[selectedFeature].textCardIndex)}
          </div>
        )}
        <model-viewer
          ref={modelViewerRef}
          src={modelSrc}
          ar
          ar-modes="webxr scene-viewer quick-look"
          loading="eager"
          autoplay
          camera-orbit={cameraOrbit}
          style={modelViewerStyle}
        ></model-viewer>
        <div style={buttonContainerStyle}>
          <button
            onClick={() => handleFeatureClick("feature1")}
            style={
              activeFeature === "feature1" ? activeButtonStyle : buttonStyle
            }
          >
            <IoHammer
              size={44}
              color={activeFeature === "feature1" ? "#fff" : buttonAndIconColor}
            />
          </button>
          <button
            onClick={() => handleFeatureClick("feature2")}
            style={
              activeFeature === "feature2" ? activeButtonStyle : buttonStyle
            }
          >
            <GiCartwheel
              size={44}
              color={activeFeature === "feature2" ? "#fff" : buttonAndIconColor}
            />
          </button>
          <button
            onClick={() => handleFeatureClick("feature3")}
            style={
              activeFeature === "feature3" ? activeButtonStyle : buttonStyle
            }
          >
            <FiMap
              size={44}
              color={activeFeature === "feature3" ? "#fff" : buttonAndIconColor}
            />
          </button>
        </div>
        {/* Conditional rendering based on isMobile state */}
        {isMobile && (
          <div
            style={{ textAlign: "center", marginBottom: "20px", width: "100%" }}
          >
            <p className="text-base font-semibold leading-7 text-[#456990]">
              The new way to bike
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#456990]">
              The Quark Foldable Bike
            </h1>
          </div>
        )}
        {isMobile &&
          selectedFeature &&
          renderTextCard(featuresConfig[selectedFeature].textCardIndex)}
      </div>
    </div>
  );
}

const buttonStyle = {
  backgroundColor: "#456990",
  color: "white",
  marginBottom: "10px",
  padding: "10px",
  borderRadius: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
};
