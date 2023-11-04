import axios, { AxiosResponse } from "axios";

export const API_HOST = process.env.API_HOST;

const server = axios.create({
  baseURL: process.env.API_HOST,
});


server.interceptors.response.use(
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
      // if the server throws an error (404, 500 etc.)
      return error;
    }
  );

export default server;