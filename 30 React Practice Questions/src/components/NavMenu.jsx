import React, { useState } from "react";
import "./stylesheets/NavMenu.css";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglemenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="menu-icon" onClick={togglemenu}>
        ☰
      </button>
      <ul className={`menu ${isOpen?'open': 'close'}`}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Projects</li>
      </ul>
    </div>
  );
};

export default NavMenu;
