import apiService from "./api.service";

export const login = async (values: { email: string; password: string }) => {
  const response = await apiService.post("/auth/login", values);
  return response.data;
};

export const register = async (values: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await apiService.post("/auth/register", values);
  return response.data;
};
