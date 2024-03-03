import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import "./Orders.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const Orders = () => {
  const [customerData, setCustomerData] = useState([]);

  // const handlePrint = () => {
  //   window.print();
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "customerinfo"));
        const data = [];

        querySnapshot.forEach((doc) => {
          data.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setCustomerData(data);
      } catch (error) {
        console.error("Error getting documents: ", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div className="orders">
      <div className="order-instances">
        <div className="receipt-frame">
          <div className="rectangle-receiver" />
          <div className="receipt">
            <div className="rectangle-parent">
              <div className="frame-child">
                <h2 className="receipt1">Orders List</h2>
                {/* Render customer data dynamically */}
                <div className="scrollable-container">
                  {customerData.map((customer) => (
                    <div key={customer.id}>
                      <p>Items in cart:</p>
                      <ul>
                        {customer.cart.map((item, index) => (
                          <li key={index}>{item.name} - {item.price.toFixed(2)}</li>
                        ))}
                      </ul>
                      <p>Phone number: {customer.phoneNumber}</p>
                      {/* Add more fields as needed */}
                    </div>
                  ))}
                </div>
                <div className="print-receipt-text1">
                  {/* <Button variant="contained" color="primary" onClick={handlePrint}>
                    Print Receipt
                  </Button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="delivery">
        <div className="ordersdeliver" />
        <div className="delivery-text">
          <h2 className="delivery-shipping">{`Delivery & Shipping`}</h2>
        </div>
        <div className="group-instances">
          <div className="no-of-orders">
            <div className="cart-item-rectangles">
              {/* <div className="feature-product-instance1" /> */}
              <div className="no-of-product">No of product deliver</div>
            </div>
            <div className="orders-deliver-rect">10</div>
          </div>
          <div className="no-of-products-delivered1">
            <div className="delivery-frame1" />
            <div className="print-receipt-text2">
              <div className="no-of-orders1">No of orders</div>
              <div className="div">20</div>
            </div>
            <div className="no-of-orders-frame">
              <div className="total-frame" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
