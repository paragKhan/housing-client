import axios from "apis/axios";
import { getProfileData } from "apis/profile";
import uploader from "apis/uploader";
import Footer from "components/Footer";
import HousingModelCard from "components/HousingModelCard";
import LearnMore from "components/LearnMore";
import Navbar from "components/Navbar";
import ProfileCard from "components/ProfileCard";
import { errorify } from "helpers";
import withAuth from "HOC/withAuth";
import Link from "next/link";
import React, { createRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function Application() {
  const [profile, setProfile] = useState(null);
  const [nibImage, setNibImage] = useState(null);
  const [passportImage, setPassportImage] = useState(null);
  const [paymentSlipImage, setPaymentSlipImage] = useState(null);
  const nibImageRef = createRef();
  const passportImageRef = createRef();
  const paymentSlipImageRef = createRef();
  const [canSubmit, setCanSubmit] = useState(false);
  const [deps, setDeps] = useState(0);

  const uploadNibImage = async () => {
    const file = nibImageRef.current.files[0];
    toast("Uploading nib image...");
    const photo = await uploader(file);
    setNibImage(photo);
    toast.success("Nib image uploaded");
  };

  const uploadPassportImage = async () => {
    const file = passportImageRef.current.files[0];
    toast("Uploading Passport image...");
    const photo = await uploader(file);
    setPassportImage(photo);
    toast.success("Passport image uploaded");
  };

  const uploadPaymentSlipImage = async () => {
    const file = paymentSlipImageRef.current.files[0];
    toast("Uploading Payment Slip image...");
    const photo = await uploader(file);
    setPaymentSlipImage(photo);
    toast.success("Payment slip image uploaded");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!data.accept) {
      toast.error("You must accept the terms and conditions");
      return;
    }

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    formData.append("nib_photo", nibImage);
    formData.append("passport_photo", passportImage);
    formData.append("payment_slip", paymentSlipImage);

    try {
      const res = await axios.post("/apply", formData);
      toast.success("Application submitted successfully");
      setDeps(Math.random());
    } catch (err) {
      errorify(err);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const getProfile = await getProfileData();
        setProfile(getProfile);
        const canSubmit = await axios.get("/can-submit-application");
        setCanSubmit(canSubmit.data.canSubmit);
        console.log(canSubmit.data.canSubmit);
      } catch (err) {}
    }
    fetchData();
  }, [deps]);

  return (
    <>
      <Navbar />

      <div className="bg-light">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-lg-8">
              {profile && (
                <ProfileCard
                  onImageChange={(newImage) =>
                    setProfile({ ...profile, photo: newImage })
                  }
                  data={profile}
                />
              )}
              <div className="card card-shadow p-3">
                <div className="card-body">
                  <h3 className="card-title text-center color-dark">
                    Application Form
                  </h3>
                  {profile && canSubmit && (
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="p-3">
                        <h6 className="color-green">Personal Information</h6>
                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text border-0 bg-light text-secondary"
                              id="basic-addon1"
                            >
                              First name
                            </span>
                          </div>
                          <input
                            {...register("fname", { required: true })}
                            defaultValue={profile.fname}
                            className="form-control bg-light border-0"
                            type="text"
                            placeholder="Type here..."
                          />
                        </div>
                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text border-0 bg-light text-secondary"
                              id="basic-addon1"
                            >
                              Last name
                            </span>
                          </div>

                          <input
                            {...register("lname", { required: true })}
                            defaultValue={profile.lname}
                            className="form-control bg-light border-0"
                            type="text"
                            placeholder="Last name"
                          />
                        </div>

                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text border-0 bg-light text-secondary"
                              id="basic-addon1"
                            >
                              NIB Number
                            </span>
                          </div>

                          <input
                            {...register("nib_no", { required: true })}
                            defaultValue={profile.nib_no}
                            className="form-control bg-light border-0"
                            type="text"
                            placeholder="Type here..."
                          />
                        </div>

                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text border-0 bg-light text-secondary"
                              id="basic-addon1"
                            >
                              Email
                            </span>
                          </div>

                          <input
                            {...register("email", { required: true })}
                            defaultValue={profile.email}
                            className="form-control bg-light border-0"
                            type="text"
                            placeholder="Email"
                          />
                        </div>

                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text border-0 bg-light text-secondary"
                              id="basic-addon1"
                            >
                              Date of birth
                            </span>
                          </div>

                          <input
                            {...register("dob", { required: true })}
                            defaultValue={profile.dob}
                            className="form-control bg-light border-0"
                            type="date"
                          />
                        </div>

                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text border-0 bg-light text-secondary"
                              id="basic-addon1"
                            >
                              Gender
                            </span>
                          </div>

                          <select
                            {...register("gender", { required: true })}
                            defaultValue={profile.gender}
                            className="form-control bg-light border-0"
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text border-0 bg-light text-secondary"
                              id="basic-addon1"
                            >
                              Country of Birth
                            </span>
                          </div>

                          <select
                            {...register("country_of_birth", {
                              required: true,
                            })}
                            defaultValue={profile.country_of_birth}
                            className="form-control bg-light border-0"
                          >
                            <option value="usa">USA</option>
                            <option value="uk">UK</option>
                            <option value="canada">CANADA</option>
                          </select>
                        </div>

                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text border-0 bg-light text-secondary"
                              id="basic-addon1"
                            >
                              Island of Birth
                            </span>
                          </div>

                          <select
                            {...register("island_of_birth", { required: true })}
                            defaultValue={profile.island_of_birth}
                            className="form-control bg-light border-0"
                          >
                            <option value="male">USA</option>
                            <option value="female">UK</option>
                            <option value="other">CANADA</option>
                          </select>
                        </div>

                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text border-0 bg-light text-secondary"
                              id="basic-addon1"
                            >
                              Country of Citizenship
                            </span>
                          </div>

                          <select
                            {...register("country_of_citizenship", {
                              required: true,
                            })}
                            defaultValue={profile.country_of_citizenship}
                            className="form-control bg-light border-0"
                          >
                            <option value="male">USA</option>
                            <option value="female">UK</option>
                            <option value="other">CANADA</option>
                          </select>
                        </div>

                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text border-0 bg-light text-secondary"
                              id="basic-addon1"
                            >
                              Phone
                            </span>
                          </div>
                          <input
                            {...register("phone", { required: true })}
                            defaultValue={profile.phone}
                            className="form-control bg-light border-0"
                            type="text"
                            placeholder="Type here..."
                          />
                        </div>
                      </div>
                      <div className="p-3">
                        <h6 className="color-green">Home Address</h6>
                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text border-0 bg-light text-secondary"
                              id="basic-addon1"
                            >
                              House No
                            </span>
                          </div>

                          <input
                            {...register("house_no", { required: true })}
                            className="form-control bg-light border-0"
                            type="text"
                            placeholder="Type here..."
                          />
                        </div>

                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text border-0 bg-light text-secondary"
                              id="basic-addon1"
                            >
                              Street Address
                            </span>
                          </div>

                          <input
                            {...register("street_address", { required: true })}
                            className="form-control bg-light border-0"
                            type="text"
                            placeholder="Type here..."
                          />
                        </div>

                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text border-0 bg-light text-secondary"
                              id="basic-addon1"
                            >
                              P.O Box
                            </span>
                          </div>

                          <input
                            {...register("po_box", { required: true })}
                            className="form-control bg-light border-0"
                            type="text"
                            placeholder="Type here..."
                          />
                        </div>

                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text border-0 bg-light text-secondary"
                              id="basic-addon1"
                            >
                              Island
                            </span>
                          </div>

                          <select
                            {...register("island", { required: true })}
                            className="form-control bg-light border-0"
                          >
                            <option value="male">USA</option>
                            <option value="female">UK</option>
                            <option value="other">Canada</option>
                          </select>
                        </div>

                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text border-0 bg-light text-secondary"
                              id="basic-addon1"
                            >
                              Country
                            </span>
                          </div>

                          <select
                            {...register("country", { required: true })}
                            className="form-control bg-light border-0"
                          >
                            <option value="male">USA</option>
                            <option value="female">UK</option>
                            <option value="other">Canada</option>
                          </select>
                        </div>

                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text border-0 bg-light text-secondary"
                              id="basic-addon1"
                            >
                              Home Phone
                            </span>
                          </div>

                          <input
                            {...register("home_phone", { required: true })}
                            className="form-control bg-light border-0"
                            type="text"
                            placeholder="Type here..."
                          />
                        </div>
                      </div>
                      <div className="p-3">
                        <h6 className="color-green">
                          Identification Information
                        </h6>
                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text border-0 bg-light text-secondary"
                              id="basic-addon1"
                            >
                              Passport No.
                            </span>
                          </div>
                          <input
                            {...register("passport_no", { required: true })}
                            className="form-control bg-light border-0"
                            type="text"
                            placeholder="Type here..."
                          />
                        </div>

                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text border-0 bg-light text-secondary"
                              id="basic-addon1"
                            >
                              Passport Expiration Date
                            </span>
                          </div>
                          <input
                            {...register("passport_expiry", { required: true })}
                            className="form-control bg-light border-0"
                            type="date"
                          />
                        </div>

                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text border-0 bg-light text-secondary"
                              id="basic-addon1"
                            >
                              Driving Licence
                            </span>
                          </div>

                          <input
                            {...register("driving_licence_no", {
                              required: true,
                            })}
                            className="form-control bg-light border-0"
                            type="text"
                            placeholder="Type here..."
                          />
                        </div>
                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text border-0 bg-light text-secondary"
                              id="basic-addon1"
                            >
                              NIB
                            </span>
                          </div>

                          <input
                            required
                            ref={nibImageRef}
                            onChange={uploadNibImage}
                            className="custom-file-upload form-control bg-light border-0"
                            type="file"
                          />
                        </div>

                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text border-0 bg-light text-secondary"
                              id="basic-addon1"
                            >
                              Passport
                            </span>
                          </div>

                          <input
                            className="custom-file-upload form-control bg-light border-0"
                            type="file"
                            required
                            ref={passportImageRef}
                            onChange={uploadPassportImage}
                          />
                        </div>
                      </div>
                      <div className="p-3">
                        <h6 className="color-green">Employment Information</h6>
                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text border-0 bg-light text-secondary"
                              id="basic-addon1"
                            >
                              Employer
                            </span>
                          </div>

                          <input
                            {...register("employer", { required: true })}
                            className="form-control bg-light border-0"
                            type="text"
                            placeholder="Type here..."
                          />
                        </div>

                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text border-0 bg-light text-secondary"
                              id="basic-addon1"
                            >
                              Industry
                            </span>
                          </div>

                          <input
                            {...register("industry", { required: true })}
                            className="form-control bg-light border-0"
                            type="text"
                            placeholder="Type here..."
                          />
                        </div>

                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text border-0 bg-light text-secondary"
                              id="basic-addon1"
                            >
                              Position
                            </span>
                          </div>

                          <input
                            {...register("position", { required: true })}
                            className="form-control bg-light border-0"
                            type="text"
                            placeholder="Type here..."
                          />
                        </div>

                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text border-0 bg-light text-secondary"
                              id="basic-addon1"
                            >
                              Work Phone
                            </span>
                          </div>

                          <input
                            {...register("work_phone", { required: true })}
                            className="form-control bg-light border-0"
                            type="text"
                            placeholder="Type here..."
                          />
                        </div>

                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text border-0 bg-light text-secondary"
                              id="basic-addon1"
                            >
                              Payment Slip
                            </span>
                          </div>

                          <input
                            className="custom-file-upload form-control bg-light border-0"
                            type="file"
                            required
                            ref={paymentSlipImageRef}
                            onChange={uploadPaymentSlipImage}
                          />
                        </div>

                        <div className="d-flex mt-3">
                          <input
                            {...register("accept")}
                            className="me-3"
                            type="checkbox"
                          />
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
                  )}
                  {profile && !canSubmit && (
                    <p className="lead text-muted mt-3 text-center">
                      Application already submitted <br />
                      <Link href="/application-status">
                        <a>
                          <u>Click here to view application status</u>
                        </a>
                      </Link>
                    </p>
                  )}
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

export default withAuth(Application);
