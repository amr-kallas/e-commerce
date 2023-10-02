import ax from "axios";
import { API_BASE_URL } from "../constants/domain";

const axios=ax.create({
  baseURL:API_BASE_URL
})
axios.interceptors.request.use(
  (config) => {
    config.headers["Accept"] = `*/*`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
axios.interceptors.response.use((res) => {
  return res;
});

export default axios;
