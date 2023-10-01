import { instance } from "./axios";

export const postComments = async (id, data) => {
  return await instance.post(`/survey-comment/${id}`, { "content": data });
}