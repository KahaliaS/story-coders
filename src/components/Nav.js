import React from "react";
import logoImg from "./imgs/logo/4.png";
import logoText from "./imgs/logo/6.png";


export default function Nav() {
  return (
    <nav>
      <img src={logoImg} className="logo--image" />
      <img src={logoText} className="logo-text" />
      <ul>
        <li>Login</li>
      </ul>
    </nav>
  );
}
