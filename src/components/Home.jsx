import "../styles/Home.css";
import Info from "./Info";
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import Image from "../images/art.png";

const Home = () => {
  
  const appStoreUrl = "https://apps.apple.com/us/app/art-wheel/id1580919198";
  const googlePlayUrl = "https://play.google.com/store/apps/details?id=com.artwheel";

  return (
    <div>
      <div className="art-wheel-bio">
        <h1 className="bio-header">We believe art should be shared. </h1>
        <p className="bio-paragraph">
          Share your artwork locally and find new art to display{" "}
        </p>
        <div className="btn-container">
        <div className="download-buttons">
                        <a href={appStoreUrl} className="download-button">
                            <BsApple /> <span className="button-txt">App Store</span>
                        </a>
                        <a href={googlePlayUrl} className="download-button">
                            <FaGooglePlay /><span className="button-txt">Google Play</span>
                        </a>
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
