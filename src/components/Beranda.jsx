import React from "react";
import bulbasaur from "../assets/bulbasaur.png";
import ivysaur from "../assets/ivysaur.png";
import styles from "../mystyle.module.css";
import Edit from "./Edit";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Beranda() {
  const mystyle = {
    margin: "25px",
    padding: "10px",
    fontFamily: "Arial",
    width: "18rem",
  };

  const image = {
    width: "164.74px",
    height: "153.54px",
  };

  return (
    <div style={{ margin: "25px 50px", display: "flex" }}>
      <Link to="/edit">
        <div className={styles.box}>
          <div>
            <h5 className="card-title text-muted" style={{ textAlign: "left" }}>
              #001
            </h5>
            <img src={bulbasaur} alt="" style={{ image }} />
            <h6 className={styles.titleName}>Bulbasaur</h6>
            <div style={{ color: "white" }}>
              <span className={styles.types} style={{ backgroundColor: "#8BC34A" }}>
                Grass
              </span>
              <span className={styles.types} style={{ backgroundColor: "#AA22B0" }}>
                Poison
              </span>
            </div>
          </div>
        </div>
      </Link>
      <div className={styles.box}>
        <div>
          <h5 className="card-title text-muted" style={{ textAlign: "left" }}>
            #001
          </h5>
          <img src={ivysaur} alt="" style={{ image }} />
          <h6 className={styles.titleName}>Ivysaur</h6>
          <div style={{ color: "white" }}>
            <span className={styles.types} style={{ backgroundColor: "#8BC34A" }}>
              Grass
            </span>
            <span className={styles.types} style={{ backgroundColor: "#AA22B0" }}>
              Poison
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beranda;
