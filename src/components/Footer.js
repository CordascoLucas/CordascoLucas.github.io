import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import getCurrentYear from "../utils/getCurrentYear";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
          <a href="https://www.linkedin.com/in/lucas-cordasco/" rel="noreferrer" target="_blank">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/CordascoLucas" rel="noreferrer" target="_blanket">
            <GithubIcon />
          </a>
      </div>
      <p> &copy; {getCurrentYear()} Lucas Emanuel Cordasco</p>
    </div>
  );
}

export default Footer;