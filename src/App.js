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
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme} from "./Components/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


function App() {
  const [isopened, setOpened] = useState(false);

  const handleNavbar = () => {
    setOpened(!isopened);
  };

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles />
      <div className="App">
        
          <button className="toggle-button" type="button" onClick={themeToggler}><FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} /></button>
          <Navbar handleNavbar={handleNavbar} navbarState={isopened} />
          <Showcase />
          <About />
          <WhyChimps />
          <Testimonial />
          <Team />
          <Contact />
          <Footer />
        
      </div>
      </>
    </ThemeProvider>
  );
}

export default App;
