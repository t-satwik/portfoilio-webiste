import "../index.css";
import { HashLink as Link } from "react-router-hash-link";
import Button from "./Button";
import about from "../images/about.png";
import education from "../images/education.png";
import experience from "../images/experience.png";
import projects from "../images/projects.png";
import contact from "../images/contact.png";

export default function NavBar(props) {
  return (
    <div className="navbar-bg">
      <div className="navbar">
        <h1 className="h1-bold">T Satwik</h1>
        <div className="navbar-buttons">
          <Link to="#about" className="btn-text">
            <Button
              variant={props.active === "about" ? "navbar-active" : "navbar"}
              icon={about}
              text="About"
            />
          </Link>
          <Link to="#education" className="btn-text">
            <Button
              variant={
                props.active === "education" ? "navbar-active" : "navbar"
              }
              icon={education}
              text="Education"
            />
          </Link>
          <Link to="#experience" className="btn-text">
            <Button
              variant={
                props.active === "experience" ? "navbar-active" : "navbar"
              }
              icon={experience}
              text="Experience"
            />
          </Link>
          <Link to="#projects" className="btn-text">
            <Button
              variant={props.active === "projects" ? "navbar-active" : "navbar"}
              icon={projects}
              text="Projects"
            />
          </Link>
          <Link to="#contact" className="btn-text">
            <Button
              variant={props.active === "contact" ? "navbar-active" : "navbar"}
              icon={contact}
              text="Contact"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
