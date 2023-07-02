import React from "react";
import { Link } from "react-router-dom";
import logoImg from "./imgs/logo/11.png";
import logoText from "./imgs/logo/10.png";

export default function Nav() {
  // const { pathname } = useLocation();
  return (
    <nav>
      <div>
        <img src={logoImg} className="nav--logo" />
        <img src={logoText} className="nav--logo_text" />
      </div>

      {/* <h2 className="nav--logo_text"> &lt; <span>Story Coders</span> /&gt;  </h2> */}
      <ul className="nav--items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li><Link to="/login">Login</Link></li>
        <li>Get Started</li>
      </ul>
    </nav>
  );
}
