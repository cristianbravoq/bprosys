"use client";
import { ProductCard } from "@/components/product/product-card";
import { ProductCategoryFilter } from "@/components/product/product-category-filter";
import { useProductFilter } from "@/store/useProductFilter";
import { FinancialProductType } from "@/types/product";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface ProductGridProps {
  products: FinancialProductType[];
}

export const HomeView: React.FC<ProductGridProps> = ({ products }) => {
  const { category } = useProductFilter();

  const filteredProducts =
    category === "Todos"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className="p-8 pb-20 sm:p-14 font-[family-name:var(--font-geist-sans)] overflow-y-auto my-5">
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4 md:gap-6 px-4 max-w-6xl mx-auto">
        {/* Texto */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Acerca de Mi Banco
          </h1>
          <span className="text-xl block leading-snug max-w-xl">
            Rediseñamos las barreras financieras para que cada persona tome
            decisiones con confianza.
          </span>
        </motion.div>

        {/* Imagen */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <Image
            src="/images/landing-home.avif"
            alt="Hero Image"
            width={500}
            height={400}
            className="rounded-xl shadow-xl object-cover"
            priority
          />
        </motion.div>
      </div>

      <ProductCategoryFilter />

      <motion.div
        layout
        className="grid grid-cols-[repeat(auto-fit,minmax(300px,350px))] justify-center gap-6 w-full max-w-7xl mx-auto px-4 py-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
