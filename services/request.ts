import axios from "axios";

const request = axios.create({
  baseURL: "https://apihoconline.getvisa.vn/client/"
});

request.interceptors.request.use((config) => ({
  ...config,
}), null, { synchronous: true });

export default request;