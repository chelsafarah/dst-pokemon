import React from "react";
import logo from "../assets/pokemon.png";
import "../App.css";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow">
        <div className="container">
          <ul className="nav">
            <img src={logo} alt="" style={{ height: "40px" }} />
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
