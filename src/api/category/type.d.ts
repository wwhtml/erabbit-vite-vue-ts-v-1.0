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

/* erjifenlei  */
interface SecondCategory {
  id: string;
  name: string;
  picture?: any;
  parentId: string;
  parentName: string;
  goods: Good[];
  categories: Category[];
  brands: Brand[];
  saleProperties: SaleProperty[];
}

interface SaleProperty {
  id: string;
  name: string;
  properties: Property[];
}

interface Property {
  id: string;
  name: string;
  selectedProp: boolean;
}

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

interface Category {
  id: string;
  name: string;
  layer: number;
  parent?: any;
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
