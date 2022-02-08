import { updateProfileData } from "apis/profile";
import uploader from "apis/uploader";
import Image from "next/image";
import React, { createRef } from "react";
import { toast } from "react-toastify";

export default function ProfileCard({ data, onImageChange }) {
  const profileImageInput = createRef();

  const handleImageUpload = async () => {
    const file = profileImageInput.current.files[0];

    const photo = await uploader(file);

    const res = await updateProfileData({ photo });
    toast.success("Profile image updated");
    onImageChange(res.photo);
  };

  return (
    <div className="card card-shadow mb-4">
      <div className="card-body">
        <h5>{data.fname + " " + data.lname}</h5>
        <hr />
        <div className="d-flex mb-3">
          <div className="position-relative">
            <Image
              src={
                data.photo
                  ? process.env.IMAGE_URL + data.photo
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
          <div className="ms-5 color-dark">
            <p>
              <i className="far fa-envelope me-2" />
              <span>Email: {data.email}</span>
            </p>
            <p>
              <i className="fas fa-phone-alt me-2" />
              <span>Phone: {data.phone}</span>
            </p>
            <p>
              <i className="far fa-user me-2" />
              <span>Gender: {data.gender}</span>
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
  );
}
