import axios from "apis/axios";
import { getProfileData, updateProfileData } from "apis/profile";
import uploader from "apis/uploader";
import Image from "next/image";
import React, { createRef, useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ProfileCard() {
  const profileImageInput = createRef();
  const [data, setData] = useState(null);
  const [sendingEmail, setSendingEmail] = useState(false);

  const handleImageUpload = async () => {
    const file = profileImageInput.current.files[0];

    const photo = await uploader(file);

    const res = await updateProfileData({ photo });
    toast.success("Profile image updated");
    setData({ ...data, photo: res.photo });
  };

  const handleSendEmailVerification = async () => {
    setSendingEmail(true);
    axios
      .post("/send-verification-email")
      .then((res) => {
        toast.success(res.data.message);
        setSendingEmail(false);
      })
      .catch((err) => {
        toast.error("Something went wrong");
        setSendingEmail(false);
      });
  };

  useEffect(() => {
    async function fetchData() {
      const response = await getProfileData();
      setData(response);
    }
    fetchData();
  }, []);

  return (
    <>
      {data && (
        <div className="card card-shadow mb-4">
          <div className="card-body">
            <h5>{data.fname + " " + data.lname}</h5>
            <hr />
            <div className="d-block d-md-flex mb-3">
              <div className="position-relative text-center">
                <Image
                  src={
                    data.photo
                      ? process.env.NEXT_PUBLIC_IMAGE_URL + data.photo
                      : "/img/no-photo.png"
                  }
                  className="rounded-circle"
                  height={100}
                  width={100}
                  alt=""
                />
                <i
                  onClick={() => profileImageInput.current.click()}
                  className="fas fa-pen position-absolute cursor-pointer color-dark"
                />
                <input
                  onChange={handleImageUpload}
                  ref={profileImageInput}
                  className="d-none"
                  type="file"
                />
              </div>
              <div className="ms-md-5 color-dark">
                <p>
                  <span className="d-flex align-items-center">
                    <i className="far fa-envelope me-2" />
                    Email: {data.email}
                    {data.email_verified_at && (
                      <i
                        tittle="Email verified"
                        className="ms-2 color-green fas fa-check-circle"
                      />
                    )}
                  </span>
                  {!data.email_verified_at && (
                    <span className="small text-danger">
                      Your email is not verified.
                      <button
                        disabled={sendingEmail}
                        onClick={handleSendEmailVerification}
                        className="badge btn color-blue"
                      >
                        {sendingEmail ? "Sending..." : "Verify Now"}
                      </button>
                    </span>
                  )}
                </p>
                <p>
                  <i className="fas fa-phone-alt me-2" />
                  <span>Phone: {data.phone}</span>
                </p>
                <p>
                  <i className="far fa-user me-2" />
                  <span>
                    Gender:{" "}
                    {data.gender &&
                      data.gender.charAt(0).toUpperCase() +
                        data.gender.slice(1)}
                  </span>
                </p>
              </div>
            </div>
            <div>
              <strong>Description</strong>
              {data.description ? (
                <p className="small">{data.description}</p>
              ) : (
                <p className="text-center text-muted mt-3">
                  No description available
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
