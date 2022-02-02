import Footer from "components/Footer";
import HousingModelCard from "components/HousingModelCard";
import LearnMore from "components/LearnMore";
import Navbar from "components/Navbar";
import React from "react";

export default function ApplicationStatus() {
  return (
    <>
      <Navbar />
      <div className="bg-light">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="card card-shadow mb-4">
                <div className="card-body">
                  <h5>Parag Khan</h5>
                  <hr />
                  <div className="d-flex mb-3">
                    <div className="position-relative">
                      <img
                        width={100}
                        src="/img/team/person1.png"
                        className="rounded-circle"
                        alt=""
                      />
                      <i className="fas fa-pen position-absolute cursor-pointer color-dark" />
                    </div>
                    <div className="ms-5 color-dark">
                      <p>
                        <i className="far fa-envelope me-2" />
                        <span>Email: prgkhan@gmail.com</span>
                      </p>
                      <p>
                        <i className="fas fa-phone-alt me-2" />
                        <span>Phone: 01982141429</span>
                      </p>
                      <p>
                        <i className="far fa-user me-2" />
                        <span>Gender: Male</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <strong>
                      Description{" "}
                      <i className="ms-3 fas fa-pen cursor-pointer" />
                    </strong>
                    <p className="small">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Eos, doloremque, similique atque eum rem dolorem magnam
                      sed mollitia quaerat expedita obcaecati optio perferendis
                      quasi eaque doloribus velit odit libero hic.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card card-shadow p-3 py-5">
                <div className="card-body">
                  <h5 className="color-dark text-center mb-5">
                    Application Status
                  </h5>
                  <div className="d-flex align-items-center my-3">
                    <span className="badge-number-rounded bg-green text-light fw-bold">
                      1
                    </span>
                    <span className="ms-3 color-green fw-bold">
                      Application Submitted
                    </span>
                  </div>
                  <div className="d-flex align-items-center my-3">
                    <span className="badge-number-rounded bg-green text-light fw-bold">
                      2
                    </span>
                    <span className="ms-3 color-green fw-bold">
                      Application Under Review
                    </span>
                  </div>
                  <div className="d-flex align-items-center my-3">
                    <span className="badge-number-rounded bg-green text-light fw-bold">
                      3
                    </span>
                    <span className="ms-3 color-green fw-bold">
                      Application Approved
                    </span>
                  </div>
                  <div className="d-flex align-items-center my-3">
                    <span className="badge-number-rounded bg-danger text-light fw-bold">
                      3
                    </span>
                    <span className="ms-3 text-danger fw-bold">
                      Application Declined
                    </span>
                  </div>
                  <div className="d-flex align-items-center my-3">
                    <span className="badge-number-rounded bg-warning text-light fw-bold">
                      3
                    </span>
                    <span className="ms-3 text-warning fw-bold">
                      Application Resubmission
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-none d-lg-block col-lg-4">
              <LearnMore />
              <div className="mt-5">
                <HousingModelCard />
              </div>
              <div className="mt-5">
                <HousingModelCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
