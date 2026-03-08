import Footer from "./sections/Footer";
import Contact from "./sections/Contact";

import Hero from "./sections/Hero";
import LogoShowcase from "./sections/LogoShowcase";
import Navbar from "./components/NavBar";
import Video from "./components/Video.jsx";
import AboutMe from "@/components/AboutMe.jsx";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <AboutMe />
    <LogoShowcase />
    <Video />
    <Contact />
    <Footer />
  </>
);

export default App;
