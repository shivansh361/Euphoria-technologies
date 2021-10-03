import React from "react";
import "./Testimonial.css";

function Testimonial() {
  return (
    <div className="testimonial" id="testimonial">
      <h2>What do they say?</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        cupiditate placeat fugit doloremque quaerat optio quod blanditiis nihil
        ad. Voluptatem.
      </p>
      <div className="testimonial__boxes">
        <div className="testimonial__boxes__item">
          <i>
            <img src="../images/testimonial-icon.png" alt="" />
          </i>
          <p>
            Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas
            scelerisque orci. Maecenas a finibus odio. Maecenas a finibus odio
          </p>
          <div className="user-image">
            <img src="../images/catherine.png" alt="" />
          </div>
          <div className="team-info">
            <h3 className="user-name">Catherine Soft</h3>
            <span>Managing Director</span>
          </div>
        </div>

        <div className="testimonial__boxes__item">
          <i>
            <img src="../images/testimonial-icon.png" alt="" />
          </i>
          <p>
            Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet
            nulla vitae, placerat nibh. Cras maximus venenatis molestie.
          </p>
          <div className="user-image">
            <img src="../images/kelvin.jpg" alt="" />
          </div>
          <div className="team-info">
            <h3 className="user-name">Kelvin Wood</h3>
            <span>Digital Marketer</span>
          </div>
        </div>
        <div className="testimonial__boxes__item">
          <i>
            <img src="../images/testimonial-icon.png" alt="" />
          </i>
          <p>
            Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras
            quis est non ante ultrices molestie. Ut vehicula et diam at aliquam.
          </p>
          <div className="user-image">
            <img src="../images/david.jpeg" alt="" />
          </div>
          <div className="team-info">
            <h3 className="user-name">David Martin</h3>
            <span>Website Manager</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
