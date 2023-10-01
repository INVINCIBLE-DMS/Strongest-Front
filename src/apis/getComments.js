import { instance } from "./axios";

export const getComments = async (id) => {
  return await instance.get(`/survey-comment/${id}`);
}