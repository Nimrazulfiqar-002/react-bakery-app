import { Button } from "@mui/material";
import "./Orders.css";

const Orders = () => {
   const handlePrint = () => {
      window.print();
    };
  return (
    <div className="orders">
      <div className="order-instances">
        <div className="receipt-frame">
          <div className="rectangle-receiver" />
          <div className="receipt">
            <div className="rectangle-parent">
              <div className="frame-child" />
              <h2 className="receipt1">Receipt</h2>
              <div className="delivery-frame-parent">
                <div className="delivery-frame">
                  <div className="chocolate-cake">Chocolate cake</div>
                  <div className="no-of-products-delivered">
                    <div className="shipping">{`Shipping: $5.0`}</div>
                  </div>
                </div>
                <div className="total-section">
                  <div className="cart-instances">
                    <div className="total">Total</div>
                    <div className="order-summary">
                      <div className="rectangle-vector">$15.0</div>
                    </div>
                  </div>
                  <div className="print-receipt-text1">
                    <Button variant="contained" color="primary" onClick={handlePrint}>
                      Print Receipt
                    </Button>
                  </div>
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
              <div className="feature-product-instance1" />
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
