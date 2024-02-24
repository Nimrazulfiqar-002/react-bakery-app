import Orders from "../components/Orders";
import FeatureProduct from "../components/FeatureProduct";
import AdminNavbar from "../components/AdminNavbar";
import AdmiHeader from "../components/AdmiHeader";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <main className="about-with-form-wrapper">
        <section className="about-with-form">
          <img className="about-with-form-child" alt="" />
          <Orders />
          <FeatureProduct />
          <AdminNavbar />
          <AdmiHeader />
        </section>
      </main>
    </div>
  );
};

export default Home;
