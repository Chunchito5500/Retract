import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js"
        strategy="beforeInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
