import axios from "apis/axios";
import Footer from "components/Footer";
import HousingModelCards from "components/HousingModelCards";
import HousingModelCarousel from "components/HousingModelCarousel";
import HousingModelSidebar from "components/HousingModelSidebar";
import LearnMore from "components/LearnMore";
import Navbar from "components/Navbar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

export default function HousingModel() {
  const [housingModel, setHousingModel] = useState(null);
  const [showLightbox, setShowLightbox] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  const router = useRouter();
  const { pid } = router.query;

  useEffect(() => {
    pid &&
      axios
        .get(`/housing_models/${pid}`)
        .then((res) => {
          console.log(res.data);
          setHousingModel(res.data);
        })
        .catch((err) => {});
  }, [pid]);

  return (
    <>
      <Navbar />
      {showLightbox && (
        <Lightbox
          onClose={() => setShowLightbox(false)}
          image={lightboxImage}
        />
      )}
      <div className="bg-gradient py-5">
        <h3 className="text-center">Housing Model Details</h3>
      </div>
      <div className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              {housingModel && (
                <div className="card card-shadow">
                  <div className="card-body">
                    <div className="mb-3">
                      <h4 className="color-green fw-bold">
                        {housingModel.heading}
                      </h4>
                      <div>
                        <i className="fas fa-map-marker-alt me-2 color-green" />
                        <span className="color-green fw-bold">Location:</span>
                        <span className="color-green ms-2">
                          {housingModel.location}
                        </span>
                      </div>
                    </div>

                    <HousingModelCarousel gallery={housingModel.gallery} />

                    <div className="mt-3">
                      <h6 className="fw-bold color-green">Description</h6>
                      <p className="small">{housingModel.description}</p>
                    </div>
                    <div className="mt-3 mb-5">
                      <h6 className="fw-bold color-green">Features</h6>
                      <div className="row">
                        {housingModel.bedrooms && (
                          <div className="col-6 col-md-4  mb-3">
                            <i className="fas fa-bed color-green me-2" />
                            <span>Bedrooms: {housingModel.bedrooms}</span>
                          </div>
                        )}
                        {housingModel.bathrooms && (
                          <div className="col-6 col-md-4 mb-3">
                            <i className="fas fa-shower color-green me-2" />
                            <span>Bathrooms: {housingModel.bathrooms}</span>
                          </div>
                        )}
                        {housingModel.width && (
                          <div className="col-6 col-md-4  mb-3">
                            <i className="fas fa-square color-green me-2" />
                            <span>Area: {housingModel.width} Sq. Ft.</span>
                          </div>
                        )}
                        {housingModel.garages && (
                          <div className="col-6 col-md-4  mb-3">
                            <i className="fas fa-warehouse color-green me-2" />
                            <span>Garage: {housingModel.garages}</span>
                          </div>
                        )}
                        {housingModel.patios && (
                          <div className="col-6 col-md-4  mb-3">
                            <i className="fas fa-dungeon color-green me-2" />
                            <span>Patio: {housingModel.patios}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="fw-bold color-green">Plans</h3>
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link color-blue active"
                            id="home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#home"
                            type="button"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                          >
                            Master Plan
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link color-green"
                            id="contact-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#contact"
                            type="button"
                            role="tab"
                            aria-controls="contact"
                            aria-selected="false"
                          >
                            Basic Plan
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="home"
                          role="tabpanel"
                          aria-labelledby="home-tab"
                        >
                          <img
                            onClick={() => {
                              setShowLightbox(true);
                              setLightboxImage(
                                housingModel.master_plan.original
                              );
                            }}
                            src={housingModel.master_plan.thumb}
                            className="img-fluid"
                          />
                        </div>
                        <div
                          className="tab-pane fade"
                          id="contact"
                          role="tabpanel"
                          aria-labelledby="profile-tab"
                        >
                          <img
                            onClick={() => {
                              setShowLightbox(true);
                              setLightboxImage(
                                housingModel.basic_plan.original
                              );
                            }}
                            src={housingModel.basic_plan.thumb}
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <HousingModelSidebar />
              <br />
              <LearnMore />
              <br />
              <HousingModelCards count={3} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
