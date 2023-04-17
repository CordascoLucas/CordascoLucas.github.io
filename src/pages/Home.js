import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import { FaLaravel, FaNodeJs, FaReact } from "react-icons/fa";
import { 
  SiPhp,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJquery,
  SiLumen,
  SiPrestashop,
  SiPython,
  SiGoland,
  SiNestjs
} from "react-icons/si";
import { DiYii } from 'react-icons/di';
import { RiArrowDownSLine } from'react-icons/ri';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Lucas</h2>
        <div className="prompt">
          <p>A Full Stack Developer</p>
          <a href="https://www.linkedin.com/in/lucas-cordasco/" rel="noreferrer" target="_blank">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/CordascoLucas" rel="noreferrer" target="_blanket">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="arrow-to-skills">
        <a href="#skills-home">
          < RiArrowDownSLine class="arrow" color="#fff"/>
        </a>
      </div>
      <div className="skills" id="skills-home">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span className="frontend-items">
              < SiHtml5 className="item-skill" color="#e34c26"/> 
              < SiCss3 className="item-skill" color="#264de4"/> 
              < SiBootstrap className="item-skill" color="#563d7c"/> 
              < SiJquery className="item-skill" color="#0769ad"/> 
              < FaReact className="item-skill" color="#61DBFB"/>
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span className="backend-items">
              < FaLaravel className="item-skill" color="#F05340"/> 
              < SiLumen className="item-skill" color="#F05340"/> 
              < DiYii className="item-skill" color="#3B6FBA"/> 
              < SiPrestashop className="item-skill" color="#68737F"/> 
              < FaNodeJs className="item-skill" color="#68a063"/>
              < SiNestjs className="item-skill" color="#E0234E"/>
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span className="lenguages-imtes">
                < SiPhp className="item-skill" color="#787CB5"/> 
                < SiJavascript className="item-skill" color="#F0DB4F"/> 
                < SiPython className="item-skill" color="#306998"/> 
                < SiGoland className="item-skill" color="#4DD0E1"/>
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;