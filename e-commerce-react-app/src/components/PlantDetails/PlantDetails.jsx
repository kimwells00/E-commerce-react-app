/* eslint-disable react/prop-types */

import { useParams, useNavigate } from "react-router-dom";

export default function PlantDetails({ plants, handleAddToCart }) {
  const { plantName } = useParams();
  const navigate = useNavigate();
  const plant = plants.find((plant) => plant.name === plantName);

  const addToCart = () => {
    handleAddToCart(plant);
    navigate("/cart");
  };

  return (
    <div>
      <h1>{plant.name}</h1>
      <img src={plant.image} alt={plant.name} />
      <h2>Description</h2>
      <p>{plant.description}</p>
      <h2>CARE INSTRUCTIONS</h2>
      <h2>Lighting</h2>
      <p>{plant.lighting}</p>
      <h2>Watering</h2>
      <p>{plant.watering}</p>
      <p>Price: ${plant.price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}
