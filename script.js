import React from "react";
import ReactDOM from "react-dom/client";

/* ---------- Food Card Component ---------- */
const FoodTemplate = ({ name, cuisines, avgRating, imageId, cloudinaryBaseUrl }) => {
  return (
    <div className="restaurantCard">
      <img src={cloudinaryBaseUrl + imageId} alt={name} />
      <h3>{name}</h3>
      <h3>Cuisine: {cuisines.join(", ")}</h3>
      <h4>Rating: {avgRating}</h4>
    </div>
  );
};

/* ---------- Restaurant Data ---------- */
const restaurantList = [
  {
    id: "1003414",
    name: "Pizza Hut",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/bd7954b5-a431-4726-b2da-4670ceba472d_1003414.JPG",
    cuisines: ["Pizzas"],
    avgRating: 4.3,
  },
  {
    id: "150602",
    name: "Raimens Cafe 79",
    cloudinaryImageId: "eohdm5sdnq6e2u46xeux",
    cuisines: ["Bakery", "Pizzas", "Snacks", "Beverages"],
    avgRating: 4.4,
  },
  {
    id: "151656",
    name: "Dev International",
    cloudinaryImageId: "enj3srsnhbltbom2ovvh",
    cuisines: ["Chinese", "Fast Food", "Beverages"],
    avgRating: 4.2,
  },
  {
    id: "912754",
    name: "Urban Cafe",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/21/dbe91f1f-b400-4f4b-a78d-c6b99bdc61c5_912754.JPG",
    cuisines: ["Snacks", "Pizzas", "Pastas", "Fast Food", "Burgers", "Cafe"],
    avgRating: 4.1,
  },
  {
    id: "151649",
    name: "Hotel Sai Nath & Sai Restaurant",
    cloudinaryImageId: "vkhcohhmqfczycw9vsar",
    cuisines: [
      "North Indian",
      "South Indian",
      "Chinese",
      "Beverages",
      "Fast Food",
      "Desserts",
    ],
    avgRating: 4.3,
  },
  {
    id: "234875",
    name: "Adil Hotel",
    cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
    cuisines: ["Biryani", "Tandoor"],
    avgRating: 4.4,
  },
  {
    id: "151518",
    name: "Bakery World",
    cloudinaryImageId: "mt2aggiscfl3yviatwng",
    cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
    avgRating: 4.3,
  },
  {
    id: "1209158",
    name: "Trio Cafe",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/19/e4cb0c0c-1a8d-471e-b354-c98880f73389_1209158.jpg",
    cuisines: ["Cafe"],
    avgRating: 3.3,
  },
];

/* ---------- Constants ---------- */
const cloudinaryBaseUrl =
  "https://media-assets.swiggy.com/swiggy/image/upload/";

/* ---------- Main Body Component ---------- */
const Body = () => {
  return (
    <div className="container">
      {restaurantList.map((item) => (
        <FoodTemplate
          key={item.id}
          name={item.name}
          cuisines={item.cuisines}
          avgRating={item.avgRating}
          imageId={item.cloudinaryImageId}
          cloudinaryBaseUrl={cloudinaryBaseUrl}
        />
      ))}
    </div>
  );
};

/* ---------- Render ---------- */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body />);
