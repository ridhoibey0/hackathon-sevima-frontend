import axios from "axios";

export const instance = axios.create({
  // process env
  baseURL: "YOUR ENV",
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    const setToken = config;

    if (token) {
      setToken.headers.Authorization = `Beareer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const customError = {
      ...error,
      message: error?.response?.data?.message,
      statusCode: error?.response?.status,
    };

    return Promise.reject(customError);
  }
);
