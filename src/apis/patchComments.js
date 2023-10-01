import { instance } from "./axios";

export const patchComments = async (id, data) => {
  return await instance.patch(`/survey-comment/${id}`, { "content": data });
}