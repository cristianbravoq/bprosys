import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { FinancialProductType } from "@/types/product";
import { InfoCard } from "@/components/product/info-card";

interface ProductDetailViewProps {
  product: FinancialProductType;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
}) => {
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen w-full px-4 py-8 md:p-12 gap-4">
      {/* Botón para regresar */}
      <div>
        <Link
          href="/home"
          className="underline hover:cursor-pointer hover:text-primary text-lg font-semibold md:text-xl md:px-24"
        >
          Volver atrás
        </Link>
      </div>

      {/* Contenido principal */}
      <div className="w-full flex items-center justify-center px-4 py-4 ">
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* Imagen del producto */}
          <div className="relative w-full h-[400px] lg:h-auto">
            <Image
              src={"/images/product-view.avif"}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
              priority
              className="object-cover w-full h-full"
            />
          </div>

          {/* Información del producto */}
          <div className="flex flex-col justify-between p-8 gap-6">
            {/* Título y descripción */}
            <div>
              <h1 className="text-4xl font-extrabold text-primary tracking-tight">
                {product.name}
              </h1>
              <p className="text-muted-foreground text-lg mt-2 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Atributos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoCard label="Tipo" value={product.type} />
              <InfoCard label="Categoría" value={product.category} />
              <InfoCard
                label="Riesgo"
                value={product.riskLevel}
                className={
                  product.riskLevel === "Alto"
                    ? "text-red-600"
                    : product.riskLevel === "Medio"
                    ? "text-yellow-600"
                    : "text-green-600"
                }
              />
              {product.interestRate && (
                <InfoCard
                  label="Tasa de interés"
                  value={`${product.interestRate}% ${
                    product.interestFixed ? "(Fija)" : "(Variable)"
                  }`}
                />
              )}
              {product.term && <InfoCard label="Plazo" value={product.term} />}
              {product.currency && (
                <InfoCard label="Moneda" value={product.currency} />
              )}
            </div>

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div>
                <h3 className="text-md font-semibold text-foreground mb-2">
                  Etiquetas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="hover:scale-105 transition-transform text-sm rounded-full px-3 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
