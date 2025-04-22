// components/ProductCategoryFilter.tsx
"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useProductFilter } from "@/store/useProductFilter";
import { ProductCategories, ProductCategoryFilterType } from "@/types/product";
import { motion } from "framer-motion";

const categories = ["Todos", ...ProductCategories] as const;

export const ProductCategoryFilter = () => {
  const { category, setCategory } = useProductFilter();

  return (
    <div className="w-full text-center overflow-x-auto mb-6">
      <ToggleGroup
        type="single"
        value={category}
        className="inline-flex gap-2 border-2 border-gray-200 rounded-lg p-2 bg-white shadow-md whitespace-nowrap"
        onValueChange={(value: ProductCategoryFilterType) =>
          value && setCategory(value)
        }
      >
        {categories.map((cat) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <ToggleGroupItem
              className="text-base sm:text-xl min-w-fit px-4 py-2"
              value={cat}
            >
              {cat}
            </ToggleGroupItem>
          </motion.div>
        ))}
      </ToggleGroup>
    </div>
  );
};
