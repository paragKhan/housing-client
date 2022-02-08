import { getProfileData, updateProfileData } from "apis/profile";
import Footer from "components/Footer";
import HousingModelCard from "components/HousingModelCard";
import LearnMore from "components/LearnMore";
import Navbar from "components/Navbar";
import ProfileCard from "components/ProfileCard";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [editing, setEditing] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await updateProfileData(data);
      setProfile(res);
      setEditing(false);
      toast.success("Profile updated");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

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
                <ProfileCard
                  onImageChange={(newImage) =>
                    setProfile({ ...profile, photo: newImage })
                  }
                  data={profile}
                />
              )}
              {profile && (
                <div className="card card-shadow p-3">
                  <div className="card-body">
                    <h6 className="color-green">Profile</h6>

                    <form onSubmit={handleSubmit(onSubmit)} className="p-3">
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text border-0 bg-light text-secondary"
                            id="basic-addon1"
                          >
                            First Name
                          </span>
                        </div>

                        <input
                          disabled={!editing}
                          defaultValue={profile.fname}
                          {...register("fname")}
                          className="form-control bg-light border-0"
                          type="text"
                          placeholder="First Name"
                        />
                      </div>

                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text border-0 bg-light text-secondary"
                            id="basic-addon1"
                          >
                            Last Name
                          </span>
                        </div>

                        <input
                          disabled={!editing}
                          defaultValue={profile.lname}
                          {...register("lname")}
                          className="form-control bg-light border-0"
                          type="text"
                          placeholder="Last Name"
                        />
                      </div>

                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text border-0 bg-light text-secondary"
                            id="basic-addon1"
                          >
                            NIB Number
                          </span>
                        </div>

                        <input
                          disabled={!editing}
                          defaultValue={profile.nib}
                          {...register("nib")}
                          className="form-control bg-light border-0 "
                          type="text"
                          placeholder="NIB Number"
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text border-0 bg-light text-secondary"
                            id="basic-addon1"
                          >
                            Email
                          </span>
                        </div>

                        <input
                          disabled={!editing}
                          defaultValue={profile.email}
                          {...register("email")}
                          className="form-control bg-light border-0"
                          type="text"
                          placeholder="Email"
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text border-0 bg-light text-secondary"
                            id="basic-addon1"
                          >
                            Phone
                          </span>
                        </div>
                        <input
                          disabled={!editing}
                          defaultValue={profile.phone}
                          {...register("phone")}
                          className="form-control bg-light border-0"
                          type="text"
                          placeholder="phone"
                        />
                      </div>

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
                          disabled={!editing}
                          defaultValue={profile.dob}
                          {...register("dob")}
                          className="form-control bg-light border-0"
                          type="date"
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text border-0 bg-light text-secondary"
                            id="basic-addon1"
                          >
                            Gender
                          </span>
                        </div>

                        <select
                          disabled={!editing}
                          defaultValue={profile.gender}
                          {...register("gender")}
                          className="form-control bg-light border-0"
                        >
                          <option value="">Not Selected</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text border-0 bg-light text-secondary"
                            id="basic-addon1"
                          >
                            Country of Birth
                          </span>
                        </div>

                        <select
                          disabled={!editing}
                          defaultValue={profile.country_of_birth}
                          {...register("country_of_birth")}
                          className="form-control bg-light border-0 "
                        >
                          <option value="">Not Selected</option>
                          <option value="male">USA</option>
                          <option value="female">UK</option>
                          <option value="other">CANADA</option>
                        </select>
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text border-0 bg-light text-secondary"
                            id="basic-addon1"
                          >
                            Island of Birth
                          </span>
                        </div>

                        <select
                          disabled={!editing}
                          defaultValue={profile.island_of_birth}
                          {...register("island_of_birth")}
                          className="form-control bg-light border-0 "
                        >
                          <option value="">Not Selected</option>
                          <option value="usa">USA</option>
                          <option value="uk">UK</option>
                          <option value="canada">CANADA</option>
                        </select>
                      </div>

                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text border-0 bg-light text-secondary"
                            id="basic-addon1"
                          >
                            Country of Citizenship
                          </span>
                        </div>

                        <select
                          disabled={!editing}
                          defaultValue={profile.country_of_citizenship}
                          {...register("country_of_citizenship")}
                          className="form-control bg-light border-0 "
                        >
                          <option value="">Not Selected</option>
                          <option value="usa">USA</option>
                          <option value="uk">UK</option>
                          <option value="canada">CANADA</option>
                        </select>
                      </div>
                      <textarea
                        disabled={!editing}
                        defaultValue={profile.description ?? null}
                        {...register("description")}
                        className="form-control bg-light border-0 mb-3"
                        placeholder="Description about yourself"
                        rows={5}
                      />

                      <div className="text-center">
                        {!editing && (
                          <button
                            onClick={() => setEditing(true)}
                            className="btn btn-orange me-3"
                          >
                            Edit Profile
                          </button>
                        )}
                        {editing && (
                          <input
                            className="btn btn-green"
                            type="submit"
                            value="Save changes"
                          />
                        )}
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

export default Profile;
