import "../styles/Home.css";
import NavBar from "./NavBar";
import Info from "./Info";
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import Image from "../images/art.png";


const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="art-wheel-bio">
        <h1 className="bio-header">We believe art should be shared. </h1>
        <p className="bio-paragraph">
          ART WHEEL lets you share your artwork and find art to display{" "}
        </p>
        <div className="btn-container">
      <div className="download-buttons">
        <button className="download-button"><BsApple /> <span className="button-txt">App Store</span></button>
        <button className="download-button">< FaGooglePlay /><span className="button-txt">Google Play</span></button>
      </div>
      </div>
      <div className="home-img-container">
        <img src={Image} alt="making art" className="art-img" />
      </div>
      </div>
      <div className="art-wheel-info">
        <Info />
      </div>
    </div>
  );
};

export default Home;
