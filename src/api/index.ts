import axios, { RawAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
import { refreshTokenService } from "../services/refreshToken.service";

const api = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_ROOT_API_URL,
  baseURL: "baseUrl",
  timeout: 6000,
  validateStatus: (status) => status >= 200 && status < 300,
});

// TODO: Add interceptors when token is expired.
api.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 403) {
      const refreshToken = Cookies.get("refresh");
      const response = await refreshTokenService({
        data: {
          refresh_token: refreshToken,
        },
      });
      const newToken = response.data.data.token;
      const newRefreshToken = response.data.data.refreshToken;
      Cookies.set("token", newToken);
      Cookies.set("refresh", newRefreshToken);
    }

    return Promise.reject(error);
  }
);

const apiRequest = async (config: RawAxiosRequestConfig, withToken = false) => {
  try {
    // * Current implementation only handles client side request with authorization
    // * Need to access server cookies if we want to fetch data using SSR with authorization
    const token = Cookies.get("token");
    if (withToken) {
      if (token) {
        config.headers = {
          Authorization: `${token}`,
        };
      }
    }
    const response = await api.request(config);
    return response;
  } catch (err: any) {
    const responseErrorMessage = err?.response?.data?.message;
    throw new Error(
      responseErrorMessage ||
        "Er is iets misgegaan. Probeer het opnieuw of neem contact op met ons team"
    );
  }
};

export default apiRequest;
