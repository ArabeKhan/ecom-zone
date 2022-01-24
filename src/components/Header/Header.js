import React from "react";
import logo from "../../images/logo.png";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="" />
      <nav>
        <a href="/shop">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/manage">Manage Inventory</a>
      </nav>
    </div>
  );
}
