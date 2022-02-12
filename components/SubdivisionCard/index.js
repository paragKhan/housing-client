import Link from "next/link";
import React from "react";

export default function SubdivisionCard({ subdivision }) {
  return (
    <div className="card border-0 card-shadow pb-2" style={{ maxWidth: 300 }}>
      <img height={200} src={process.env.IMAGE_URL + subdivision.photo} />
      <div className="mt-3 px-4 color-dark">
        <h6 className="fw-bold">{subdivision.heading}</h6>
        <div className="small mb-2">
          <i className="color-green fas fa-map-marker-alt me-2 " />
          <span className="color-green fw-bold">Location:</span>
          <span className="color-green ms-2">{subdivision.location}</span>
        </div>
        <Link href={`/subdivisions/${subdivision.id}`}>
          <a className="btn btn-sm btn-green">Read more</a>
        </Link>
      </div>
    </div>
  );
}