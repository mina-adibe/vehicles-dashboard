import React from "react";
import styles from "./navbar.module.scss";
import logo from "../../assets/images/navbar_avatar.png";

const Navbar = () => {
  return (
    <>
      <div className={styles.maindiv}>
        <div>
          <h1 className={styles.h1}>PLN Asset Management System</h1>
        </div>
        <div>
          <img alt="avatar" src={logo} className={styles.avatar} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
