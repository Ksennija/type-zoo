import React, { useState } from "react";
import { AnimalItem } from "../types/AnimalItem";
import { initialAnimals } from "../data/data";
import { getImageUrl } from "../utils/utils";

type AnimalListProps = {
  initialItems: AnimalItem[];
};

const AnimalList: React.FC<AnimalListProps> = ({ initialItems }) => {
  const [type, setType] = useState<string>("all");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setType((event.target as Element).id);
  };

  return (
    <>
      <button className="filter-button" id="cute" onClick={handleClick}>
        All Cute Animals
      </button>
      <button className="filter-button" id="scary" onClick={handleClick}>
        All Scary Animals
      </button>
      <button className="filter-button" id="all" onClick={handleClick}>
        Selectors Choice
      </button>

      <ul>{getList(type)}</ul>
    </>
  );
};

export default AnimalList;

function getList(animalType: string): React.ReactElement[] {
  let sortedAnimals =
    animalType === "all"
      ? initialAnimals
      : initialAnimals.filter((a) => a.type === animalType);

  return sortedAnimals.map((animal: AnimalItem) => (
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
