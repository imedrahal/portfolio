import "./intro.scss";
import Type from "../Type.jsx"
import me from "../../images/me.jpg";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={me} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Rahal Imed</h1>
          <h3>
            Freelance and full stack Javascript developer<div className="span"> 
              <Type/>
            </div>

          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}