import Footer from "components/Footer";
import HousingModelCard from "components/HousingModelCard";
import LearnMore from "components/LearnMore";
import Navbar from "components/Navbar";
import Link from "next/link";
import React from "react";

export default function Application() {
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
              <div className="card card-shadow p-3">
                <div className="card-body">
                  <form>
                    <h6 className="color-green">Personal Information</h6>
                    <div className="p-3">
                      <input
                        className="form-control bg-light border-0 mb-3"
                        type="text"
                        placeholder="First Name"
                      />
                      <input
                        className="form-control bg-light border-0 mb-3"
                        type="text"
                        placeholder="Last Name"
                      />
                      <input
                        className="form-control bg-light border-0 mb-3"
                        type="text"
                        placeholder="NID Number"
                      />
                      <input
                        className="form-control bg-light border-0 mb-3"
                        type="text"
                        placeholder="Email"
                      />

                      <div className="form-group mb-3">
                        <label className="ms-2">Date of Birth</label>
                        <input
                          className="form-control bg-light border-0"
                          type="date"
                        />
                      </div>
                      <select className="form-control bg-light border-0 mb-3">
                        <option selected disabled>
                          Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      <select className="form-control bg-light border-0 mb-3">
                        <option selected disabled>
                          Country of Birth
                        </option>
                        <option value="male">USA</option>
                        <option value="female">UK</option>
                        <option value="other">CANADA</option>
                      </select>
                      <select className="form-control bg-light border-0 mb-3">
                        <option selected disabled>
                          Island of Birth
                        </option>
                        <option value="male">USA</option>
                        <option value="female">UK</option>
                        <option value="other">CANADA</option>
                      </select>
                      <select className="form-control bg-light border-0 mb-3">
                        <option selected disabled>
                          Country of Citizenship
                        </option>
                        <option value="male">USA</option>
                        <option value="female">UK</option>
                        <option value="other">CANADA</option>
                      </select>
                      <input
                        className="form-control bg-light border-0 mb-3"
                        type="text"
                        placeholder="phone"
                      />
                    </div>
                    <h6 className="color-green">Home Address</h6>
                    <div className="p-3">
                      <input
                        className="form-control bg-light border-0 mb-3"
                        type="text"
                        placeholder="Home Address"
                      />
                      <input
                        className="form-control bg-light border-0 mb-3"
                        type="text"
                        placeholder="Street Address"
                      />
                      <input
                        className="form-control bg-light border-0 mb-3"
                        type="text"
                        placeholder="P.O Box"
                      />
                      <select className="form-control bg-light border-0 mb-3">
                        <option selected disabled>
                          Island
                        </option>
                        <option value="male">USA</option>
                        <option value="female">UK</option>
                        <option value="other">Canada</option>
                      </select>
                      <select className="form-control bg-light border-0 mb-3">
                        <option selected disabled>
                          Country
                        </option>
                        <option value="male">USA</option>
                        <option value="female">UK</option>
                        <option value="other">Canada</option>
                      </select>
                      <input
                        className="form-control bg-light border-0 mb-3"
                        type="text"
                        placeholder="Home Phone"
                      />
                    </div>
                    <h6 className="color-green">Identification Information</h6>
                    <div className="p-3">
                      <input
                        className="form-control bg-light border-0 mb-3"
                        type="text"
                        placeholder="Passport No."
                      />
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text border-0 bg-light text-secondary"
                            id="basic-addon1"
                          >
                            Passport Expiration Date
                          </span>
                        </div>
                        <input
                          className="form-control bg-light border-0"
                          type="date"
                        />
                      </div>
                      <input
                        className="form-control bg-light border-0 mb-3"
                        type="text"
                        placeholder="Driving Licence"
                      />
                      <input
                        className="custom-file-upload form-control bg-light border-0 mb-3"
                        type="file"
                      />
                      <input
                        className="custom-file-upload form-control bg-light border-0 mb-3"
                        type="file"
                      />
                    </div>
                    <h6 className="color-green">Employment Information</h6>
                    <div className="p-3">
                      <input
                        className="form-control bg-light border-0 mb-3"
                        type="text"
                        placeholder="Employer"
                      />
                      <input
                        className="form-control bg-light border-0 mb-3"
                        type="text"
                        placeholder="Employment Industry"
                      />
                      <input
                        className="form-control bg-light border-0 mb-3"
                        type="text"
                        placeholder="Position"
                      />
                      <input
                        className="form-control bg-light border-0 mb-3"
                        type="text"
                        placeholder="Work Phone"
                      />
                      <input
                        className="custom-file-upload form-control bg-light border-0 mb-3"
                        type="file"
                      />
                      <div className="d-flex mb-3">
                        <input className="me-3" type="checkbox" />
                        <small className="color-green">
                          Accept{" "}
                          <Link href="/tnc">
                            <a>
                              <u>terms and conditions</u>
                            </a>
                          </Link>
                        </small>
                      </div>
                    </div>
                    <div className="text-center">
                      <input
                        className="btn btn-green"
                        type="submit"
                        value="Apply Now"
                      />
                    </div>
                  </form>
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
