import axios from "apis/axios";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Subdivision() {
  const [subdivision, setSubdivision] = useState({});

  const router = useRouter();
  const { pid } = router.query;

  useEffect(() => {
    pid &&
      axios.get(`/subdivisions/${pid}`).then((response) => {
        setSubdivision(response.data);
      });
  }, [pid]);

  return (
    <>
      <Navbar />
      <div className="bg-gradient py-5">
        <h3 className="text-center">Government Subdivision and Lots</h3>
      </div>

      <div className="container py-3">
        <div className="row  px-3">
          <img
            className="img-fluid card-shadow"
            src={process.env.IMAGE_URL + subdivision.photo}
          />
        </div>
        <div className="card-shadow mt-3">
          <div className="card-body">
            <h5 className="color-dark">{subdivision.heading}</h5>
            <div>
              <i className="color-green fas fa-map-marker-alt me-2 " />
              <span className="color-green fw-bold">Location:</span>
              <span className="color-green ms-2">{subdivision.location}</span>
            </div>
            <h6 className="mt-3 color-dark">Description</h6>
            <p className="small color-dark">{subdivision.description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
