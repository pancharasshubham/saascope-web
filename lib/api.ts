import axios from "axios";

const apiUrl =
  process.env.NEXT_PUBLIC_API_URL;

console.log(
  "API FILE URL:",
  apiUrl
);

export const api = axios.create({
  baseURL: apiUrl,
});

console.log(
  "AXIOS BASE URL:",
  api.defaults.baseURL
);

api.interceptors.request.use((config) => {
  console.log(
    "REQUEST URL:",
    config.baseURL,
    config.url
  );

  if (typeof window !== "undefined") {
    const token =
      localStorage.getItem("token");

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }
  }

  return config;
});