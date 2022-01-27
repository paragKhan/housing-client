import React from "react";
import styles from "./styles.module.css";

export default function HousingModelCard() {
  return (
    <div className={styles.card}>
      <img
        src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2020/12/25/907391-housing-pixabat.jpg"
        className="img-fluid"
      />
      <div className="mt-3 p-4">
        <h5>Model - 732 (A) & (B)</h5>
        <div className="d-flex justify-content-between">
          <div>
            <strong className="d-block">Bedroom</strong>
            <i className="fas fa-bed fs-5" />
            <span className="ms-3">3</span>
          </div>
          <div>
            <strong className="d-block">Bedroom</strong>
            <i className="fas fa-bed fs-5" />
            <span className="ms-3">3</span>
          </div>
          <div>
            <strong className="d-block">Bedroom</strong>
            <i className="fas fa-bed fs-5" />
            <span className="ms-3">3</span>
          </div>
        </div>
      </div>
    </div>
  );
}
