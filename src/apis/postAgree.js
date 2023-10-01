import { instance } from "./axios";

export const postAgree = async (id) => {
  return await instance.post(`/agree/${id}`);
}