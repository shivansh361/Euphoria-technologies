import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about" id="features">
      <div className="about__boxes">
        <div className="about__boxes__box">
          <div className="box__icon">
            <i>
              <img src="../images/featured-item-01.png" alt="" />
            </i>
          </div>
          <h5 className="features-title">Modern Strategy</h5>
          <p>We develop and provides latest technologies</p>
        </div>
        <div className="about__boxes__box">
          <div className="box__icon">
            <i>
              <img src="../images/featured-item-01.png" alt="" />
            </i>
          </div>
          <h5 className="features-title">Best Relationship</h5>
          <p>Contact us immediately if you have a question in mind</p>
        </div>
        <div className="about__boxes__box">
          <div className="box__icon">
            <i>
              <img src="../images/featured-item-01.png" alt="" />
            </i>
          </div>
          <h5 className="features-title">Ultimate Marketing</h5>
          <p>The Marketing of your product is done through every means</p>
        </div>
      </div>
      <div className="about__main">
        <h2>About Us</h2>
        <p>
          Among a overabundance of services, web design and mobile applications,
          (ERPs), e-commerce solutions, business-to-business applications,
          business-to-client applications, AI-ML based applications, IoT and
          blockchain solutions are few that we offer.As a leader in technology
          exploring, Chimps is committed to providing quality technical
          solutions worldwide. Satisfied clients around the globe bear the
          testimony to the quality of our work.
        </p>
        <p>
          Chimps’s business philosophy is to assure the highest quality product,
          total client satisfaction, timely delivery of solutions and the best
          quality/price ratio found in the industry. Our emphasis is on offering
          a high degree of product user friendliness through a positive,
          creative and focused company staff.
        </p>
      </div>
    </div>
  );
}

export default About;
