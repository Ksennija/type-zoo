import React from "react";
import AnimalList from "./components/AnimalList";
import { initialAnimals } from "./data/data";

import "./App.css";

function App() {
  return (
    <div className="App">
      <AnimalList initialItems={initialAnimals} />
    </div>
  );
}

export default App;
