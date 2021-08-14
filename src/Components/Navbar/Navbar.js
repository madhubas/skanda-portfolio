import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [pos, setPos] = useState("top");

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 10) {
        setPos("moved");
      } else {
        setPos("top");
      }
    });
  }, []);

  var toggleMenu = () => {
    const menuToggle = document.querySelector(".toggle");
    const navigation = document.querySelector(".navigation");
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
  };
  return (
    <div>
      <div id="header-top">
        <header
          style={{
            boxShadow:
              pos === "top"
                ? "none"
                : " 1px 10px 58px -13px rgba(0, 0, 0, 0.75)",
            backgroundColor: pos === "top" ? "transparent" : "#000",
          }}
        >
          <p className="skv">SKV</p>

          <ul className="navigation">
            <li>
              <a href="#" onClick={toggleMenu}>
                Home
              </a>{" "}
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About Me
              </a>{" "}
            </li>
            <li>
              <a href="#communityservice" onClick={toggleMenu}>
                Community service
              </a>{" "}
            </li>
            <li>
              <a href="#research" onClick={toggleMenu}>
                Research
              </a>{" "}
            </li>
            <li>
              <a href="#internship" onClick={toggleMenu}>
                Internship
              </a>{" "}
            </li>
          </ul>
          <button className="btn">Resume</button>
          <div className="toggle" onClick={toggleMenu}></div>
        </header>
      </div>
    </div>
  );
};
export default Navbar;
