import { fetchMockProducts } from "@/data/data-products";
import { ProductDetailView } from "@/views/product-detail-view";
import { notFound } from "next/navigation";

// metadata
export const metadata = {
  title: "Mi Banco - Detalle del Producto",
  description: "Detalles del producto financiero.",
};

type Params = Promise<{ id: string }>;

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;
  
  const products = await fetchMockProducts();
  const product = products.find((p) => p.id === id);

  if (!product) return notFound();

  return <ProductDetailView product={product} />;
}