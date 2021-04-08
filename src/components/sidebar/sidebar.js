import React from "react";
import People from "../../assets/images/People_icon.svg";
import Report from "../../assets/images/Report_icon.svg";
import Vehicles from "../../assets/images/Vehicles_icon.svg";
import logo from "../../assets/images/logo.png";

import styles from "./sidebar.module.scss";

//for review
const Sidebar = () => {
  const borderStyle = {
    borderLeftColor: "#4D7CFE",
    borderLeftStyle: "solid",
    borderLeftWidth: "2px",
  };
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__logo}>
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li className={styles.sidebar__majoritem}>
          <i className={styles.sidebar__avatar}>
            <img src={Vehicles} alt="Vehicles" />
          </i>
          <a href="/" className={styles.sidebar__links}>
            Vehicles
          </a>
        </li>
        <li className={styles.sidebar__majoritem} style={borderStyle}>
          <i className={styles.sidebar__avatar}>
            <img src={Report} alt="Report" />
          </i>
          <a href="/" className={styles.sidebar__links}>
            Report
          </a>
        </li>
        <li
          className={styles.sidebar__minoritem}
          style={{ background: "#F8FAFB" }}
        >
          <a href="/" className={styles.sidebar__links}>
            Operating Cost
          </a>
        </li>
        <li
          className={styles.sidebar__minoritem}
          style={{ background: "#F8FAFB" }}
        >
          <a href="/" className={styles.sidebar__links}>
            Fuel History
          </a>
        </li>
        <li className={styles.sidebar__minoritem}>
          <a href="/" className={styles.sidebar__links}>
            Total Cost
          </a>
        </li>
        <li className={styles.sidebar__minoritem}>
          <a href="/" className={styles.sidebar__links}>
            Cost/Meter
          </a>
        </li>
        <li className={styles.sidebar__minoritem}>
          <a href="/" className={styles.sidebar__links}>
            Expesne Summary
          </a>
        </li>
        <li className={styles.sidebar__minoritem}>
          <a href="/" className={styles.sidebar__links}>
            Utilization
          </a>
        </li>
        <li className={styles.sidebar__minoritem}>
          <a href="/" className={styles.sidebar__links}>
            Maintenance
          </a>
        </li>
        <li className={styles.sidebar__minoritem}>
          <a href="/" className={styles.sidebar__links}>
            Service
          </a>
        </li>
        <li className={styles.sidebar__majoritem}>
          <i className={styles.sidebar__avatar}>
            <img src={People} alt="People" />
          </i>
          <a href="/" className={styles.sidebar__links}>
            People
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
