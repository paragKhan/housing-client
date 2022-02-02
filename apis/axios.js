import axiosBase from "axios";
import store from "store";

const token = store.get("token");

const axios = axiosBase.create({
  baseURL: process.env.API_URL,
});

axios.defaults.headers.common["Authorization"] = "Bearer " + token;

export default axios;
