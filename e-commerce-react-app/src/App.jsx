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
      name: "Monstera",
      scientificName: "	Monstera deliciosa 'Albo-Variegata'",
      image:
        "https://bloomscape.com/cdn-cgi/image/quality=75,fit=scale-down,height=580,width=696,metadata=copyright,format=webp/wp-content/uploads/2020/08/bloomscape_monstera_alt_stone-e1633461236549.jpg?ver=279417",
      detailImage:
        "https://bloomscape.com/cdn-cgi/image/quality=75,fit=scale-down,height=580,width=696,metadata=copyright,format=webp/wp-content/uploads/2020/08/bloomscape_monstera_detail.jpg?ver=279420",
      description:
        "The Monstera is characterized by its large, glossy, heart-shaped leaves that have distinct, natural leaf holes called fenestrations. The leaves can grow to impressive sizes, often reaching up to 2 feet (60 cm) in length. The plant has a climbing habit, and as it matures, it develops aerial roots that can latch onto surfaces for support.",
      lighting:
        "Monstera plants prefer bright, indirect light. They can tolerate some direct sunlight, but it's best to avoid exposing them to intense, harsh sunlight, as it can scorch their leaves. Place them near a window with filtered light or provide them with bright artificial lighting if grown indoors.",
      watering:
        "Monstera plants have moderate watering needs. They prefer a well-draining soil mix that retains some moisture but doesn't become waterlogged. Allow the top inch (2.5 cm) of soil to dry between waterings, and then water thoroughly, ensuring excess water drains out. Avoid overwatering, as it can lead to root rot.",
      price: 170.0,
    },
    {
      name: "Fiddle leaf fig tree",
      scientificName: "Ficus lyrata",
      image:
        "https://bloomscape.com/cdn-cgi/image/quality=75,fit=scale-down,height=580,width=696,metadata=copyright,format=webp/wp-content/uploads/2022/07/bloomscape_fiddle-leaf-fig_tree-size_stone.jpg?ver=915890",
      detailImage:
        "https://bloomscape.com/cdn-cgi/image/quality=75,fit=scale-down,height=580,width=696,metadata=copyright,format=webp/wp-content/uploads/2022/07/bloomscape_fiddle-leaf-fig_tree-size_detail_Edited.jpg?ver=916105",
      description:
        "The Fiddle-Leaf Fig tree has large, violin-shaped leaves that are dark green and leathery in texture. The leaves are deeply veined and have a glossy sheen, adding to their aesthetic appeal. The tree can grow up to several feet tall, creating an impressive focal point in any indoor space.",
      lighting:
        "The Fiddle-Leaf Fig thrives in bright, indirect light. It enjoys being near a window where it can receive filtered sunlight. However, it's important to protect it from direct, harsh sunlight, as it can scorch the leaves. Rotate the tree occasionally to ensure even growth on all sides.",
      watering:
        "It's essential to strike a balance with watering the Fiddle-Leaf Fig. Allow the top inch or so of the soil to dry out between waterings, and then water the plant thoroughly. Avoid overwatering or letting the plant sit in water, as it can lead to root rot. Adjust the watering frequency based on the season and environmental conditions.",
      price: 600.0,
    },
    {
      name: "Triostar",
      scientificName: "stromanthe triostar",
      image:
        "https://bloomscape.com/cdn-cgi/image/quality=75,fit=scale-down,height=921,width=768,metadata=copyright,format=webp/wp-content/uploads/2022/05/bloomscape_stromanthe_triostar_large_stone-scaled.jpg",
      detailImage:
        "https://bloomscape.com/cdn-cgi/image/quality=75,fit=scale-down,height=580,width=696,metadata=copyright,format=webp/wp-content/uploads/2022/02/bloomscape_stomanthe-tricolor_10in_detail-scaled.jpg?ver=675606",
      description:
        " Stromanthe Triostar features large, lance-shaped leaves with striking variegation. The leaves have a mix of colors including shades of green, cream, and pink. The variegation creates a beautiful and eye-catching pattern, adding a touch of tropical elegance to any space.",
      lighting:
        "Stromanthe Triostar prefers bright, indirect light. It thrives in locations with filtered sunlight or in areas where it receives bright but indirect light. Avoid exposing it to direct sunlight, as it can scorch the leaves. Inadequate light may result in reduced variegation and slower growth.",
      watering:
        "Stromanthe Triostar prefers slightly moist soil. Water the plant when the top inch of the soil feels dry, ensuring thorough watering without allowing it to sit in standing water. It is important to maintain adequate humidity levels around the plant by misting the leaves or placing a tray of water nearby.",
      price: 40.0,
    },
    {
      name: "Dracaena Gold Star",
      scientificName: "CDracaena warneckii 'gold star'",
      image:
        "https://bloomscape.com/cdn-cgi/image/quality=75,fit=scale-down,height=580,width=696,metadata=copyright,format=webp/wp-content/uploads/2020/08/bloomscape_dracaena-gold-lemon-lime_slate-1.jpg?ver=279723",
      detailImage:
        "https://bloomscape.com/cdn-cgi/image/quality=75,fit=scale-down,height=580,width=696,metadata=copyright,format=webp/wp-content/uploads/2020/08/bloomscape_dracaena-gold-lemon-lime_detail.jpg?ver=279520",
      description:
        "The Elephant Ear plant is characterized by its large, heart-shaped or arrowhead-shaped leaves that grow on long stalks. The leaves can vary in size, depending on the species and cultivar, but they are typically broad and impressive, giving the plant its unique and recognizable look. The foliage comes in various shades of green, and some varieties may have interesting patterns or variegation.",
      lighting:
        "Elephant Ear plants thrive in bright, indirect light or partial shade. While they can tolerate some direct sunlight, it's best to provide them with filtered light to prevent scorching of the leaves. In indoor settings, place them near a window with indirect light, or provide supplemental artificial lighting.",
      watering:
        " These plants prefer consistently moist soil but not waterlogged conditions. Water them thoroughly whenever the top inch of soil feels dry to the touch, ensuring proper drainage. During hot summer months, they may require more frequent watering to maintain adequate moisture levels.",
      price: 250.0,
    },
    {
      name: "Devil's ivy",
      scientificName: "Pothos",
      image:
        "https://bloomscape.com/cdn-cgi/image/quality=75,fit=scale-down,height=580,width=696,metadata=copyright,format=webp/wp-content/uploads/2022/10/bloomscape_xs-golden-pothos-opp_xs_white.jpg?ver=955413",
      detailImage:
        "https://bloomscape.com/cdn-cgi/image/quality=75,fit=scale-down,height=580,width=696,metadata=copyright,format=webp/wp-content/uploads/2022/10/bloomscape_xs-golden-pothos-opp_xs_detail.jpg?ver=955411",
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
        "https://bloomscape.com/cdn-cgi/image/quality=75,fit=scale-down,height=580,width=696,metadata=copyright,format=webp/wp-content/uploads/2022/10/bloomscape_sanseveria_zeylancia_sm_charcoal-scaled.jpg?ver=955388",
      detailImage:
        "https://bloomscape.com/cdn-cgi/image/quality=75,fit=scale-down,height=580,width=696,metadata=copyright,format=webp/wp-content/uploads/2022/10/bloomscape_sanseveria_zeylancia_sm_detail-scaled.jpg?ver=955390",
      description:
        "Snake Plants have long, upright leaves that are thick and sword-shaped. The leaves are typically dark green, although some varieties may have variegated patterns with yellow or white stripes. The leaves grow vertically from a basal rosette, and they can reach varying heights depending on the specific Snake Plant variety.",
      lighting:
        "Snake Plants can adapt to a range of lighting conditions but prefer bright, indirect light. They can tolerate low light levels, but prolonged exposure to low light may result in slower growth and less vibrant leaf coloration. Avoid placing them in direct sunlight, as it can scorch the leaves.",
      watering:
        " Snake Plants have low water requirements and are susceptible to overwatering. They are drought-tolerant and prefer to dry out between waterings. It's important to let the soil dry partially or completely before watering again. Overwatering can lead to root rot and other issues, so it's best to err on the side of underwatering.",
      price: 50.0,
    },
    {
      name: "Money tree",
      scientificName: "Pachira aquatica",
      image:
        "https://bloomscape.com/cdn-cgi/image/quality=75,fit=scale-down,height=580,width=696,metadata=copyright,format=webp/wp-content/uploads/2022/01/bloomscape_wooden-plant-stand_natural_money-tree-scaled.jpg?ver=660135",
      detailImage:
        "https://bloomscape.com/cdn-cgi/image/quality=75,fit=scale-down,height=580,width=696,metadata=copyright,format=webp/wp-content/uploads/2020/08/bloomscape_money-tree_detail.jpg?ver=279406",
      description:
        "The Money Tree has a distinctive braided trunk and a canopy of glossy, green leaves. The trunk is thick and often trained into intricate braided patterns, adding to its decorative appeal. The leaves are palmate, meaning they resemble a hand with multiple leaflets. They create a lush, full appearance that can vary in size depending on the age and care of the plant.",
      lighting:
        "Money Trees prefer bright, indirect light. They can tolerate lower light conditions but may have slower growth and less vibrant foliage. Avoid placing them in direct sunlight, as it can scorch the leaves. Placing them near a window with filtered light or providing them with bright artificial lighting can help maintain their health and appearance.",
      watering:
        "Money Trees have moderate watering needs. It's important to allow the top inch (2.5 cm) of soil to dry out between waterings before watering again. Overwatering can lead to root rot, so it's essential to ensure proper drainage and avoid waterlogged conditions. Adjust watering frequency based on the environmental conditions and the moisture needs of the plant.",
      price: 170.0,
    },
    {
      name: "Peace Lily",
      scientificName: "Spathiphyllum spp. 'sweet pablo'",
      image:
        "https://bloomscape.com/cdn-cgi/image/quality=75,fit=scale-down,height=922,width=768,metadata=copyright,format=webp/wp-content/uploads/2022/10/bloomscape_peace-lily6_md_charcoal.jpg",
      detailImage:
        "https://bloomscape.com/cdn-cgi/image/quality=75,fit=scale-down,height=580,width=696,metadata=copyright,format=webp/wp-content/uploads/2022/10/bloomscape_peace-lily6_md_detail-scaled.jpg?ver=955367",
      description:
        "Peace Lilies have dark green, glossy leaves that are lance-shaped and pointed. The leaves rise up from the soil in an upright manner, creating a graceful and compact foliage display. The plant also produces beautiful white flowers that resemble a peace flag, giving it its name. The flowers are often surrounded by a hood-like bract, adding to their visual appeal.",
      lighting:
        "Peace Lilies prefer bright, indirect light but can tolerate lower light conditions. Avoid placing them in direct sunlight, as it can scorch the leaves. They can be placed near a window with filtered light or in areas with artificial lighting. If the leaves start to yellow, it may indicate too much direct sunlight.",
      watering:
        "Peace Lilies have moderate watering needs. It's important to keep the soil evenly moist but not soggy. Allow the top inch (2.5 cm) of soil to dry out before watering again. Drooping leaves can indicate underwatering, while yellowing leaves can signal overwatering. Adjust the watering frequency based on the environmental conditions and the moisture needs of the plant.",
      price: 70.0,
    },
    {
      name: "Bird Of Paradise",
      scientificName: "Strelitzia nicolai",
      image:
        "https://bloomscape.com/cdn-cgi/image/quality=75,fit=scale-down,height=580,width=696,metadata=copyright,format=webp/wp-content/uploads/2020/08/bloomscape_bird-of-paradise_indigo.jpg?ver=279491",
      detailImage:
        "https://bloomscape.com/cdn-cgi/image/quality=75,fit=scale-down,height=580,width=696,metadata=copyright,format=webp/wp-content/uploads/2020/08/bloomscape_large_bird-of-paradise_detail_600x600.jpg?ver=282361",
      description:
        " Bird of Paradise plants feature large, glossy, banana-shaped leaves that grow in a fan-like arrangement. The leaves are typically deep green and can reach a considerable size, creating a bold and tropical foliage display. The most distinctive feature of the Bird of Paradise is its vibrant and striking flowers, which are composed of bright orange and blue petals that resemble a bird's beak and plumage.",
      lighting:
        "Bird of Paradise plants prefer bright, indirect sunlight to encourage healthy growth and vibrant blooms. They can tolerate some direct sunlight but should be protected from intense midday sun, which can scorch the leaves. Place them near a window with filtered light or provide artificial lighting if needed.",
      watering:
        "Bird of Paradise plants have moderate watering needs. It's important to keep the soil evenly moist but not waterlogged. Allow the top inch (2.5 cm) of soil to dry out before watering again. During the active growing season, they may require more frequent watering. However, reduce watering during the dormant period.",
      price: 200.0,
    },
  ];
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
