import React, { useState } from "react";

function Planeteer({ name, image, bio, quote, twitter, fromUSA }) {
  const [showQuote, setQuote] = useState(false);

  function handleImageClick() {
    console.log("clicked");
    setQuote((showQuote) => !showQuote);
  }

  return (
    <li className="cards__item">
      <div className="card">
        <img
          onClick={handleImageClick}
          src={image}
          alt={name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text">{showQuote ? quote : bio}</p>
          <div className="card__detail">
            <p>{twitter}</p>
            <p>{fromUSA ? "USA-based" : "Working overseas"}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
