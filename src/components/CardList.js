import React from "react";
import Card from "./Card";

const CardList = ({ recipes }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {recipes.map((user, i) => {
        return (
          <Card
            key={i}
            id={recipes[i].id}
            name={recipes[i].name}
            image={recipes[i].image}
            description={recipes[i].description}
            price={recipes[i].price}
          />
        );
      })}
    </div>
  );
};

export default CardList;
