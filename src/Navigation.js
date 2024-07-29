import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom if using routing
import "./index.css";

const Navigation = () => {
  return (
    <nav style={{ borderBottom: "1px solid black" }}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link> {/* Use meaningful paths */}
        </li>
        <li>
          <Link to="/menu">Menu</Link> {/* Use lowercase paths */}
        </li>
        <li>
          <Link to="/order-now">Order Now!</Link>{" "}
          {/* Use hyphens for multi-word paths */}
        </li>
        <li>
          <Link to="/social-media">Social Media</Link>{" "}
          {/* Use lowercase paths */}
        </li>
        <li>
          <Link to="/contact">Contact</Link> {/* Use lowercase paths */}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
