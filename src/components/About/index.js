import Navbar from "../Navbar";
import "./index.css";

const About = () => {
  return (
    <div className="about-container">
      <Navbar />
      <div className="about-description-container">
        <h1 className="about-us-text">About us</h1>
        <p className="about-description">
          Hello and welcome to Shoppy, the place to find the best products for
          every taste and occasion. We thoroughly check the quality of our
          goods, working only with reliable suppliers so that you only receive
          the best quality product.
        </p>
        <p className="about-description">
          We at Shoppy believe in high quality and exceptional customer service.
          But most importantly, we believe shopping is a right, not a luxury, so
          we strive to deliver the best products at the most affordable prices,
          and ship them to you regardless of where you are located.
        </p>
      </div>
    </div>
  );
};

export default About;
