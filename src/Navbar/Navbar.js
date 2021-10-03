import React from "react";
import "./Navbar.css";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

function Navbar(props) {
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)",
    position: "fixed",
    top: "30px",
    left: "0px",
    right: "0px",
    zIndex: "100",
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <animated.div style={barAnimation}>
        <div className="navbar">
          <nav
            className={
              !props.navbarState ? "navbar__main" : "navbar__main__open"
            }
          >
            {/* <!-- ***** Logo Start ***** --> */}
            <div className="navbar__main__logo">
              <img
                src={process.env.PUBLIC_URL + "images/Logo(compressed png).png"}
                alt="Chimps Technologies"
                className="logo_img"
              />
            </div>
            <div className="navbar__main__menu">
              <animated.ul className="nav" style={linkAnimation}>
                <li>
                  <a href="#welcome" className="active">
                    Home
                  </a>
                </li>

                <li>
                  <a href="#features">About</a>
                </li>

                <li>
                  <a href="#testimonial">Testimonials</a>
                </li>

                <li>
                  <a href="#team">Team</a>
                </li>

                <li>
                  <a href="#contact-us">Contact Us</a>
                </li>
              </animated.ul>
              <BurgerWrapper>
                <BurgerMenu
                  navbarState={props.navbarState}
                  handleNavbar={props.handleNavbar}
                />
              </BurgerWrapper>
              <CollapseMenu
                navbarState={props.navbarState}
                handleNavbar={props.handleNavbar}
              />
            </div>
          </nav>
        </div>
      </animated.div>
    </>
  );
}

export default Navbar;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 1400px) {
    display: none;
  }
`;
