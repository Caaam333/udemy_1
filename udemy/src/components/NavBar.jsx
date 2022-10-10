import React from "react";
// import { Link } from "react-scroll";
// import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  function myFunction() {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <div class="topnav" id="myTopnav">
      {/* <Link to="/">Home</Link> */}
      <a
        href="#home"
        className={(nav) => (nav.isActive ? "topnav active" : "topnav")}
      >
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fas fa-bars"></i>
      </a>
    </div>
  );
};

export default NavBar;
