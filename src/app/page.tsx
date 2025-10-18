import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Kitchen from "./components/Kitchen";
import Rooms from "./components/Rooms";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Features from "./components/Features";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features/>
      <About />
      <Kitchen />
      <Rooms />
      <Contact />
      <Footer />
    </>
  );
}
