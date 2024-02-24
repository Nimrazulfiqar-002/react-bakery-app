import "./AdmiHeader.css";

const AdmiHeader = () => {
  return (
    <div className="admiheader">
      <div className="admiheader1">
        <div className="textblog" />
        <img
          className="blog-1-1-icon"
          loading="eager"
          alt=""
          src="/blog1-1@2x.png"
        />
        <div className="groupwhat-makes-our-food-speci">
          <div className="textcommitment">
            <h2 className="what-makes-our">What Makes Our Food Special?</h2>
            <div className="every-slice-from">
              "Every Slice From Cake Bliss Embodies Our Commitment To
              Excellence.<br/>
              We Meticulously Select Premium Ingredients, Infusing
              Each Creation With Passion <br/>And Creativity. From The Delicate
              Layers To The Heavenly Frosting, Our Cakes Are<br/> Crafted To Delight
              Your Senses And Leave A Lasting Impression."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmiHeader;
