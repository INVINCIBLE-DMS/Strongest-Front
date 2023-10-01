import axios from "axios";

export const instance = axios.create({
  baseURL: "",
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})