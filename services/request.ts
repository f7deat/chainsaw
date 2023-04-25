import axios from "axios";

const request = axios.create({
  baseURL: "https://apihoconline.getvisa.vn/client/",
});

request.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("access_token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  }
);

request.interceptors.response.use(
  function (response) {
    if (response.data) {
      // return success
      if (response.status === 200 || response.status === 201) {
        return response;
      }
      // reject errors & warnings
      return Promise.reject(response);
    }

    // default fallback
    return Promise.reject(response);
  },
  function (error) {
    // if the server throws an error (404, 500 etc.)
    return Promise.reject(error);
  }
);

export default request;
