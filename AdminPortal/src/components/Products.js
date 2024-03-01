import React from 'react';
import * as Data from "../Data";

const Products = () => {
  const names = [
    "Black Forest Cake",
    "Coconut Cream Cake",
    "Coconut Cream Cake",
    
  ];

  return (
    <>
      <section className="products" id="products">
        <h1 className="heading">
          our <span>products</span>
        </h1>

        <div className="box-container">
          {Data.product.map((item, index) => (
            <div className="box" key={index}>
              <div className="icons">
                <a href="#" className="fas fa-shopping-cart"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
              <div className="image">
                <img src={item.img} alt="" />
              </div>
              <div className="content">
                {/* Use the corresponding name from the names array */}
                <h3>{names[index]}</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price">
                  {item.price} 
                  RS 1200 <span>RS 1500</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
