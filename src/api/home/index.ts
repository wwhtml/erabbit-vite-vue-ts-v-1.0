import request from "@/utils/request";

export const getAllCategory = () => {
  return request.get("/home/category/head");
};
