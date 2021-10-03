import React from "react";
import "./WhyChimps.css";
import { data } from "./data";
import WhyChimpsCard from "./WhyChimpsCard";

function WhyChimps() {
  return (
    <div className="whyChimps">
      <h1>Why Euphoria</h1>
      <p>
        We are a "Euphoria" Entity enabling fast-track IT solutions powered with
        a perfect balance of technology innovation, software
        designing-development and business consultancy.
      </p>
      <div className="whyChimps__main">
        {data.map((res) => {
          return <WhyChimpsCard title={res.title} desc={res.desc} />;
        })}
      </div>
    </div>
  );
}

export default WhyChimps;
