import axios from "./axios";

export const getProfileData = async () => {
  const response = await axios.get("/profile");
  return response.data;
};

export const updateProfileData = async (data) => {
  const response = await axios.post("/profile", data);
  return response.data;
};
