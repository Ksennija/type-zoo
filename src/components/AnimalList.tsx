import React, { useState } from "react";
import { AnimalItem } from "../types/AnimalItem";
import { initialAnimals } from "../data/data";
import { getImageUrl } from "../utils/utils";

export type AnimalListProps = {
  initialItems: AnimalItem[];
};

const AnimalList: React.FC<AnimalListProps> = () => {
  const [type, setAnimals] = useState<string>("all");

  //   function handleClick(e) {
  //     let type = e.target.id;

  //     if (type && type !== "selector") {
  //       setAnimals({
  //         type: type,
  //         list: initialAnimals.filter((a) => a.type === type),
  //       });
  //     } else {
  //       setAnimals({ type: type, list: initialAnimals });
  //     }
  //   }

  return (
    <>
      {
        /* <button className="filter-button" id="cute" onClick={handleClick}>
        All Cute Animals
      </button>
      <button className="filter-button" id="scary" onClick={handleClick}>
        All Scary Animals
      </button>
      <button className="filter-button" id="selector" onClick={handleClick}>
        Selectors Choice
      </button>*/
        <ul>{getList()}</ul>
      }
    </>
  );
};

export default AnimalList;

function getList(): any {
  return initialAnimals.map((animal) => (
    <li className="animal-item" key={"animal-" + animal.id}>
      <img
        className="animal-picture"
        src={getImageUrl(animal.imageId)}
        alt={animal.name}
      />
      <p className="animal-description">
        <b>{animal.name}</b>
        <br />
        {animal.description}
      </p>
    </li>
  ));
}
