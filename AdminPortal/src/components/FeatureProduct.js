import "./FeatureProduct.css";

const FeatureProduct = () => {
  return (
    <div className="featureproduct">
      <div className="cartitem-rectangle" />
      <div className="product-feature-group">
        <h2 className="feature-products">{`Feature Products `}</h2>
      </div>
      <div className="group">
        <div className="group-inner">
          <div className="frame-parent">
            <div className="pineapple-upside-down-text-wrapper">
              <div className="pineapple-upside-down-text">
                <div className="rectangle-cartitem">
                  <div className="simple-pineapple-cake-rect">
                    <div className="coffee-cake-text" />
                    <img
                      className="cart-item-1-2-icon"
                      loading="eager"
                      alt=""
                      src="/cartitem1-2@2x.png"
                    />
                  </div>
                </div>
                <b className="pineapple-upside-down-1599-container">
                  <p className="pineapple-upside-down">Pineapple Upside-Down</p>
                  <p className="p"> $15.99</p>
                </b>
              </div>
            </div>
            <div className="upside-down-item">
              <div className="simple-cake-rect-parent">
                <div className="simple-cake-rect">
                  <img
                    className="cart-item-2-icon"
                    loading="eager"
                    alt=""
                    src="/cartitem2@2x.png"
                  />
                </div>
                <b className="chocolate-fudge-cake-container">
                  <span>
                    <p className="chocolate-fudge-cake">{`Chocolate Fudge Cake `}</p>
                    <p className="p1"> $15.99</p>
                  </span>
                </b>
              </div>
            </div>
            <div className="item-vector">
              <img
                className="cart-item-3-icon"
                loading="eager"
                alt=""
                src="/cartitem3@2x.png"
              />
              <div className="vector-parent">
                <img className="frame-item" alt="" src="/rectangle-19.svg" />
                <b className="simple-pineapple-cake-container">
                  <span>
                    <p className="simple-pineapple-cake">{`Simple Pineapple Cake                   `}</p>
                    <p className="p2"> $15.99</p>
                  </span>
                </b>
              </div>
            </div>
            <div className="feature-group">
              <div className="cart-item-thumb">
                <div className="product-rectangle">
                  <div className="item-frame">
                    <div className="order-details" />
                    <img
                      className="cart-item-4-icon"
                      loading="eager"
                      alt=""
                      src="/cartitem4@2x.png"
                    />
                  </div>
                </div>
                <b className="coffee-cake-1599-container">
                  <p className="coffee-cake">{`Coffee Cake `}</p>
                  <p className="p3"> $15.99</p>
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
