import Image from '../images/community.png'
import '../styles/About.css'

const About = () => {
    return (
        <div className="about-container">
            <div className="bio-container">
                <h1 className="about-header">About Us</h1>
                <p classname="about-paragraph">We are Truckee community members who want to make sharing and displaying art accessible for everyone.</p>
            </div>
            <div className="community-img-container">
                <img src={Image} alt="community" className="community-img" />
            </div>
        </div>
    )
}

export default About;