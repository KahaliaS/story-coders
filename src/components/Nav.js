import React from "react";
import logoImg from "./imgs/logo/11.png";
import logoText from "./imgs/logo/10.png";

export default function Nav() {
  return (
    <nav>
      <div>
        <img src={logoImg} className="nav--logo" />
        <img src={logoText} className="nav--logo_text" />
      </div>

      {/* <h2 className="nav--logo_text"> &lt; <span>Story Coders</span> /&gt;  </h2> */}
      <ul className="nav--items">
        <li>Home</li>
        <li>Login</li>
        <li>Get Started</li>
      </ul>
    </nav>
  );
}
