import About from "@/components/About";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
// import Head from "next/head";

export default function Home() {
  return (
    <>
      {/* <Head>
        <link rel="shortcut icon" href="/favion.png" type="image/x-icon" />
      </Head> */}
      <HeroSection />
      <About />
      <Footer />
    </>
  );
}
