import React from "react";
import "./WhyChimpsCard.css";

function WhyChimpsCard({ title, desc }) {
  return (
    <div className="chimpsCards">
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}

export default WhyChimpsCard;
