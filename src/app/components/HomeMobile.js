"use client";

import React, { useState, useEffect, useRef } from 'react';
import { IoHammer } from 'react-icons/io5';
import { GiCartwheel } from 'react-icons/gi';
import { FiMap } from 'react-icons/fi';

export default function HomeMobile() {
  const [modelSrc, setModelSrc] = useState("Bike Unfolded - Midnight Blue.glb");
  const [cameraOrbit, setCameraOrbit] = useState("-137deg 2m");
  const [activeFeature, setActiveFeature] = useState(null);
  const modelViewerRef = useRef(null);

  useEffect(() => {
    if (!customElements.get("model-viewer")) {
      import("@google/model-viewer");
    }
  }, []);

  const featuresConfig = {
    feature1: {
      cameraOrbit: "180deg 0 0",
      title: "Innovative Design:",
      content: "The Quark Foldable Bike reimagines cycling mobility, offering unparalleled convenience without sacrificing style or functionality.",
      style: { background: "linear-gradient(to bottom, #587792, #8DB1AB, #3C5862)", color: "#ffffff" },
      icon: <IoHammer size={44} color="#ffffff" />
    },
    feature2: {
      cameraOrbit: "50deg 2m 2m",
      title: "Durability Redefined:",
      content: "Say goodbye to the fear of flat tires. The Quark's tires are crafted from a special pop-resistant material, offering peace of mind on any adventure.",
      style: { background: "linear-gradient(to bottom, #3E6259, #85BC97, #AEF6C7)", color: "#ffffff" },
      icon: <GiCartwheel size={44} color="#ffffff" />
    },
    feature3: {
      cameraOrbit: "120deg 90deg 0",
      title: "Versatility Unmatched:",
      content: "Engineered for every destination—work, college, parks, urban landscapes, or trails. The Quark Foldable Bike adapts to your lifestyle, ensuring you're ready for wherever life takes you.",
      style: { background: "linear-gradient(to bottom, #6F5060, #51344D, #A78682)", color: "#ffffff" },
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

  const handleFeatureClick = (feature) => {
    if (activeFeature === feature) {
      setActiveFeature(null);
      setCameraOrbit("-137deg 2m"); // Reset to original camera orbit
    } else {
      setCameraOrbit(featuresConfig[feature].cameraOrbit);
      setActiveFeature(feature);
    }
  };

  const renderTextCard = (feature) => {
    const { title, content, style } = featuresConfig[feature];
    return (
      <div className="card w-full" style={style}>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", position: "relative", width: "100%", height: "100vh", padding: "20px", background: "linear-gradient(to bottom, #859EB8 10%, #C0C6CC 30%, #E6E6E6 90%)" }}>
      <div style={{ textAlign: "center", marginBottom: "20px", width: "100%" }}>
        <p className="text-base font-semibold leading-7 text-[#456990]">
          The new way to bike
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#456990]">
          The Quark Foldable Bike
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
        style={{ width: "100vw", height: "80vh", cursor: "default", opacity: 1 }}
      ></model-viewer>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center", justifyContent: "center", position: "absolute", right: "5%", bottom: "10%", zIndex: 3 }}>
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
