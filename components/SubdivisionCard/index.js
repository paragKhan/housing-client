import Link from "next/link";
import React from "react";

export default function SubdivisionCard({ subdivision }) {
  return (
    <div className="card border-0 card-shadow pb-2" style={{ maxWidth: 300 }}>
      <img height={200} src={process.env.IMAGE_URL + subdivision.photo} />
      <div className="mt-3 px-4 color-dark">
        <h6 className="fw-bold">{subdivision.heading}</h6>
        <p className="small">
          {subdivision.description.length < 50
            ? subdivision.description
            : subdivision.description.substring(0, 50) + "..."}
        </p>
        <Link href={`/subdivisions/${subdivision.id}`}>
          <a className="btn btn-sm btn-green">Read more</a>
        </Link>
      </div>
    </div>
  );
}
