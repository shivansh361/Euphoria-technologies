import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Showcase from "./Showcase/Showcase";
import About from "./About/About";
import Testimonial from "./Testimonials/Testimonial";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Team from "./Team/Team";
import WhyChimps from "./WhyChimps/WhyChimps";

function App() {
  const [isopened, setOpened] = useState(false);

  const handleNavbar = () => {
    setOpened(!isopened);
  };

  return (
    <div className="App">
      <Navbar handleNavbar={handleNavbar} navbarState={isopened} />
      <Showcase />
      <About />
      <WhyChimps />
      <Testimonial />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
