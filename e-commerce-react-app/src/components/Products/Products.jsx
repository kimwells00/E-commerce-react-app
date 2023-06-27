/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Products({ plants }) {
  return (
    <div className="product-card-container">
      <div className="shop-header">
        <h1>Shop Our Plants</h1>
      </div>
      {plants.map((plant) => (
        <div className="product-card" key={plant.name}>
          <h2>{plant.name}</h2>
          <h3>{plant.scientificName}</h3>
          <img src={plant.image} alt={plant.name} />

          <button className="more-info-button">
            <Link to={`/products/${plant.name}`}> more info </Link>
          </button>
        </div>
      ))}
    </div>
  );
}
