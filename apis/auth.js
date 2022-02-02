import axios from "./axios";

export async function login(data) {
  const res = await axios.post("/login", data);
  return res.data;
}

export async function signup(data) {
  const res = await axios.post("/signup", data);
  return res.data;
}

export async function verifyToken() {
  const res = await axios.post("/verify-token", {
    user_id: store.get("user").id,
  });
  return res.data;
}

export async function logout() {
  const res = await axios.get("/logout");
  return res.data;
}
