import "./App.css";
import { useState } from "react";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import PlantDetails from "./components/PlantDetails/PlantDetails";
import Info from "./components/Info/Info";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const plants = [
    {
      name: "Albino Monstera",
      scientificName: "	Monstera deliciosa 'Albo-Variegata'",
      image:
        "https://images.unsplash.com/photo-1560415578-57d16c5df143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
      description:
        "The Albino Monstera has large, heart-shaped leaves with irregular patches of white or creamy-yellow coloration. The variegation can occur in different patterns, such as spots, streaks, or marbling. The variegated areas are devoid of chlorophyll, which gives them their distinctive color.",
      lighting:
        "The Albino Monstera prefers bright, indirect light. Avoid placing it in direct sunlight, as it can scorch the delicate variegated leaves. A well-lit spot near a window, where it receives filtered or dappled sunlight, is ideal.",
      watering:
        "It's important to maintain a proper watering routine for the Albino Monstera. Allow the top inch or so of the soil to dry out between waterings, and then water thoroughly until water drains from the bottom of the pot. Avoid overwatering, as it can lead to root rot.",
      price: 100.0,
    },
    {
      name: "Fiddle leaf fig tree",
      scientificName: "Ficus lyrata",
      image:
        "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      description:
        "The Fiddle-Leaf Fig tree has large, violin-shaped leaves that are dark green and leathery in texture. The leaves are deeply veined and have a glossy sheen, adding to their aesthetic appeal. The tree can grow up to several feet tall, creating an impressive focal point in any indoor space.",
      lighting:
        "The Fiddle-Leaf Fig thrives in bright, indirect light. It enjoys being near a window where it can receive filtered sunlight. However, it's important to protect it from direct, harsh sunlight, as it can scorch the leaves. Rotate the tree occasionally to ensure even growth on all sides.",
      watering:
        "It's essential to strike a balance with watering the Fiddle-Leaf Fig. Allow the top inch or so of the soil to dry out between waterings, and then water the plant thoroughly. Avoid overwatering or letting the plant sit in water, as it can lead to root rot. Adjust the watering frequency based on the season and environmental conditions.",
      price: 60.0,
    },
    {
      name: "Donkey's tail",
      scientificName: "Sedum morganianum",
      image:
        "https://assets.weimgs.com/weimgs/rk/images/wcm/products/202311/0131/faux-potted-donkey-tail-plant-o.jpg",
      description:
        " The Donkey's Tail plant features long, trailing stems covered in closely packed, fleshy leaves. The leaves are cylindrical and resemble small, plump beads. They have a bluish-green color and a smooth, glossy texture. The stems can grow several feet long, creating a cascading effect when the plant is displayed in hanging baskets or elevated positions.",
      lighting:
        "The Donkey's Tail plant thrives in bright, indirect light. It appreciates ample sunlight but should be protected from intense, direct sunlight, as it can scorch the leaves. Place it near a window where it can receive bright, filtered light for several hours a day.",
      watering:
        "As a succulent, the Donkey's Tail has low water requirements. Allow the soil to dry out completely between waterings and then water the plant thoroughly. Overwatering can lead to root rot, so it's important to avoid waterlogged conditions. Water sparingly during the winter months when the plant's growth slows down.",
      price: 40.0,
    },
    {
      name: "Elephant's ear",
      scientificName: "Colocasia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUVF1pIi-yJOheyIESPmK6EfUGfbrat_yh_Q&usqp=CAU",
      description:
        "The Elephant Ear plant is characterized by its large, heart-shaped or arrowhead-shaped leaves that grow on long stalks. The leaves can vary in size, depending on the species and cultivar, but they are typically broad and impressive, giving the plant its unique and recognizable look. The foliage comes in various shades of green, and some varieties may have interesting patterns or variegation.",
      lighting:
        "Elephant Ear plants thrive in bright, indirect light or partial shade. While they can tolerate some direct sunlight, it's best to provide them with filtered light to prevent scorching of the leaves. In indoor settings, place them near a window with indirect light, or provide supplemental artificial lighting.",
      watering:
        " These plants prefer consistently moist soil but not waterlogged conditions. Water them thoroughly whenever the top inch of soil feels dry to the touch, ensuring proper drainage. During hot summer months, they may require more frequent watering to maintain adequate moisture levels.",
      price: 50.0,
    },
    {
      name: "Pothos",
      scientificName: "Devil's ivy",
      image:
        "https://images.unsplash.com/photo-1537039557108-4a42c334fd5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
      description:
        "Pothos plants have heart-shaped leaves that are glossy and leathery in texture. The leaves can vary in color, with common varieties displaying shades of green, including light green, dark green, and variegated patterns. Variegated Pothos plants have marbled or speckled leaves that combine shades of green with creamy white or golden-yellow accents.",
      lighting:
        "Pothos plants are versatile when it comes to lighting conditions. They can tolerate a wide range of light levels, from low to bright indirect light. However, they tend to thrive best in moderate to bright indirect light, which helps maintain vibrant leaf colors and encourages more compact growth. Avoid direct sunlight, as it can scorch the leaves.",
      watering:
        "Pothos plants prefer evenly moist soil but are also tolerant of occasional drying out. Water them when the top inch or so of soil feels dry to the touch, and ensure proper drainage to prevent waterlogging. Overwatering can lead to root rot, so it's better to underwater than overwater.",
      price: 30.0,
    },
    {
      name: "Snake plant",
      scientificName: "Dracaena trifasciata",
      image:
        "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      description:
        "Snake Plants have long, upright leaves that are thick and sword-shaped. The leaves are typically dark green, although some varieties may have variegated patterns with yellow or white stripes. The leaves grow vertically from a basal rosette, and they can reach varying heights depending on the specific Snake Plant variety.",
      lighting:
        "Snake Plants can adapt to a range of lighting conditions but prefer bright, indirect light. They can tolerate low light levels, but prolonged exposure to low light may result in slower growth and less vibrant leaf coloration. Avoid placing them in direct sunlight, as it can scorch the leaves.",
      watering:
        " Snake Plants have low water requirements and are susceptible to overwatering. They are drought-tolerant and prefer to dry out between waterings. It's important to let the soil dry partially or completely before watering again. Overwatering can lead to root rot and other issues, so it's best to err on the side of underwatering.",
      price: 50.0,
    },
  ];
  const [cart, setCart] = useState([]);
  const handleAddToCart = (plant) => {
    const plantInCart = cart.find((item) => item.name === plant.name);
    if (plantInCart) {
      const updatedCart = cart.map((item) => {
        if (item.name === plant.name) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  };
  return (
    <div>
      <Router>
        <nav>
          <h3>Botanical Haven</h3>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/info">Info</Link>
          <Link to="/cart">Cart</Link>
        </nav>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/products" element={<Products plants={plants} />} />
          <Route
            path="/products/:plantName"
            element={
              <PlantDetails plants={plants} handleAddToCart={handleAddToCart} />
            }
          />
          <Route path="/info" Component={Info} />
          <Route path="/cart" element={<Cart cart={cart} />} />

          <Route path="*" Component={NotFound} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
