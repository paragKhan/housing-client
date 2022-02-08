import Footer from "components/Footer";
import HousingModelCard from "components/HousingModelCard";
import HousingModelCarousel from "components/HousingModelCarousel";
import HousingModelSidebar from "components/HousingModelSidebar";
import LearnMore from "components/LearnMore";
import Navbar from "components/Navbar";
import React from "react";

export default function HousingModel() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient py-5">
        <h3 className="text-center">Housing Model Details</h3>
      </div>
      <div className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="card card-shadow">
                <div className="card-body">
                  <div className="mb-3">
                    <h4 className="color-green fw-bold">Model - A</h4>
                    <div>
                      <i className="fas fa-map-marker-alt me-2 color-green" />
                      <span className="color-green fw-bold">Location:</span>
                      <span className="color-green ms-2">
                        Carmichael Village
                      </span>
                    </div>
                  </div>

                  <HousingModelCarousel />

                  <div className="mt-3">
                    <h6 className="fw-bold color-green">Description</h6>
                    <p className="small">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Maiores, dolor earum. Et, quia nisi rerum atque, at
                      debitis, incidunt ea a quasi harum reiciendis laudantium
                      cum ut culpa sunt voluptatibus! Lorem ipsum dolor, sit
                      amet consectetur adipisicing elit. Eligendi et voluptas
                      quasi laudantium voluptates. Ad dolorum non ratione quasi
                      eveniet? Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Quos totam facere magni, odit quidem
                      quam repudiandae vero minus minima hic velit distinctio
                      atque! Necessitatibus voluptate porro laudantium quasi
                      distinctio aut!
                    </p>
                  </div>
                  <div className="mt-3 mb-5">
                    <h6 className="fw-bold color-green">Features</h6>
                    <div className="row">
                      <div className="col-6 col-md-4  mb-3">
                        <i className="fas fa-bed color-green me-2" />
                        <span>Bedrooms: 2</span>
                      </div>
                      <div className="col-6 col-md-4 mb-3">
                        <i className="fas fa-shower color-green me-2" />
                        <span>Bathrooms: 2</span>
                      </div>
                      <div className="col-6 col-md-4  mb-3">
                        <i className="fas fa-square color-green me-2" />
                        <span>Width: 867 Sq. Ft.</span>
                      </div>
                      <div className="col-6 col-md-4  mb-3">
                        <i className="fas fa-warehouse color-green me-2" />
                        <span>Garage: 0</span>
                      </div>
                      <div className="col-6 col-md-4  mb-3">
                        <i className="fas fa-dungeon color-green me-2" />
                        <span>Patio: 0</span>
                      </div>
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
                          src="/img/plans/basic plan.jpg"
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
                          src="/img/plans/basic plan.jpg"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <HousingModelSidebar />
              <br />
              <LearnMore />
              <br />
              <HousingModelCard />
              <br />
              <HousingModelCard />
              <br />
              <HousingModelCard />
              <br />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
