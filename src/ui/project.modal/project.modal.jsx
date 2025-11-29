import "./project.modal.css";
import Movies from "../../assets/images/movies.png";
import { Link } from "react-router-dom";

function ProjectModal() {
    return (
        <div className="my_project">
           <Link to={"https://ndthah.vercel.app/"} className="project_link">
             <div className="project">
                <img src={Movies}></img>
                <p>A movie-streaming website offering a wide variety of exciting and high-quality films, updated continuously.</p>
            </div>
           </Link> 
        </div>
    )
}
export default ProjectModal;