"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { Button } from "./button";

const productos = [
  {
    title: "Cuentas",
    href: "/category/cuenta",
    description: "Explora productos como cuentas de ahorro o corrientes.",
  },
  {
    title: "Tarjetas",
    href: "/category/tarjeta",
    description: "Tarjetas de crédito y débito con beneficios únicos.",
  },
  {
    title: "Fondos",
    href: "/category/fondo",
    description: "Invierte en fondos de inversión y gestiona tu portafolio.",
  },
  {
    title: "Seguros",
    href: "/category/seguro",
    description: "Protege tu salud, auto y más con productos aseguradores.",
  },
];

export function MainNavigationMenu() {
  return (
    <div className="">
      {/* Desktop navigation */}
      <div className="hidden md:flex">
        <NavigationMenu className="mt-1">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                Empieza ahora
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-2xl font-medium">
                          Mi Banco
                        </div>
                        <p className="text-base leading-tight text-muted-foreground">
                          Estamos aquí para brindarle apoyo completo y
                          garantizar la protección de su dinero.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="" title="Servicios">
                    Descubre nuestro catalogo de servicios.
                  </ListItem>
                  <ListItem href="" title="Sala VIP">
                    Servicios exclusivos para clientes exclusivos.
                  </ListItem>
                  <ListItem href="" title="Proteccion">
                    Cuida a los que amas y protege tu patrimonio.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                Components
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {productos.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href="/docs"
                passHref
                className="block select-none text-xl font-medium space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                Documentation
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile navigation */}
      <div className="md:hidden flex items-center justify-between">
        {/* Menú hamburguesa */}
        <Sheet>
          <SheetTitle className="hidden">Menú</SheetTitle>
          <SheetDescription className="sr-only">
            Lista de enlaces de navegación y categorías del sitio.
          </SheetDescription>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="bg-primary">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 sm:w-80">
            <div className="mt-6 p-4">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Menú
              </h2>
              <nav className="flex flex-col gap-3 w-fit">
                <Button
                  variant={"link"}
                  className="text-base text-muted-foreground hover:text-primary transition-colors"
                >
                  Introduction
                </Button>
                <Button
                  variant={"link"}
                  className="text-base text-muted-foreground hover:text-primary transition-colors"
                >
                  Installation
                </Button>
                <Button
                  variant={"link"}
                  className="text-base text-muted-foreground hover:text-primary transition-colors"
                >
                  Typography
                </Button>

                {/* Productos u otras secciones dinámicas */}
                <div className="flex flex-col gap-4 mt-2 border-t p-4">
                  <h3 className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">
                    Categorias
                  </h3>
                  {productos.map((component) => (
                    <Button
                      variant={"link"}
                      key={component.title}
                      className="text-base text-muted-foreground hover:text-primary transition-colors w-fit"
                    >
                      {component.title}
                    </Button>
                  ))}
                </div>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-2xl font-medium leading-none">{title}</div>
          <p className="text-base leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
