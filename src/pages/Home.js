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
import Tooltip from '@mui/material/Tooltip';
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
              <Tooltip title="HTML" placement="top-start">
                <span>
                  <SiHtml5 className="item-skill" color="#e34c26"/>
                </span> 
              </Tooltip>
              <Tooltip title="CSS" placement="top-start">
                <span>
                  <SiCss3 className="item-skill" color="#264de4"/> 
                </span>
              </Tooltip>
              <Tooltip title="BOOTSTRAP" placement="top-start">
                <span>
                  <SiBootstrap className="item-skill" color="#563d7c"/> 
                </span>
              </Tooltip>
              <Tooltip title="JQUERY" placement="top-start">
                <span>
                  <SiJquery className="item-skill" color="#0769ad"/> 
                </span>
              </Tooltip>
              <Tooltip title="REACT" placement="top-start">
                <span>
                  <FaReact className="item-skill" color="#61DBFB"/>
                </span>
              </Tooltip>
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span className="backend-items">
              <Tooltip title="LARAVEL" placement="top-start">
                <span>
                  <FaLaravel className="item-skill" color="#F05340"/>
                </span>
              </Tooltip>
              <Tooltip title="LUMEN" placement="top-start">
                <span>
                  <SiLumen className="item-skill" color="#F05340"/>
                </span>
              </Tooltip>
              <Tooltip title="YII2" placement="top-start">
                <span> 
                  <DiYii className="item-skill" color="#3B6FBA"/>
                </span>
              </Tooltip>
              <Tooltip title="PRESTASHOP" placement="top-start">
                <span>
                  <SiPrestashop className="item-skill" color="#68737F"/>
                </span>
              </Tooltip>
              <Tooltip title="NODEJS" placement="top-start">
                <span>
                  <FaNodeJs className="item-skill" color="#68a063"/>
                </span>
              </Tooltip>
              <Tooltip title="NESTJS" placement="top-start">
                <span>
                  <SiNestjs className="item-skill" color="#E0234E"/>
                </span>
              </Tooltip>
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span className="lenguages-items">
              <Tooltip title="PHP" placement="top-start">
                <span>
                  <SiPhp className="item-skill" color="#787CB5"/> 
                </span>
              </Tooltip>
              <Tooltip title="JAVASCRIPT" placement="top-start">
                <span>              
                  <SiJavascript className="item-skill" color="#F0DB4F"/>
                </span>
              </Tooltip>
              <Tooltip title="PYTHON" placement="top-start">
                <span>
                  <SiPython className="item-skill" color="#306998"/> 
                </span>
              </Tooltip>
              <Tooltip title="GOLANG" placement="top-start">
                <span>
                  <SiGoland className="item-skill" color="#4DD0E1"/>
                </span>
              </Tooltip>
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
