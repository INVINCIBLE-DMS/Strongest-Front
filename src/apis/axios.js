import axios from "axios";

export const instance = axios.create({
  baseURL: "",
  timeout: "3000",
  headers: {
    Authorization: ""
  }
})