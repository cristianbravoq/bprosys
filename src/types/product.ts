export const ProductTypes = [
  "Cuenta",
  "Tarjeta",
  "Fondo",
  "Seguro",
] as const;

export type ProductType = typeof ProductTypes[number];

export const ProductCategories = [
  "Nómina",
  "Crédito",
  "Inversión",
  "Vida",
  "Salud",
  "Ahorro",
  "Auto",
] as const;

export type ProductCategoryType = typeof ProductCategories[number];

export type ProductCategoryFilterType = ProductCategoryType | "Todos";

export type RiskLevelType = "Bajo" | "Medio" | "Alto";

export interface FinancialProductType {
  id: string;
  name: string;
  description: string;
  type: ProductType;
  category: ProductCategoryType;
  interestRate?: number;
  interestFixed?: boolean;
  term?: string; // Ej: "12 meses", "Sin plazo fijo"
  currency: "MXN" | "USD" | "EUR";
  cat?: number; // Costo Anual Total
  riskLevel: RiskLevelType;
  requirements?: string[];
  tags?: string[];
}
