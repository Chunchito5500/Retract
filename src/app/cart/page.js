import Head from "next/head";
import Navbar from "@/app/components/Navbar";

export default function About() {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Learn more about us on our About page."
        />
      </Head>
      <Navbar />
      <main>
        <h1>Coming Soon!</h1>
      </main>
    </div>
  );
}
