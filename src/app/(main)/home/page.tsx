import { fetchMockProducts } from "@/data/data-products";
import { HomeView } from "@/views/home-view";

// metadata
export const metadata = {
  title: "Mi Banco - Home",
  description: "Bienvenido a Mi Banco, donde la confianza financiera comienza.",
};

export default async function HomePage() {
  const products = await fetchMockProducts();

  return <HomeView products={products} />;
}
