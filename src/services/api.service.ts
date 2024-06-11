import axios, { AxiosError } from "axios";

const baseURL = "http://localhost:3000/api";
const apiService = axios.create({ baseURL, withCredentials: true }); // Set withCredentials to true

const handleInterceptorsError = (error: AxiosError) => {
  console.log("error", error.response);

  return Promise.reject(error);
};
apiService.interceptors.request.use((request) => {
  console.log("requestId", request.headers.requestId);
  console.log("request.url", request.baseURL! + request.url);
  console.log("request.method", request.method);
  console.log("request.data", JSON.stringify(request.data));
  console.log("request.headers", JSON.stringify(request.headers));
  return request;
}, handleInterceptorsError);

apiService.interceptors.response.use((response) => {
  console.log("requestId", response.config.headers.requestId);
  console.log("response.headers", JSON.stringify(response.headers));
  console.log(
    "response.request.headers",
    JSON.stringify(response.config.headers)
  );
  console.log("response.status", response.status);
  console.log("response.data", JSON.stringify(response.data));
  return response;
}, handleInterceptorsError);

export default apiService;
