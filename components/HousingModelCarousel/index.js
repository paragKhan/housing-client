import Image from "next/image";
import React from "react";

export default function HousingModelCarousel({ gallery }) {
  const photos = gallery.split("|");
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`carousel-item position-relative hero-img-rounded ${
              index == 0 ? "active" : ""
            }`}
          >
            <Image
              src={process.env.NEXT_PUBLIC_IMAGE_URL + photo}
              layout="fill"
              alt="..."
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span
          className="fas fa-arrow-circle-left fs-2"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span
          className="fas fa-arrow-circle-right fs-2"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
