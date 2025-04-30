// _app.js
import "../styles/globals.css";
import "@preline/carousel"; // This loads the carousel’s JS
import Script from "next/script";
import Navbar from "../components/Navbar";
import Head from "next/head";
import localFont from "next/font/local";

const bebasNeue = localFont({
  src: "/BebasNeue-Regular.ttf",
  // Optional: You can specify weight and style if needed
  // weight: '400',
  // style: 'normal',
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Remove external Google Fonts links since we're self-hosting the font */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js"
        strategy="beforeInteractive"
      />
      <div className={bebasNeue.className}>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
