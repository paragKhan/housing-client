import Link from "next/link";
import React from "react";

export default function HousingModelCard() {
  return (
    <div className="card border-0 card-shadow pb-2" style={{ maxWidth: 300 }}>
      <img
        src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2020/12/25/907391-housing-pixabat.jpg"
        className="img-fluid"
      />
      <div className="mt-3 px-4 color-dark">
        <h6 className="fw-bold">Model - 732 (A) & (B)</h6>
        <div className="d-flex justify-content-between ">
          <div>
            <small className="d-block fw-bold">Bedrooms</small>
            <i className="fas fa-bed fs-5 color-green" />
            <span className="ms-3">3</span>
          </div>
          <div>
            <small className="d-block fw-bold">Washrooms</small>
            <i className="fas fa-shower fs-5 color-green" />
            <span className="ms-3">3</span>
          </div>
          <div>
            <small className="d-block fw-bold">Area</small>
            <i className="fas fa-square fs-5 color-green" />
            <span className="ms-3">3</span>
          </div>
        </div>
        <Link href="/housing-models/1">
          <a className="btn btn-sm btn-green mt-3">Read more</a>
        </Link>
      </div>
    </div>
  );
}
