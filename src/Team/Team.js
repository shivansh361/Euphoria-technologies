import React from "react";
import { data } from "./data";
import "./Team.css";
import Tilt from "react-tilt";
import CustomCard from "./CustomCard";

function Team() {
  return (
    <div className="team" id="team">
      <h1>Team Members</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint culpa
        dolore, cumque iusto nostrum ratione ipsum porro reprehenderit velit
        nihil!
      </p>
      <div className="team__main">
        {data.map((person) => {
          return (
            <Tilt options={{ max: 25, scale: 1 }}>
              <CustomCard
                name={person.name}
                image={person.image}
                title={person.title}
              />
            </Tilt>
          );
        })}
      </div>
    </div>
  );
}

export default Team;
