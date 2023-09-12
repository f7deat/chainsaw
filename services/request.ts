import { message } from "antd";
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

export const API_HOST = process.env.API_HOST;

const request = axios.create({
  baseURL: process.env.API_HOST,
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
        const token = localStorage.getItem("access_token");
        if (!token) {
          window.location.href = '/tai-khoan/dang-nhap'
        } else {
          message.error('Bạn không có quyền truy cập!')
        }
      } else if (error.response.status === 400) {
        message.error(error.response.data);
        return;
      }
    }
    // if the server throws an error (404, 500 etc.)
    return error;
  }
);

export default request;
