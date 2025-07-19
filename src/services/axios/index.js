import axios from "axios";
// import { storeData, storeToken } from "utils/helper.js";
import errorResponseHandler from "./errorResponseHandler";

const backendHost = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: backendHost,
});
// const token = localStorage.getItem('token');

// Matiin dulu untuk sementara, karna ada suatu alasan

// let userCookie = getCookie("user");
// userCookie = userCookie ? JSON.parse(userCookie) : null;
// const userToken = userCookie && userCookie.token;

// if (userToken) {
//   instance.interceptors.request.use(
//     (config) => {
//       config.headers.Authorization = userToken;
//       return config;
//     },
//     (error) => {
//       return error;
//     }
//   );
// }
// if (token) {
//   axios.defaults.headers.common['Authorization'] = 'Bearer' + token;
// }

instance.interceptors.response.use(
  (response) => response,
  errorResponseHandler
);

export default instance;
