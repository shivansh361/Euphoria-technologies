import React from "react";
import "./BurgerMenu.css";
import { animated } from "react-spring";

function BurgerMenu(props) {
  return (
    <animated.div onClick={props.handleNavbar} className="burgermenu">
      <div className={props.navbarState ? "open" : ""}>
        <span className="burger__span">&nbsp;</span>
        <span className="burger__span">&nbsp;</span>
        <span className="burger__span">&nbsp;</span>
      </div>
    </animated.div>
  );
}

export default BurgerMenu;
