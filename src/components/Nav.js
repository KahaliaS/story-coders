import React from "react";
import logoImg from "./imgs/logo/4.png";
import logoText from "./imgs/logo/6.png";

export default function Nav() {
  return (
    <nav>
      <img src={logoImg} />
      <img src={logoText}/>
      <ul>
        <li>Login</li>
      </ul>
    </nav>
  );
}
