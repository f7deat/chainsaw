import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const request = axios.create({
  baseURL: "http://apihoconline.getvisa.vn/client/",
}) as any;

request.interceptors.request.use(function (config: InternalAxiosRequestConfig<any>) {
  const token = localStorage.getItem("access_token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

request.interceptors.response.use(
  function (response: AxiosResponse<any, any>) {
    if (response.data) {
      // return success
      if (response.status === 200 || response.status === 201) {
        return response.data;
      }
      // reject errors & warnings
      return Promise.reject(response);
    }

    // default fallback
    return Promise.reject(response);
  },
  function (error: any) {
    if (error && error.response) {
      if (error.response.status === 401) {
        localStorage.removeItem("access_token");
      }
    }
    // if the server throws an error (404, 500 etc.)
    return error;
  }
);

export default request;
