interface TopCategory {
  id: string;
  name: string;
  picture?: any;
  children: Child[];
}

interface Child {
  id: string;
  name: string;
  picture: string;
  parentId?: any;
  parentName?: any;
  goods: Good[];
  categories?: any;
  brands?: any;
  saleProperties?: any;
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
