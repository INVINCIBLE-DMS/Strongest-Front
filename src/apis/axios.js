import axios from "axios";

export const instance = axios.create({
  baseURL: "3.37.11.107:8080",
  timeout: "3000",
});
