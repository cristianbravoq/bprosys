import { Footer } from "@/components/ui/footer";
import { MainNavigationMenu } from "@/components/ui/nav-menu";
import Link from "next/link";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <header className="flex justify-around max-md:justify-between items-center p-4 mt-2">
        <Link href="/home" className="flex items-center">
        <h1 className="text-4xl font-bold">Mi Banco</h1>
        </Link>
        <MainNavigationMenu />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
