"use client";

import React, { useState, useEffect, useRef } from 'react';
import { IoHammer } from 'react-icons/io5';
import { GiCartwheel } from 'react-icons/gi';
import { FiMap } from 'react-icons/fi';

export default function HomeMobile() {
  const [modelSrc, setModelSrc] = useState("Models/Blue Unfolded.glb");
  const [cameraOrbit, setCameraOrbit] = useState("-137deg 2m");
  const [activeFeature, setActiveFeature] = useState(null);
  const [opacity, setOpacity] = useState(1);
  const [title, setTitle] = useState("The Retractability Pioneer");
  const [titleColor, setTitleColor] = useState("#456990");
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);
  const [cardOpacity, setCardOpacity] = useState(1);
  const modelViewerRef = useRef(null);

  useEffect(() => {
    if (!customElements.get("model-viewer")) {
      import("@google/model-viewer");
    }
  }, []);

  const featuresConfig = {
    feature1: {
      cameraOrbit: "180deg 0 0",
      title: "The Retractability Pioneer",
      cardtitle: "Innovative Design:",
      content: "The Retractability Pioneer reimagines cycling mobility, offering unparalleled convenience without sacrificing style or functionality.",
      style: { background: "linear-gradient(to bottom, #587792, #8DB1AB, #3C5862, #E6E6E6 99%)", color: "#ffffff" },
      titleColor: "#ffffff",
      icon: <IoHammer size={44} color="#ffffff" />
    },
    feature2: {
      cameraOrbit: "50deg 2m 2m",
      title: "The Retractability Pioneer",
      cardtitle: "Durability Redefined:",
      content: "Say goodbye to the fear of flat tires. The Pioneer's tires are crafted from a special pop-resistant material, offering peace of mind on any adventure.",
      style: { background: "linear-gradient(to bottom, #34403A, #1e6e37, #285238, #E6E6E6 99%)", color: "#ffffff" },
      titleColor: "#E48F80",
      icon: <GiCartwheel size={44} color="#ffffff" />
    },
    feature3: {
      cameraOrbit: "120deg 90deg 0",
      title: "The Retractability Pioneer",
      cardtitle: "Versatility Unmatched:",
      content: "Engineered for every destination—work, college, parks, urban landscapes, or trails. The Retractability Pioneer adapts to your lifestyle, ensuring you're ready for wherever life takes you.",
      style: { background: "linear-gradient(to bottom, #6F5060, #51344D, #A78682, #E6E6E6 99%)", color: "#ffffff" },
      titleColor: "#FFEDC3",
      icon: <FiMap size={44} color="#ffffff" />
    },
  };

  const buttonStyle = {
    color: "#456990",
    borderColor: "#456990",
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

  const defaultBackground = "linear-gradient(to bottom, #859EB8 10%, #C0C6CC 30%, #E6E6E6 90%)";

  const layoutContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    width: "100%",
    height: "100vh",
    padding: "20px",
    background: activeFeature ? featuresConfig[activeFeature].style.background : defaultBackground,
    boxSizing: "border-box",
    transition: "background 500ms ease-in-out, opacity 500ms ease-in-out",
    opacity: backgroundOpacity,
  };

  const titlesAndCardContentStyle = {
    textAlign: "center",
    marginBottom: "20px",
    width: "100%",
  };

  const modelViewerStyle = {
    width: "100vw",
    height: "80vh",
    cursor: "default",
    opacity: opacity,
    transition: "opacity 500ms ease-in-out",
    zIndex: 1,
  };

  const buttonContainerStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: "5%",
    bottom: "10%",
    zIndex: 3,
  };

  const handleFeatureClick = (feature) => {
    if (activeFeature === feature) {
      setActiveFeature(null);
      setCameraOrbit("-137deg 2m"); // Reset to original camera orbit
      setTitle("The Retractability Pioneer");
      setTitleColor("#456990");
    } else {
      setOpacity(0); // Start fade-out
      setTimeout(() => {
        setCameraOrbit(featuresConfig[feature].cameraOrbit);
        setOpacity(1); // Fade-in after camera orbit change
      }, 200);
      setActiveFeature(feature);
      setTitle(featuresConfig[feature].title);
      setTitleColor(featuresConfig[feature].titleColor);
    }
  };

  const renderTextCard = (feature) => {
    const { cardtitle, content, style, icon } = featuresConfig[feature];
    return (
      <div className="card w-full" style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.18)' }}>
        <div className="card-body">
        <h2 className="card-title" style={{ color: '#ffffff' }}>{cardtitle}</h2>
            <p style={{ color: '#ffffff' }}>{content}</p>
          {icon}
        </div>
      </div>
    );
  };

  return (
    <div style={layoutContainerStyle}>
      <div style={titlesAndCardContentStyle}>
        <p className="text-base font-raleway leading-7" style={{ color: titleColor }}>
          The new way to bike
        </p>
        <h1 className="mt-2 text-5xl font-raleway font-medium tracking-tight" style={{ color: titleColor }}>
          {title}
        </h1>
      </div>
      {activeFeature && renderTextCard(activeFeature)}
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
        {["feature1", "feature2", "feature3"].map(key => (
          <button
            key={key}
            onClick={() => handleFeatureClick(key)}
            style={activeFeature === key ? activeButtonStyle : buttonStyle}
          >
            {featuresConfig[key].icon}
          </button>
        ))}
      </div>
    </div>
  );
}
