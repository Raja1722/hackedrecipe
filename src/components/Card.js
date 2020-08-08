import React from "react";
import "./Card.css";

const Card = ({ name, image, id, description, price }) => {
  return (
    <div className="tc grow  br3 pa3 ma2 dib bw2 shadow-5 w-20 cardheight cardcolor cardfont">
      <img
        alt="recipes"
        src={`${image}`}
        style={{ width: "200px", height: "200px" }}
      />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>
          {" "}
          <strong>Price : $ </strong>
          {price}
        </p>
      </div>
    </div>
  );
};

export default Card;
