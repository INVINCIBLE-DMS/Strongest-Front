import axios from "axios";

export const instance = axios.create({
  baseURL: "http://3.37.11.107:8080",
  timeout: "3000",
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnYW5nIiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTY5NjA5MDM3NiwiZXhwIjoxNjk2MDkzOTc2fQ.QdqiRm9isMxRE6gDh8YoKY16R_lgxWwj531d-c7gYDs"
  }
})