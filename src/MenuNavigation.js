import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom if using routing
import "./index.css";

const MenuNavigation = () => {
  return (
    <nav style={{ borderBottom: "1px solid black" }}>
      <ul>
        <li>
          <Link to="/menu/appetizers">Aperitive</Link>
        </li>
        <li>
          <Link to="/menu/soups">Supe si Ciorbe</Link>
        </li>
        <li>
          <Link to="/menu/salads">Salate</Link>
        </li>
        <li>
          <Link to="/menu/main-courses">Feluri Principale</Link>
        </li>
        <li>
          <Link to="/menu/sides">Garnituri</Link>
        </li>
        <li>
          <Link to="/menu/drinks">Bauturi</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuNavigation;
