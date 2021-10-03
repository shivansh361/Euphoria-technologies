import React from "react";
import "./CustomCard.css";
import LazyLoad from "react-lazyload";

function CustomCard({ name, image, title }) {
  return (
    <div className="card">
      <div className="col-md-6 col-lg-3  col-xs-6">
        <div className="speaker__card" data-state="#about">
          <div className="card-header">
            <LazyLoad>
              <div
                className="card-cover"
                style={{
                  backgroundImage: `url('${image}')`,
                }}
              ></div>
            </LazyLoad>
            <img className="card-avatar lazy" src={image} alt="avatar" />
            <h1 className="card-fullname">{name}</h1>
            <h2 className="card-jobtitle">{title}</h2>
          </div>
          <div className="card-main">
            <div className="card-section is-active" id="about">
              <div className="card-content">
                <div className="card-subtitle">ABOUT</div>
                <p className="card-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, rerum!
                </p>
              </div>
              <div className="card-social">
                <ul>
                  <li>
                    <a href="linkedin">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="facebook">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="instagram">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
