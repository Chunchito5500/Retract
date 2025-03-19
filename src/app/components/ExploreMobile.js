import React, { useState, useEffect } from "react";
import { MdPedalBike } from "react-icons/md";
import { IoAlertCircleOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import styles from "./Explore.module.css";

const ExploreMobile = () => {
  const [email, setEmail] = useState("");
  const [isFolded, setIsFolded] = useState(false);
  const [currentModel, setCurrentModel] = useState(null);

  const models = ["/RBikeU.jpeg", "/RBikeF.jpeg"];
  const foldedModels = ["/foldedbike.svg", "/unfoldedbike.svg"];

  useEffect(() => {
    if (typeof window !== "undefined" && !customElements.get("model-viewer")) {
      import("@google/model-viewer");
    }
  }, []);

  useEffect(() => {
    const arrowElements = document.querySelectorAll(`.${styles.arrow} span`);

    const startAnimation = () => {
      arrowElements.forEach(
        (span) => (span.style.animationPlayState = "running")
      );
    };

    const stopAnimation = () => {
      arrowElements.forEach(
        (span) => (span.style.animationPlayState = "paused")
      );
    };

    let animationTimeout = setTimeout(startAnimation, 2000);
    const swapElement = document.querySelector("label.swap");

    const resetAnimationTimeout = () => {
      clearTimeout(animationTimeout);
      stopAnimation();
      animationTimeout = setTimeout(startAnimation, 60000);
    };

    if (swapElement) {
      swapElement.addEventListener("click", resetAnimationTimeout);
    }

    return () => {
      clearTimeout(animationTimeout);
      if (swapElement) {
        swapElement.removeEventListener("click", resetAnimationTimeout);
      }
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Thank you for subscribing!");
        setEmail("");
      } else {
        alert("Sorry, there was an issue on our end, please try again later!");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  const handleSwapClick = () => {
    setIsFolded((prevFolded) => !prevFolded);
    setCurrentModel((prevModel) => {
      const currentIndex = models.findIndex((m) =>
        prevModel?.includes(m.split("/")[1].split(" ")[0])
      );
      return isFolded ? foldedModels[currentIndex] : models[currentIndex];
    });
  };

  return (
    <div>
      <section id="middle" className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-4">
            {/* Image Viewer Side */}
            <div className="relative text-center">
              {/* Toggle Button */}
              <div className="flex items-center justify-center mb-4">
                <label
                  style={{
                    border: "3px solid #D0D0D0",
                    borderRadius: "6px",
                  }}
                  className="swap swap-rotate relative bg-[#82a0bc] p-4 border-[white] cursor-pointer hover:bg-[#8da9c2] border-2"
                >
                  <input
                    type="checkbox"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onClick={handleSwapClick}
                  />
                  <div className={`swap-on ${styles.foldedBike}`}>
                    <Image
                      src="/foldedbike.svg"
                      alt="Folded Bike"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className={`swap-off ${styles.unfoldedBike}`}>
                    <Image
                      src="/unfoldedbike.svg"
                      alt="Unfolded Bike"
                      width={40}
                      height={40}
                    />
                  </div>
                </label>
              </div>

              {/* Swappable Image */}
              <div className="relative text-center">
                <Image
                  src={isFolded ? "/RBikeF.jpeg" : "/RBikeU.jpeg"}
                  alt="Retractability Bike"
                  width={700}
                  height={700}
                  className="rounded-lg border-2 border-[#A0A0A0]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="card"
        style={{
          width: "100%",
          maxWidth: "600px",
          background: "transparent",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="card-body text-center">
          <h1 className="text-3xl font-raleway text-white">
            The Retractability Pioneer
          </h1>
          <p className="mt-3 text-2xl font-raleway text-[#A0A0A0]">
            <i>Pioneering the Future of Foldable Bikes</i>
          </p>
          <p className="mt-4 font-raleway text-gray-400">
            Our innovative design blends the convenience of folding with the
            excellence of a traditional bike. Unlike other foldable bikes, the
            Retractability Pioneer offers unparalleled portability without
            compromising on ride quality, stability, or size. Discover the next
            generation of bicycles, setting new standards and advancing the
            industry.
          </p>
          <h3 className="mt-6 text-lg font-raleway text-blue-500">
            Release Date: June 2025
          </h3>
          <p className="mt-1/2 text-sm font-raleway text-[#A0A0A0]">
            <b>Pat. Pend.</b>
          </p>
          <div style={{ height: "15px" }}></div>
          <Link href="/quark" passHref>
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text font-raleway">Learn More</span>
            </button>
          </Link>
          <div>
            <div
              className="tooltip tooltip-right"
              data-tip="These are 3D renders of bike models that are not yet in production but are planned for the near future."
              style={{ position: "absolute", left: "10px" }}
            >
              <IoAlertCircleOutline className="text-red-200" size={32} />
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-10 mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-full">
            <div
              role="status"
              className="flex items-center justify-center h-56 w-72 bg-gray-700 rounded-lg animate-slow"
            >
              <MdPedalBike className="w-20 h-10 text-gray-600" />
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <div className="card w-full bg-transparent shadow-md lg:mx-6 mt-8 text-center">
            <div className="card-body">
              <h1 className="text-2xl font-raleway font-medium text-white lg:text-3xl lg:w-96">
                New Models Coming Soon!
              </h1>
              <p className="max-w-lg mt-6 font-raleway text-gray-400">
                Stick around and be the first to get notified when new models
                come out!
              </p>
            </div>
          </div>
        </div>
        <div style={{ height: "100px" }}></div>
      </div>
    </div>
  );
};

export default ExploreMobile;
