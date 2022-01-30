import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

export default function HousingModelCard() {
  return (
    <div className={styles.card}>
      <img
        src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2020/12/25/907391-housing-pixabat.jpg"
        className="img-fluid"
      />
      <div className="mt-3 px-4">
        <span className="lead">Model - 732 (A) & (B)</span>
        <div className="d-flex justify-content-between ">
          <div>
            <span className="d-block">Bedrooms</span>
            <i className="fas fa-bed fs-5" />
            <span className="ms-3">3</span>
          </div>
          <div>
            <span className="d-block">Washrooms</span>
            <i className="fas fa-bed fs-5" />
            <span className="ms-3">3</span>
          </div>
          <div>
            <span className="d-block">Area</span>
            <i className="fas fa-bed fs-5" />
            <span className="ms-3">3</span>
          </div>
        </div>
        <Link href="#">
          <a className="btn btn-sm btn-green mt-2">Read more</a>
        </Link>
      </div>
    </div>
  );
}
