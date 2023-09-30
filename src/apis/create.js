import { instance } from "./axios";

export const create = async (data) => {
  const response = await instance.post("/survey", data);
  return response;
};
