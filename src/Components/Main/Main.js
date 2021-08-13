import "./Main.css";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import img1 from "./skanda.png";

function Main() {
  return (
    <div className="main-0">
      <p className="main-1">Hi I'm</p>
      <p className="main-2">Skanda Vyas Srinivasan</p>
      <div className="main-social ">
        <a className="main-3 content-anchor">
          <FaFacebookF style={{ width: "30px", height: "30px" }} />
        </a>
        <a className="main-4 content-anchor">
          <FaLinkedinIn style={{ width: "30px", height: "30px" }} />
        </a>
        <a className="main-5 content-anchor">
          <FaInstagram style={{ width: "30px", height: "30px" }} />
        </a>
      </div>
      {/* <div className="about-1">
    <h1 className="about-2">About Me</h1>
     <p className="about-q">“If I waited for perfection, I would never write a word.”<br/><span>-       Margaret Atwood</span></p><br/>
  
<p>
<span className="quote">Life wants us to touch, taste and see the grandeur of the world’s unfathomable variety.</span><br/></p><br/>

<p className="about-text">I am an aspiring STEM major, who pauses and observes 
the mechanics of things around me. I contribute in my own way 
to my friends and communities, always curious and try at a
 variety of activities with  success, shortcomings and 
 challenges. I am excited about math and science by forcing 
 me to challenge myself, and share ideas with friends and 
 teachers. I become peaceful when i am involved in one of 
 these  - math, soccer, punch boxing, teaching, theater ,
  robotics and designing games
</p>



<img src = {img1} className="about-image"></img>

    </div> */}
    </div>
  );
}

export default Main;
