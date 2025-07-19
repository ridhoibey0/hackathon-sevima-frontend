import { instance } from "@/services";

export const http = async (method, config) => {
  try {
    const { data } = await instance({ ...config, method });
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
