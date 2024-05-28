import React, { useState, useEffect, useRef } from 'react';
import { IoHammer } from 'react-icons/io5';
import { GiCartwheel } from 'react-icons/gi';
import { FiMap } from 'react-icons/fi';

export default function HomeDesktop({ setBackgroundColor }) {
  const [modelSrc, setModelSrc] = useState("Bike Unfolded - Midnight Blue.glb");
  const [cameraOrbit, setCameraOrbit] = useState("-137deg 2m");
  const [activeFeature, setActiveFeature] = useState(null);
  const [cardStack, setCardStack] = useState([]);
  const [opacity, setOpacity] = useState(1);
  const [title, setTitle] = useState("The Quark Bike");
  const [titleColor, setTitleColor] = useState("#456990");
  const modelViewerRef = useRef(null);

  useEffect(() => {
    if (!customElements.get("model-viewer")) {
      import("@google/model-viewer");
    }
  }, []);

  const featuresConfig = {
    feature1: {
      cameraOrbit: "180deg 0 0",
      title: "The Quark Enhanced Bike",
      cardtitle: "Innovative Design:",
      content: "The Quark Foldable Bike reimagines cycling mobility, offering unparalleled convenience without sacrificing style or functionality.",
      style: { background: "linear-gradient(to bottom, #587792, #8DB1AB, #3C5862, #E6E6E6 99%)", color: "#ffffff" },
      titleColor: "#ffffff",
      icon: <IoHammer size={44} color="#ffffff" />
    },
    feature2: {
      cameraOrbit: "50deg 2m 2m",
      title: "The Quark Foldable Bike",
      cardtitle: "Durability Redefined:",
      content: "Say goodbye to the fear of flat tires. The Quark's tires are crafted from a special pop-resistant material, offering peace of mind on any adventure.",
      style: { background: "linear-gradient(to bottom, #34403A, #1e6e37, #285238, #E6E6E6 99%)", color: "#ffffff" },
      titleColor: "#E48F80",
      icon: <GiCartwheel size={44} color="#ffffff" />
    },
    feature3: {
      cameraOrbit: "120deg 90deg 0",
      title: "The Quark Adaptable Bike",
      cardtitle: "Versatility Unmatched:",
      content: "Engineered for every destination—work, college, parks, urban landscapes, or trails. The Quark Foldable Bike adapts to your lifestyle, ensuring you're ready for wherever life takes you.",
      style: { background: "linear-gradient(to bottom, #6F5060, #51344D, #A78682, #E6E6E6 99%)", color: "#ffffff" },
      titleColor: "#FFEDC3",
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

  const defaultBackground = "linear-gradient(to bottom, #859EB8 10%, #C0C6CC 30%, #E6E6E6 90%)";

  const layoutContainerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
    width: "100%",
    height: "100vh",
    padding: "20px",
    background: activeFeature ? featuresConfig[activeFeature].style.background : defaultBackground,
    boxSizing: "border-box",
    transition: "background 500ms ease-in-out"
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
    top: "40%",
    left: "5%",
    zIndex: 2,
    maxWidth: "300px"
  };

  const handleFeatureClick = (feature) => {
    if (activeFeature === feature) {
      setActiveFeature(null);
      setCameraOrbit("-137deg 2m"); // Reset to original camera orbit
      setCardStack(prev => prev.filter(f => f !== feature)); // Remove feature from stack
      setTitle("The Quark Bike");
      setTitleColor("#456990");
      setBackgroundColor(defaultBackground);
    } else {
      setOpacity(0); // Start fade-out
      setTimeout(() => {
        setCameraOrbit(featuresConfig[feature].cameraOrbit);
        setOpacity(1); // Fade-in after camera orbit change
      }, 200);
      setActiveFeature(feature);
      setTitle(featuresConfig[feature].title);
      setTitleColor(featuresConfig[feature].titleColor);
      setBackgroundColor(featuresConfig[feature].style.background.split(", ")[1]);
      setCardStack(prev => [...new Set([feature, ...prev])]); // Add feature to top of stack, remove duplicates
    }
  };

  const renderTextCard = (feature) => {
    const { cardtitle, content, style, icon } = featuresConfig[feature];
    return (
      <div className="stack">
        <div className={`card w-96 glass`} style={style}>
          <div className="card-body">
          <h2 className="card-title" style={{ color: '#ffffff' }}>{cardtitle}</h2>
            <p style={{ color: '#ffffff' }}>{content}</p>
            {icon}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={layoutContainerStyle}>
      <div style={titlesAndCardContentStyle}>
        <p className="text-1xl font-semibold leading-7" style={{ color: titleColor }}>
          The new way to bike
        </p>
        <h1 className="mt-2 text-6xl font-bold tracking-tight" style={{ color: titleColor }}>
          {title}
        </h1>
      </div>

      {/* Dynamic cards generated based on feature selection */}
      {activeFeature && (
        <div style={{ position: "absolute", top: "40%", left: "5%", zIndex: 2, maxWidth: "300px" }}>
          <div className="card w-96" style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.18)' }}>
            <div className="card-body">
              <h2 className="card-title">{featuresConfig[activeFeature].cardtitle}</h2>
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
