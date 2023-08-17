

# E-commerce-react-app

![Screenshot 2023-08-16 214420](https://github.com/kimwells00/E-commerce-react-app/assets/130780040/c3b2b634-3141-47fa-be4d-3bf8722df42e)
![Screenshot 2023-08-16 214538](https://github.com/kimwells00/E-commerce-react-app/assets/130780040/7821c7f3-a5bb-42dc-908f-29733acfffb5)
![Screenshot 2023-08-16 214601](https://github.com/kimwells00/E-commerce-react-app/assets/130780040/3d8e1a65-9ecd-4bcb-b141-5d50e1132beb)
![Screenshot 2023-08-16 214638](https://github.com/kimwells00/E-commerce-react-app/assets/130780040/91276582-19f4-4e08-bd52-732777951986)

##Contents
--- 

  * What it is
  * Technologies used
  * Features
  * Code examples

## What it is
This project is a responsive e-commerce store built using React.js. The application features a Home Page, Products Page, Product Card Page, and a Cart Page, all interconnected using React Router. It's designed to showcase various aspects of frontend development, including component creation, state management, navigation, and user interactions.
## Technologies used
* HTML
* CSS
* Javascript
* React
* React-router
## Features
* Home Page: Landing page delivering the purpose and theme of the store.
* Products Page: Displays a list of available products with titles, descriptions, and "View More" buttons.
* Product Card Page: Detailed page showing product information, detailed image, and "Add to Cart" button.
* Cart Page: Display items added to the shopping cart along with total cost.

## Code examples
Add to cart functionality 
```
const [cart, setCart] = useState([]);
  // takes a plant object as a parameter
  const handleAddToCart = (plant) => {
    //This line checks if the plant already exists in the cart array
    //find() method to search for an item in the cart array that has the same name as the plant being added.
    const plantInCart = cart.find((item) => item.name === plant.name);
    //checks if the plant is already present in the cart
    if (plantInCart) {
      //creates an updated version of the cart array by mapping over each item in the cart array
      // and increasing the quantity of the matching plant by 1.
      const updatedCart = cart.map((item) => {
        if (item.name === plant.name) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
      //If the plant is not in the cart this else block is executed
    } else {
      //adds a new item to the cart array by spreading the  cart array and
      // adding a new  plant with a quantity of 1 ({ ...plant, quantity: 1 }).
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  };
```
Products page 
```export default function Products({ plants }) {
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
```
 
