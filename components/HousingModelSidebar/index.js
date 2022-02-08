import Link from "next/link";
import React from "react";

export default function HousingModelSidebar() {
  return (
    <div className="card card-shadow">
      <div className="card-header bg-green text-center">
        <h6 className="text-white">Housing Models</h6>
      </div>
      <div className="card-body">
        <Link href="/housing-models/1">
          <a className="d-block py-1">
            <strong>Model 732(A)</strong>
            <br />
            <small>2 Bedrooms, 1 Bath, 882 Sq. Ft.</small>
          </a>
        </Link>
        <Link href="/housing-models/1">
          <a className="d-block py-1">
            <strong>Model 732(A)</strong>
            <br />
            <small>2 Bedrooms, 1 Bath, 882 Sq. Ft.</small>
          </a>
        </Link>
        <Link href="/housing-models/1">
          <a className="d-block py-1">
            <strong>Model 732(A)</strong>
            <br />
            <small>2 Bedrooms, 1 Bath, 882 Sq. Ft.</small>
          </a>
        </Link>
        <Link href="/housing-models/1">
          <a className="d-block py-1">
            <strong>Model 732(A)</strong>
            <br />
            <small>2 Bedrooms, 1 Bath, 882 Sq. Ft.</small>
          </a>
        </Link>
        <Link href="/housing-models/1">
          <a className="d-block py-1">
            <strong>Model 732(A)</strong>
            <br />
            <small>2 Bedrooms, 1 Bath, 882 Sq. Ft.</small>
          </a>
        </Link>
        <Link href="/housing-models/1">
          <a className="d-block py-1">
            <strong>Model 732(A)</strong>
            <br />
            <small>2 Bedrooms, 1 Bath, 882 Sq. Ft.</small>
          </a>
        </Link>
        <Link href="/housing-models/1">
          <a className="d-block py-1">
            <strong>Model 732(A)</strong>
            <br />
            <small>2 Bedrooms, 1 Bath, 882 Sq. Ft.</small>
          </a>
        </Link>
      </div>
    </div>
  );
}
