interface Category {
  id: string;
  name?: string;
  picture?: string;
  children?: Child[];
  goods?: Good[];
}

interface Good {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum?: any;
}

interface Child {
  id: string;
  name: string;
  picture: string;
  children?: any;
  goods?: any;
}
//轮播图
interface Banner {
  id: string;
  imgUrl: string;
  hrefUrl: string;
  type: string;
}
//新鲜好物
interface New {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum: number;
}

//人气推荐
interface Hot {
  id: string;
  picture: string;
  title: string;
  alt: string;
}

//品牌
interface Brand {
  id: string;
  name: string;
  nameEn: string;
  logo: string;
  picture: string;
  type?: any;
  desc: string;
  place: string;
}

//product
interface Product {
  id: string;
  name: string;
  picture: string;
  saleInfo: string;
  children: Child[];
  goods: Good[];
}

interface Good {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum: number;
}

interface Child {
  id: string;
  name: string;
  layer: number;
  parent?: any;
}

//最新专题
interface Special {
  creator: string;
  isDelete: number;
  createTime: string;
  updateTime: string;
  id: string;
  classificationId: string;
  title: string;
  summary: string;
  lowestPrice: number;
  cover: string;
  detailsUrl: string;
  collectNum: number;
  viewNum: number;
  replyNum: number;
}
