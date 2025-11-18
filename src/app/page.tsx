import Script from "next/script";
import LandingLayout from "../components/landing/LandingLayout";

// Organization JSON-LD
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Retractability Bicycles LLC",
  url: "https://retractability.com",
  logo: "https://retractability.com/icon-512.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Glendale",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  sameAs: [
    "https://instagram.com/retractability_bikes",
    "https://www.linkedin.com/company/retractability-bicycles/",
    "https://www.reddit.com/r/retractability/",
    "https://www.youtube.com/@Retractability",
  ],
};

// Product JSON-LD
const productJsonLd = {
  "@type": "Product",
  name: "Retractability Full-Size Folding Bike",
  brand: { "@type": "Brand", name: "Retractability" },
  description:
    "A full-size folding bicycle that collapses to a compact, portable package without sacrificing ride quality.",
  image: ["https://retractability.com/og/retractability-og.png"],
  category: "Sporting Goods > Outdoor Recreation > Cycling",
};

export default function HomePage() {
  return (
    <>
      <Script
        id="jsonld-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Script
        id="jsonld-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <LandingLayout />
    </>
  );
}
