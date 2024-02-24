import React, { useState } from "react";
import { menu } from "../Data";

const Menu = ({ addToCart }) => {
  const names = [
    "Pineapple Upside-Down",
    "Chocolate Fudge Cake",
    "Simple Pineapple cake",
    "Marble Cake",
    "Coffee Cake",
    "Black Forest Cake"
  ];

  return (
    <section className="menu" id="menu">
      <h1 className="heading">
        our <span>menu</span>
      </h1>
      <div className="box-container">
       {menu.map((item, index) => (
      <div className="box" key={index}>
         <img src={item.img} alt="" />
         <h3>{names[index]}</h3>
        <div className="price">
           $15.99<span>20.99</span>
        </div>
        <button className="btn" onClick={() => {
           console.log("Adding to cart:", { ...item, name: names[index], price: 15.99 });
            addToCart({ ...item, name: names[index], price: 15.99 });
           }}>
           Add to Cart
        </button>
      </div>
        ))}
      </div>

    </section>
  );
};

export default Menu;
