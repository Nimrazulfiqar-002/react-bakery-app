import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminNavbar.css";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="adminnavbar">
      <div className="logout-button" />
      <div className="logout-btn">
        <div className="rectanglelogout-parent" onClick={onGroupContainerClick}>
          <div className="rectanglelogout" />
          <div className="logout">LogOut</div>
        </div>
        <div className="grouplogo">
          <img
            className="logo-1-icon1"
            loading="eager"
            alt=""
            src="/logo-1@2x.png"
          />
        </div>
      </div>
      <div className="frameheader">
        <div className="home-frame-parent">
          <div className="home-frame1">
            <div className="home1">Home</div>
          </div>
          <div className="feature-products-frame">
            <div className="feature-products1">Feature Products</div>
            <div className="groupproduct">
              <div className="orders1">Orders</div>
            </div>
          </div>
          <div className="legal-notice">Legal Notice</div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
