import axios from "axios";

export const instance = axios.create({
  baseURL: "http://3.37.11.107:8080",
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})