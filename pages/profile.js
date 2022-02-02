import { getProfileData } from "apis/profile";
import Footer from "components/Footer";
import HousingModelCard from "components/HousingModelCard";
import LearnMore from "components/LearnMore";
import Navbar from "components/Navbar";
import withAuth from "HOC/withAuth";
import React, { useEffect, useState } from "react";

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await getProfileData();
      setProfile(response);
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-light">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-lg-8">
              {profile && (
                <div className="card card-shadow mb-4">
                  <div className="card-body">
                    <h5>{profile.fname}</h5>
                    <hr />
                    <div className="d-flex mb-3">
                      <div className="position-relative">
                        <img
                          width={100}
                          src={
                            profile.photo
                              ? process.env.IMAGE_URL + profile.photo
                              : "/img/no-photo.png"
                          }
                          className="rounded-circle"
                          alt=""
                        />
                        <i className="fas fa-pen position-absolute cursor-pointer color-dark" />
                      </div>
                      <div className="ms-5 color-dark">
                        <p>
                          <i className="far fa-envelope me-2" />
                          <span>Email: {profile.email}</span>
                        </p>
                        <p>
                          <i className="fas fa-phone-alt me-2" />
                          <span>Phone: {profile.phone}</span>
                        </p>
                        <p>
                          <i className="far fa-user me-2" />
                          <span>Gender: {profile.gender}</span>
                        </p>
                      </div>
                    </div>
                    <div>
                      <strong>
                        Description{" "}
                        <i className="ms-3 fas fa-pen cursor-pointer" />
                      </strong>
                      <p className="small">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Eos, doloremque, similique atque eum rem dolorem
                        magnam sed mollitia quaerat expedita obcaecati optio
                        perferendis quasi eaque doloribus velit odit libero hic.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {profile && (
                <div className="card card-shadow p-3">
                  <div className="card-body">
                    <h6 className="color-green">Profile</h6>

                    <form className="p-3">
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
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text border-0 bg-light text-secondary"
                            id="basic-addon1"
                          >
                            Date of birth
                          </span>
                        </div>
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
                      <div className="text-center">
                        <input
                          className="btn btn-green"
                          type="submit"
                          value="Save changes"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              )}
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

export default withAuth(Profile);
