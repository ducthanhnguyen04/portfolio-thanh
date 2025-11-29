import "./about.modal.css";
import Hacker from "../../assets/images/hacker.png";

function AboutModal() {
    return (
        <>
              <p className="about_content_p">Hello everyone, I'm Thanh. I am currently an international student majoring in Computer Science in Taiwan. This is my portfolio page—please feel free to take a look.</p>
              <div className="about_image">
                <img src={Hacker} style={{width: "50%", marginTop: "20px"}}></img>
              </div>
        </>
    )
}

export default AboutModal;