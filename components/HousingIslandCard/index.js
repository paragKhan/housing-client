import React from "react";

export default function HousingIslandCard({ title }) {
  return (
    <div
      className="card bg-dark text-white"
      style={{ width: 250, height: 250 }}
    >
      <img
        src="https://i.pinimg.com/originals/66/d9/f5/66d9f5afdc5337d3f9eac362b970c426.jpg"
        className="h-100"
        alt="..."
      />
      <div className="card-img-overlay">
        <div className="d-flex justify-content-center align-items-center h-100">
          <a
            href="#"
            className="btn text-light"
            style={{ background: "#00A388" }}
          >
            {title}
          </a>
        </div>
      </div>
    </div>
  );
}
