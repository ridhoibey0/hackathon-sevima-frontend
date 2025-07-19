import axios from "./axios";

export const authLogin = (email, password) => {
  return axios.post("/login", {
    email,
    password,
  });
};

export const logout = () => {
  axios.post("/logout", null, {
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  });
  return localStorage.clear();
};
