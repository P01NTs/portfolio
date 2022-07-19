import React from "react";
import CTA from "./CTA";
function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h2>Boutarfa Mohamed Wassim</h2>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
      </div>
    </header>
  );
}

export default Header;
