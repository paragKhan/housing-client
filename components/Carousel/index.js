import Image from "next/image";
import React from "react";

export default function Carousel() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item position-relative hero-img active">
          <Image
            src="/img/slides/slide-1.jpg"
            layout="fill"
            alt="..."
            objectFit="cover"
          />
        </div>
        <div className="carousel-item position-relative hero-img">
          <Image
            src="https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80"
            layout="fill"
            alt="..."
            objectFit="cover"
          />
        </div>
        <div className="carousel-item position-relative hero-img">
          <Image
            src="https://images.pexels.com/photos/2240891/pexels-photo-2240891.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            layout="fill"
            alt="..."
            objectFit="cover"
          />
        </div>
        <div className="carousel-item position-relative hero-img">
          <Image
            src="https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80"
            layout="fill"
            alt="..."
            objectFit="cover"
          />
        </div>
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
