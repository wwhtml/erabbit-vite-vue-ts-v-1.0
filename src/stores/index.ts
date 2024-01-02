import { defineStore } from "pinia";
import { getAllCategory } from "@/api/home/index";
import { topCategory } from "@/api/constants";

const topHead = topCategory.map((item: string) => ({ name: item, id: item }));

interface CategoryState {
  list?: Category[];
}

export const useCategoryStore = defineStore("category", {
  state: (): CategoryState => {
    return {
      list: topHead
    };
  },
  actions: {
    async getCategoryLsit() {
      const res: ResData<Category[]> = await getAllCategory();
      this.list = res.result;
    }
  }
});
