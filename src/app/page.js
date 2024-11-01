import Image from "next/image";
import { FcGraduationCap } from "react-icons/fc";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Education from "../components/Education.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />

      </>

  );
}
