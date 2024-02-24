import GroupComponent from "../components/GroupComponent";
import "./Adminportal.css";

const Adminportal = () => {
  return (
    <div className="adminportal">
      <main className="home-frame">
        <img className="home-img-1-icon" alt="" src="/homeimg-1@2x.png" />
        <section className="logo-rectangle" />
      </main>
      <div className="sub-frame-wrapper">
        <div className="sub-frame">
          <img
            className="logo-1-icon"
            loading="eager"
            alt=""
            src="/logo-11@2x.png"
          />
          <div className="admin-portal-text">
            <h1 className="admin-portal">
              <span> ADMIN PORTAL</span>
              <span className="span">{` `}</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="adminportal-inner">
        <GroupComponent />
      </div>
    </div>
  );
};

export default Adminportal;
