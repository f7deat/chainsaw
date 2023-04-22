import axios from "axios";

const request = axios.create({
  baseURL: "https://apihoconline.getvisa.vn/client/"
});

request.interceptors.request.use(function (config) {
  const token = localStorage.getItem('access_token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default request;