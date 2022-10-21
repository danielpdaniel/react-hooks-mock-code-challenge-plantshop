import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, onNewPlant, onSearchChange }) {

 
  return (
    <main>
      <NewPlantForm onNewPlant={onNewPlant}/>
      <Search onSearchChange={onSearchChange}/>
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
