import axios from "apis/axios";
import { getProfileData } from "apis/profile";
import uploader from "apis/uploader";
import Footer from "components/Footer";
import HousingModelCards from "components/HousingModelCards";
import LearnMore from "components/LearnMore";
import Navbar from "components/Navbar";
import ProfileCard from "components/ProfileCard";
import { errorify } from "helpers";
import withAuth from "HOC/withAuth";
import Link from "next/link";
import React, { createRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const islands = [
  "Abaco",
  "Acklins",
  "Andros",
  "Berry Islands",
  "Bimini",
  "Cat Island",
  "Crooked Island",
  "Eleuthera",
  "Exuma",
  "Grand Bahama",
  "Inagua",
  "Long Cay",
  "Long Island",
  "Mayaguana",
  "New Providence",
  "Ragged Island",
  "Rum Cay",
  "San Salvador",
];
const countries = [
  "Bahamas",
  "Afghanistan ",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Côte d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Korea",
  "Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Republic of Korea",
  "Republic of Moldova",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Tajikistan",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates ",
  "United Kingdom",
  "United Republic of Tanzania ",
  "United States of America ",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Viet Nam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Holy See",
  "State of Palestine",
  "Cook Islands",
  "Niue",
];
const industries = [
  "Banking",
  "Insurance",
  "Tourism",
  "Retail",
  "Customs",
  "Defence Force",
  "Immigration",
  "Public Service",
  "Police",
];

function Application() {
  const [profile, setProfile] = useState(null);
  const [nibImage, setNibImage] = useState(null);
  const [passportImage, setPassportImage] = useState(null);
  const [paymentSlipImage, setPaymentSlipImage] = useState(null);
  const nibImageRef = createRef();
  const passportImageRef = createRef();
  const paymentSlipImageRef = createRef();
  const [canSubmit, setCanSubmit] = useState(null);
  const [deps, setDeps] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [nibUploading, setNibUploading] = useState(false);
  const [passportUploading, setPassportUploading] = useState(false);
  const [paymentSlipUploading, setPaymentSlipUploading] = useState(false);

  const uploadNibImage = async () => {
    const file = nibImageRef.current.files[0];

    if (file) {
      setNibUploading(true);
      const toastId = toast.loading("Uploading NIB Photo");
      try {
        const photo = await uploader(file);
        setNibImage(photo);
        toast.update(toastId, {
          render: "NIB Photo Uploaded",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
      } catch (err) {
        toast.update(toastId, {
          render: "NIB Photo Upload Failed",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      }
      setNibUploading(false);
    }
  };

  const uploadPassportImage = async () => {
    const file = passportImageRef.current.files[0];

    if (file) {
      setPassportUploading(true);
      const toastId = toast.loading("Uploading Passport Photo");
      try {
        const photo = await uploader(file);
        setPassportImage(photo);
        toast.update(toastId, {
          render: "Passport Photo Uploaded",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
      } catch (err) {
        toast.update(toastId, {
          render: "Passport Photo Upload Failed",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      }
      setPassportUploading(false);
    }
  };

  const uploadPaymentSlipImage = async () => {
    const file = paymentSlipImageRef.current.files[0];

    if (file) {
      setPaymentSlipUploading(true);
      const toastId = toast.loading("Uploading Payment Slip Photo");
      try {
        const photo = await uploader(file);
        setPaymentSlipImage(photo);

        toast.update(toastId, {
          render: "Payment Slip Photo Uploaded",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
      } catch (err) {
        toast.update(toastId, {
          render: "Payment Slip Photo Upload Failed",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      }
      setPaymentSlipUploading(false);
    }
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

    nibImage && formData.append("nib_photo", nibImage);
    passportImage && formData.append("passport_photo", passportImage);
    paymentSlipImage && formData.append("payment_slip", paymentSlipImage);

    try {
      setSubmitting(true);
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
              <ProfileCard />
              {canSubmit !== null && (
                <div className="card card-shadow p-3">
                  <div className="card-body">
                    <h3 className="card-title text-center color-dark">
                      Application Form
                    </h3>

                    {profile && canSubmit && (
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="p-3">
                          <h6 className="color-green">Heading</h6>
                          <div className="input-group mt-3">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text border-0 bg-light text-secondary"
                                id="basic-addon1"
                              >
                                Select Subdivision
                              </span>
                            </div>

                            <select className="form-control bg-light border-0">
                              <option>Subdivision - 1</option>
                              <option>Subdivision - 1</option>
                              <option>Subdivision - 1</option>
                              <option>Subdivision - 1</option>
                            </select>
                          </div>
                          <div className="input-group mt-3">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text border-0 bg-light text-secondary"
                                id="basic-addon1"
                              >
                                Select housing model
                              </span>
                            </div>

                            <select className="form-control bg-light border-0">
                              <option>Model - A</option>
                              <option>Model - B</option>
                              <option>Model - C</option>
                              <option>Model - D</option>
                            </select>
                          </div>
                        </div>
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
                              {countries.map((country, index) => (
                                <option key={index} value={country}>
                                  {country}
                                </option>
                              ))}
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
                              {...register("island_of_birth", {
                                required: true,
                              })}
                              defaultValue={profile.island_of_birth}
                              className="form-control bg-light border-0"
                            >
                              {islands.map((island, index) => (
                                <option key={index} value={island}>
                                  {island}
                                </option>
                              ))}
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
                              {countries.map((country, index) => (
                                <option key={index} value={country}>
                                  {country}
                                </option>
                              ))}
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
                              {...register("street_address", {
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
                              {islands.map((island, index) => (
                                <option key={index} value={island}>
                                  {island}
                                </option>
                              ))}
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
                              {countries.map((country, index) => (
                                <option key={index} value={country}>
                                  {country}
                                </option>
                              ))}
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
                              {...register("passport_no")}
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
                              {...register("passport_expiry")}
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
                              {...register("driving_licence_no")}
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
                              ref={passportImageRef}
                              onChange={uploadPassportImage}
                            />
                          </div>
                        </div>
                        <div className="p-3">
                          <h6 className="color-green">
                            Employment Information
                          </h6>
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

                            <select
                              {...register("industry", { required: true })}
                              defaultValue={profile.industry}
                              className="form-control bg-light border-0"
                            >
                              {industries.map((industry, index) => (
                                <option key={index} value={industry}>
                                  {industry}
                                </option>
                              ))}
                            </select>
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
                                Pre-Approved Letter
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

                          <div className="input-group mt-3">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text border-0 bg-light text-secondary"
                                id="basic-addon1"
                              >
                                Job Letter
                              </span>
                            </div>

                            <input
                              className="custom-file-upload form-control bg-light border-0"
                              type="file"
                              required
                              // ref={paymentSlipImageRef}
                              // onChange={uploadPaymentSlipImage}
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
                                  <u>Terms and Conditions</u>
                                </a>
                              </Link>
                            </small>
                          </div>
                        </div>
                        <div className="text-center">
                          <input
                            disabled={
                              submitting ||
                              nibUploading ||
                              passportUploading ||
                              paymentSlipUploading
                            }
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
              )}
            </div>
            <div className="d-none d-lg-block col-lg-4">
              <LearnMore />
              <br />
              <HousingModelCards count={2} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default withAuth(Application);
