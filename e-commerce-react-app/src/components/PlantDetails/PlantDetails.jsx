/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
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
    <div className="plant-details-container">
      <div className="plant-image">
        <img src={plant.detailImage} alt={plant.name} />
      </div>
      <div className="plant-info">
        <h1>{plant.name}</h1>
        <p>{plant.description}</p>
        <h2>CARE INSTRUCTIONS</h2>
        <h3>Lighting</h3>
        <p>{plant.lighting}</p>
        <h3>Watering</h3>
        <p>{plant.watering}</p>
        <p>Price: ${plant.price}</p>
        <button onClick={addToCart}>Add to cart</button>
        <button className="keep-shopping-button">
          <Link to={`/products`}> Keep Shopping </Link>
        </button>
      </div>
    </div>
  );
}
