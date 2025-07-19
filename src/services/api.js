import axios from "./axios";

export const createComplain = (formData) => {
  return axios.post("/create/complaint", formData, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.token}`
    }
  })
}

export const getHistoryComplain = () => {
  return axios.get("/history/complaint", {
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${localStorage.token}`
    }
  })
}