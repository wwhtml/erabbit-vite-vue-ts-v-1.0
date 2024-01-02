import request from "@/utils/request";

export const getAllCategory = () => {
  return request.get("/home/category/head");
};

//获取轮播图资源
export const getBanner = () => {
  return request.get("/home/banner");
};

//新鲜好物
export const getNew = () => {
  return request.get("/home/new");
};

//人气推荐
export const getHot = () => {
  return request.get("/home/hot");
};

//热门品牌
export const getBrand = () => {
  return request.get("/home/brand");
};

//商品
export const getProduct = () => {
  return request.get("/home/goods");
};

//最新专题
export const getSpecial = () => {
  return request.get("/home/special");
};
