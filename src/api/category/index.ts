import request from "@/utils/request";

export const findTopCategory = (id: string) => {
  return request.get(`/category/?id=${id}`);
};
