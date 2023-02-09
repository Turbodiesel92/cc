import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({ planeteers }) {
  const planeteersList = planeteers.map((planeteer) => {
    return (
      <Planeteer
        key={planeteer.id}
        name={planeteer.name}
        born={planeteer.born}
        bio={planeteer.bio}
        quote={planeteer.quote}
        image={planeteer.pictureUrl}
        twitter={planeteer.twitter}
        fromUSA={planeteer.fromUSA}
      />
    );
  });

  return <ul className="cards">{planeteersList}</ul>;
}

export default PlaneteersContainer;
