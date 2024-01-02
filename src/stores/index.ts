import { defineStore } from "pinia";
import { getAllCategory } from "@/api/home/index";

interface CategoryState {
  list?: Category[];
}

export const useCategoryStore = defineStore("category", {
  state: (): CategoryState => {
    return {
      list: []
    };
  },
  actions: {
    async getCategoryLsit() {
      const res: ResData<Category[]> = await getAllCategory();
      this.list = res.result;
    }
  }
});
