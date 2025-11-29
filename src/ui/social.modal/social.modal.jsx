import "./social.modal.css";
import { Link } from "react-router-dom";
import FaceBook from "../../assets/images/facebook.png";
import Instagram from "../../assets/images/instagram.png";
import Github from "../../assets/images/github .png";
import Line from "../../assets/images/line.png";


function SocialModal() {
    return (
       <div className="social">
            <Link to={"https://www.facebook.com/nguyen.duc.thanh.0810/"} className="social_link">
                <div className="social_item">
                    <img src={FaceBook}></img>
                    <h4>FaceBook</h4>
                </div>
            </Link>
             <Link to={"https://www.instagram.com/de.qing_/"} className="social_link">
                <div className="social_item">
                    <img src={Instagram}></img>
                    <h4>Instagram</h4>
                </div>
            </Link>
             <Link to={"https://github.com/ducthanhnguyen04"} className="social_link">
                <div className="social_item">
                    <img src={Github}></img>
                    <h4>Github</h4>
                </div>
            </Link>
             <Link to={"https://line.me/ti/p/JhHWg2jK9M"} className="social_link">
                <div className="social_item">
                    <img src={Line}></img>
                    <h4>Line</h4>
                </div>
            </Link>
        </div>
    )
}
export default SocialModal;