import "./Main.css";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import img1 from "./skanda.png";

function Main() {
  return (
    <div className="main-0">
      <div className="main-head">
        <h3 className="main-1">Hi I'm</h3>
        <h3 className="main-2">Skanda Vyas Srinivasan</h3>
      </div>
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
    </div>
  );
}

export default Main;
