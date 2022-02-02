import Footer from "components/Footer";
import LearnMore from "components/LearnMore";
import Navbar from "components/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const images = [
  "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
];
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
};

export default function Island() {
  const router = useRouter();
  const [currentSlideImage, setCurrentSlideImage] = useState(images[0]);

  const { pid } = router.query;

  return (
    <>
      <Navbar />
      <div className="text-center bg-gradient py-5">
        <h3>Housing on the Islands</h3>
      </div>
      <div className="bg-light">
        <div className="container py-4">
          <h3>Grand Bahama</h3>
          <p className="small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci morbi
            velit sit ut nec euismod tortor.
          </p>
          <div>
            <Image
              layout="responsive"
              width="100%"
              height={60}
              objectFit="cover"
              src={currentSlideImage}
            />
          </div>
          <div className="container mt-3">
            <Slider {...settings}>
              {images.map((item, i) => (
                <div key={i}>
                  <Image
                    onClick={() => setCurrentSlideImage(item)}
                    layout="responsive"
                    objectFit="cover"
                    height="50%"
                    width="100%"
                    src={item}
                    alt=""
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="container py-5">
          <div className="row align-items-stretch">
            <div className="col-12 col-lg-8">
              <div className="card" style={{ height: "100%" }}>
                <div className="card-body">
                  <h6 className="color-green">Description</h6>
                  <p className="small">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    harum dolorum dignissimos in optio soluta assumenda! Maxime
                    asperiores porro temporibus doloribus architecto laborum
                    quasi. Ut est aspernatur nisi sed doloribus?
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 mt-3 mt-lg-0">
              <LearnMore />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
