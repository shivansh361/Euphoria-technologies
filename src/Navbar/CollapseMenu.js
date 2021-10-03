import React from "react";
import "./CollapseMenu.css";
import { useSpring, animated } from "react-spring";

function CollapseMenu(props) {
  const { open } = useSpring({
    open: props.navbarState ? 0 : 1,
  });

  if (props.navbarState) {
    return (
      <animated.div
        className="collapseMenu"
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate((openValue) => `translate3d(0,${openValue}px)`),
        }}
      >
        <ul onClick={props.handleNavbar}>
          <li>
            <a href="#welcome" className="active">
              Home
            </a>
          </li>
          <hr />
          <li>
            <a href="#features">About</a>
          </li>
          <hr />
          <li>
            <a href="#testimonial">Testimonials</a>
          </li>
          <hr />
          <li>
            <a href="#team">Team</a>
          </li>
          <hr />
          <li>
            <a href="#contact-us">Contact Us</a>
          </li>
        </ul>
      </animated.div>
    );
  }
  return null;
}

export default CollapseMenu;
