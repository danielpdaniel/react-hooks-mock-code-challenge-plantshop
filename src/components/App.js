import React, {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [plants, setPlants] = useState(false);
  const [allPlants, setAllPlants] = useState(false);
  // const [searchTerm, setSearchTerm] = useState("")

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(resp=>resp.json())
    .then(data=>{setPlants(data); setAllPlants(data)})
  }, [])

  function handleNewPlant(newPlant){
    // console.log(newPlant)
    fetch("http://localhost:6001/plants",{
      method: "POST",
      headers:
      {"Content-Type": "application/json"},
      body: JSON.stringify(newPlant),
    })
    .then(resp=>resp.json())
    .then(data=>setPlants(plants, data))
  }

  function handleSearchChange(searchValue){
    // setSearchTerm(searchValue);
    // console.log(searchTerm)

    const newPlantsList = allPlants.filter(plant => plant.name.toUpperCase().includes(searchValue.toUpperCase()))
  
    searchValue==="" ? 
    setPlants(allPlants) :
    setPlants(newPlantsList) 
    
  }
  // console.log(searchTerm)

  return (
    <div className="app">
      <Header />
      {plants ?
      <PlantPage plants={plants} onNewPlant={handleNewPlant} onSearchChange={handleSearchChange}/> :
      <h2>Loading...</h2>
      }
    </div>
  );
}

export default App;
