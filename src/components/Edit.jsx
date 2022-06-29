import React from "react";
import styles from "../mystyle.module.css";
import bulbasaur from "../assets/bulbasaur.png";
function Edit() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow">
        <div className="container">
          <ul className="nav">
            <span>Detail Pokemon</span>
          </ul>
        </div>
      </nav>
      <div>
        <img src={bulbasaur} alt="" />
        <div className={styles.container}>
          <h2>Informasi Umum</h2>
          <label>Nomor</label>
          <br></br>
          <label>Nama</label>
        </div>
      </div>
    </div>
  );
}

export default Edit;
