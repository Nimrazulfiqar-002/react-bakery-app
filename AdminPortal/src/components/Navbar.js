import React, { useRef,  } from "react";
import Logo from "../assets/images/logo.png";

const Navbar = ({ cart, removeFromCart }) => {
 
  const navbarRef = useRef();
  const searchRef = useRef();
  const cartRef = useRef(); 

  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };

  const searchHandler = () => {
    if (searchRef.current){
      searchRef.current.classList.toggle("active");
    }
    if(navbarRef.current){
    navbarRef.current.classList.remove("active");
    }
    if(cartRef.current){
    cartRef.current.classList.remove("active");
    }
  };

  const cartHandler = () => {
    if (cartRef.current) {
      cartRef.current.classList.toggle("active");
    }
    if (searchRef.current) {
      searchRef.current.classList.remove("active");
    }
    if (navbarRef.current) {
      navbarRef.current.classList.remove("active");
    }
    };
  
  const names = [
    "Pineapple Upside-Down",
    "Chocolate Fudge Cake",
    "Simple Pineapple cake",
    "Marble Cake",
    "Coffee Cake",
    "Black Forest Cake"
  ];
  const handleCheckoutClick = () => {
    // Show alert when the button is clicked
    alert('We will confirm your order by call.');
    // You can also perform additional actions, like making an API call to confirm the order.
  };
  return (
    <header className="header">
      <a href="#" className="logo">
        <img src={Logo} alt="" />
      </a>
      <nav className="navbar" ref={navbarRef}>
        <a href="#HomeUser">HomeUser</a>
        <a href="#about">about</a>
        <a href="#menu">menu</a>
        <a href="#products">products</a>
        <a href="#review">review</a>
        <a href="#contact">contact</a>
        <a href="#blogs">blogs</a>
        <a href="#admin">Adminportal</a>
      </nav>
      <div className="icons">
        <div className="fas fa-search" id="search-btn" onClick={searchHandler}></div>
        <div className="fas fa-shopping-cart" id="cart-btn" onClick={cartHandler}></div>
        <div className="fas fa-bars" id="menu-btn" onClick={navbarHandler}></div>
      </div>
      <div className="cart-items-container" ref={cartRef}>
        {cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <span className="fas fa-times" onClick={() => removeFromCart(index)}></span>
            <img src={item.img} alt="" />
            {/* <div className="content">
              <h3>cart item 01</h3>
              <div className="price">$15.99/-</div>
            </div> */}
            <div className="cart">
              <h2>Shopping Cart</h2>
               <div className="content">
                  {cart.map((cartItem, index) => (
                  <div className="content" key={index}>
                     <h3>{cartItem.name}</h3>
                      <div className="price">
                        {cartItem.price ? `$${cartItem.price.toFixed(2)}` : 'Price not available'}
                      </div>
                  </div>
                   ))}
                 </div>
    
                <div className="total">
                 <h3>Total Price:</h3>
                   <div className="price">
                    {cart.reduce((total, cartItem) => total + (cartItem.price || 0), 0).toFixed(2)}
                   </div>
                 </div>
            </div>

{/*  */}
          </div>
        ))}
        
        
        <button className="btn" onClick={handleCheckoutClick}> checkout now</button>
      </div>

    </header>
  );
};

export default Navbar;
