import React from "react";
import styles from "../mystyle.module.css";
import bulbasaur from "../assets/bulbasaur.png";
function Edit() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow" style={styles.navbar}>
        <div className="container">
          <ul className="nav">
            <span>Detail Pokemon</span>
          </ul>
        </div>
      </nav>
      <div>
        <img src={bulbasaur} alt="" />
      </div>
    </div>
  );
}

export default Edit;
