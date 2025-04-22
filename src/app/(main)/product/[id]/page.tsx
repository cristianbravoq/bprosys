import { fetchMockProducts } from "@/data/data-products";
import { ProductDetailView } from "@/views/product-detail-view";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

export const metadata: Metadata = {
  title: "Mi Banco - Detalle del Producto",
  description: "Detalles del producto financiero.",
};

export default async function ProductDetailPage({ params }: Props) {
  const products = await fetchMockProducts();
  const product = products.find((p) => p.id === params.id);

  if (!product) return notFound();

  return <ProductDetailView product={product} />;
}
