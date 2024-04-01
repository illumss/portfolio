import { FaLinkedin, FaPinterest, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="socials-title">Check out my socials!</h3>

      <div className="socials-icons">
        <Link to="https://www.linkedin.com/in/alberteillum" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icons" />
        </Link>
        <Link to="https://github.com/illumss" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icons" />
        </Link>
        <Link to="https://dk.pinterest.com/illumalberte/" target="_blank" rel="noopener noreferrer">
          <FaPinterest className="icons" />
        </Link>
      </div>

      <div className="nav-list">
        <a href="/about">About</a>
        <a href="/">Portfolio</a>
        <a href="/contact">Contact</a>
      </div>

      <div className="project-list">
        <a href="/asianfoodclub">Asian Food Club</a>
        <a href="/markblomst">Markblomst</a>
        <a href="/internship">Graphic Design Intern</a>
      </div>

      <div className="copyright">
        <p>COPYRIGHT &copy; 2024; PORTFOLIO BY ALBERTE ILLUM</p>
      </div>
    </footer>
  );
}

export default Footer;
