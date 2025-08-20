// app/gallery/page.tsx
import { Navbar } from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { SlidingWheelCard } from "./GalleryModels/slidingwheel";
import { RetractabilityBikeCard } from "./GalleryModels/RetractabilityBikeCard";
import localFont from "next/font/local";

// Load your fonts
const BebasNeue = localFont({
  src: "../../fonts/BebasNeue-Regular.ttf",
  display: "swap",
});

// Next.js metadata API replaces next/head in the app-router
export const metadata = {
  title: "Gallery",
  description: "Look at our 3D Models.",
};

export default function Page() {
  return (
    <div
      className="relative min-h-screen"
      style={{
        background:
          "linear-gradient(to top, #111827, #12132c, #120d31, #302f4d, #4e425b)",
      }}
    >
      <Navbar />

      <div style={{ height: 110 }} />

      <div className="py-4 lg:py-2 px-2 mx-auto max-w-screen-md">
        <div style={{ height: 80 }} />
        <h2
          className={`mb-16 text-5xl font-bold text-center text-[#c8c8c8] ${BebasNeue.className}`}
        >
          View our Gallery
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
          justifyContent: "center",
          padding: 30,
        }}
      >
        <SlidingWheelCard />
        <RetractabilityBikeCard />
      </div>

      <Footer />
    </div>
  );
}
