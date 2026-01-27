import React from "react";
import ReactDOM from "react-dom/client";

const FoodTemplate =()=>{
    return(
        <div className="restaurantCard">
            <img src="https://imgs.search.brave.com/pBuyL8sW5UDk43BZrHvFFDWI0KITP0fimhJC3lfsLJA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9taXgtZm9v/ZC1hc3NvcnRlZC10/YWJsZS0yNjBudy0y/NTAzMTkwOTk3Lmpw/Zw"></img>
            <h3>restaurant Name</h3>
            <h3>Cuisine: indian food</h3>
            <h4>Rating: 4.2</h4>
        </div>
    )
}

const Body = () =>{
    return(
        <div className="container">
            <FoodTemplate></FoodTemplate>
            <FoodTemplate></FoodTemplate>
            <FoodTemplate></FoodTemplate>      
            <FoodTemplate></FoodTemplate>
            <FoodTemplate></FoodTemplate>
            <FoodTemplate></FoodTemplate>

        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body />);