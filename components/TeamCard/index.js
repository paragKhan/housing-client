import React from "react";
import styles from "./styles.module.css";

export default function TeamCard() {
  return (
    <div className={styles.card}>
      <img className={styles.img} src="/img/person.png" alt="" />
      <div className={styles.content}>
        <h5>Melissa William</h5>
        <p>Department Head</p>
        <span>
          <i className="fab fa-linkedin fs-3 m-2" />
          <i className="fab fa-linkedin fs-3 m-2" />
          <i className="fab fa-linkedin fs-3 m-2" />
        </span>
      </div>
    </div>
  );
}
