import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FinancialProductType } from "@/types/product";
import Link from "next/link";

export function ProductCard({ product }: { product: FinancialProductType }) {
  return (
    <Card className="hover:shadow-lg transition">
      <CardHeader>
        <CardTitle className="text-2xl">{product.name}</CardTitle>
        <CardDescription className="text-xl">{product.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href={`/product/${product.id}`}>
          <Button variant={"outline"} size="sm" className="text-xl">Ver más</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
