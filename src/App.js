import { useState } from 'react';
import './App.css';
import About from "../src/assets/images/id-card.png";
import Work from "../src/assets/images/working.png";
import Project from "../src/assets/images/project.png";
import Link from "../src/assets/images/http.png";
import Contact from "../src/assets/images/contact.png";
import Cv from "../src/assets/images/cv.png";
import Thanh from "../src/assets/images/thanh.png";



function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setIsModalContent] = useState('');

  const handleOpenModal = (content) => {
    console.log("open")
    setIsModalContent(content);
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="App">
     <div className='wrapper'>
      <div className='container'>
        <div className='title'>
          <div className='title_name'>
            <h1 className='hi'>Hi!</h1> 
            <h1 className='my_name'>I'm Deqing</h1>
          </div>
          <p className='greeting'>Welcome to my portfolio. Do you wanna know something about me?</p>
        </div>
        <hr className='hr'></hr>
        <div className='content'>
          <div className='menu'>
          <div className='menu_item' onClick={() => handleOpenModal('About content')}>
            <img src={About} className='menu_item_icon'></img>
            <p className='menu_item_title'>About</p>
          </div>
          <div className='menu_item' onClick={() => handleOpenModal('Work content')}>
            <img src={Work} className='menu_item_icon'></img>
            <p className='menu_item_title'>Work</p>
          </div>
          <div className='menu_item'>
            <img src={Project} className='menu_item_icon'></img>
            <p className='menu_item_title'>Project</p>
          </div>
          <div className='menu_item'>
            <img src={Link} className='menu_item_icon'></img>
            <p className='menu_item_title'>Links</p>
          </div>
          <div className='menu_item'>
            <img src={Contact} className='menu_item_icon'></img>
            <p className='menu_item_title'>Contact</p>
          </div>
          <div className='menu_item'>
            <img src={Cv} className='menu_item_icon'></img>
            <p className='menu_item_title'>My CV</p>
          </div>
        </div>
        </div>
      </div>
      <div className='avatar'>
        <img src={Thanh}></img>
      </div>
     </div>
     {isModalOpen && (
      <div className="modal_overlay" onClick={handleCloseModal}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <button className="close_btn" onClick={handleCloseModal}>×</button>
            <p>{modalContent}</p>
          </div>
        </div>
     )}
    </div>
  );
}

export default App;
