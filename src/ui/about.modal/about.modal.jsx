import "./about.modal.css";
import Hacker from "../../assets/images/hacker.png";

function AboutModal() {
    return (
        <>
              <p style={{color: 'black'}}>Hello everyone, I'm Thanh. I am currently an international student majoring in Computer Science in Taiwan. This is my portfolio page—please feel free to take a look.</p>
              <img src={Hacker} style={{width: "50%", marginTop: "20px"}}></img>
        </>
    )
}

export default AboutModal;