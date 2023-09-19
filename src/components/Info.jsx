import '../styles/Info.css';
import Image from '../images/teamwork.jpg';

const Info = () => {
    return (
        <div className="info-container">
            <h2 className="info-header">Share. Don't buy.</h2>
            <p className="art-paragraph"> Discover the greatness of art share.</p>
            <div className="image-container">
                <img src={Image} alt="teamwork" className="teamwork-image" />
            </div>
        </div>
    )
}

export default Info;