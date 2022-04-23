import Link from "next/link";
import React from "react";

export default function HousingModelCard({ data = {} }) {
  return (
    <div className="card border-0 card-shadow pb-2" style={{ maxWidth: 300 }}>
      <img height={200} src={data.master_plan.thumb} />
      <div className="mt-3 px-4 color-dark">
        <h6 className="fw-bold">{data.heading}</h6>
        <div className="d-flex justify-content-between ">
          {data.bedrooms && (
            <div>
              <i className="fas fa-bed fs-5 color-green" />
              <span className="ms-1">{data.bedrooms}</span>
            </div>
          )}
          {data.bathrooms && (
            <div>
              <i className="fas fa-shower fs-5 color-green" />
              <span className="ms-1">{data.bathrooms}</span>
            </div>
          )}
          {data.width && (
            <div>
              <i className="fas fa-square fs-5 color-green" />
              <span className="ms-1">{data.width} SqFt.</span>
            </div>
          )}
        </div>
        <Link href={`/housing-models/${data.id}`}>
          <a className="btn btn-sm btn-green mt-3">Read more</a>
        </Link>
      </div>
    </div>
  );
}
