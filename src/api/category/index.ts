import request from "@/utils/request";

export const findTopCategory = (id: string) => {
  return request.get(`/category/?id=${id}`);
};
export const findSecondCategoryFilter = (id: string) => {
  return request.get(`/category/sub/filter?id=${id}`);
};
