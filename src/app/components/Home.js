import React, { useState, useEffect, useRef } from 'react';
import { IoHammer } from 'react-icons/io5';
import { GiCartwheel } from 'react-icons/gi';
import { FiMap } from 'react-icons/fi';

export default function HomeDesktop() {
  const [modelSrc, setModelSrc] = useState("Bike Unfolded - Midnight Blue.glb");
  const [cameraOrbit, setCameraOrbit] = useState("-137deg 2m");
  const [activeFeature, setActiveFeature] = useState(null);
  const [cardStack, setCardStack] = useState([]);  
  const [opacity, setOpacity] = useState(1);
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
    width: "100%",
    height: "100vh",
    padding: "20px",
    background: "linear-gradient(to bottom, #859EB8 10%, #C0C6CC 30%, #E6E6E6 90%)",
    boxSizing: "border-box"
  };

  const titlesAndCardContentStyle = {
    position: "absolute",
    top: "10%",
    left: "5%",
    zIndex: 2,
    maxWidth: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
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
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: "5%",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 3,
  };

  const textCardOverlayStyle = {
    position: "absolute",
    top: "20%",
    left: "75%",
    zIndex: 2,
    maxWidth: "20vw",
    display: activeFeature ? "block" : "none"
  };

  const handleFeatureClick = (feature) => {
    if (activeFeature === feature) {
      setActiveFeature(null);
      setCameraOrbit("-137deg 2m"); // Reset to original camera orbit
      setCardStack(prev => prev.filter(f => f !== feature)); // Remove feature from stack
    } else {
      setOpacity(0); // Start fade-out
      setTimeout(() => {
        setCameraOrbit(featuresConfig[feature].cameraOrbit);
        setOpacity(1); // Fade-in after camera orbit change
      }, 500);
      setActiveFeature(feature);
      setCardStack(prev => [...new Set([feature, ...prev])]); // Add feature to top of stack, remove duplicates
    }
  };
  
  const renderTextCard = (feature) => {
    const { title, content, style, icon } = featuresConfig[feature];
    return (
      <div className="stack">
        <div className={`card w-96`} style={style}>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{content}</p>
            {icon}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={layoutContainerStyle}>
      <div style={titlesAndCardContentStyle}>
        <p className="text-1xl font-semibold leading-7 text-[#456990]">
          The new way to bike
        </p>
        <h1 className="mt-2 text-6xl font-bold tracking-tight text-[#456990]">
          The Quark Foldable Bike
        </h1>
      </div>
  
      {/* Dynamic cards generated based on feature selection */}
      {activeFeature && (
        <div style={{ position: "absolute", top: "40%", left: "5%", zIndex: 2, maxWidth: "300px" }}>
          <div className="card w-96" style={featuresConfig[activeFeature].style}>
            <div className="card-body">
              <h2 className="card-title">{featuresConfig[activeFeature].title}</h2>
              <p>{featuresConfig[activeFeature].content}</p>
              {featuresConfig[activeFeature].icon}
            </div>
          </div>
        </div>
      )}
  
      {/* Model viewer and interaction buttons */}
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
        {Object.keys(featuresConfig).map(key => (
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
