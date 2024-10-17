import { RawAxiosRequestConfig } from "axios";
import apiRequest from "../api/index";

export const refreshTokenService = (config?: RawAxiosRequestConfig) => {
  return apiRequest({
    ...config,
    url: "/auth/refresh-token",
    method: "POST",
  });
};
