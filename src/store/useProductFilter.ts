import { ProductCategoryFilterType } from "@/types/product";
import { create } from "zustand";

interface ProductFilterState {
  category: ProductCategoryFilterType;
  setCategory: (category: ProductCategoryFilterType) => void;
}

export const useProductFilter = create<ProductFilterState>((set) => ({
  category: "Todos",
  setCategory: (category) => set({ category }),
}));
