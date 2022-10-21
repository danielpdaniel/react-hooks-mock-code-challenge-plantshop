import React from "react";

function NewPlantForm({ onNewPlant }) {

  function handleSubmit(e){
    e.preventDefault()
    const newPlant = {
      name: e.target[0].value,
      image: e.target[1].value,
      price: parseInt(e.target[2].value, 10)
    }
    onNewPlant(newPlant)
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
