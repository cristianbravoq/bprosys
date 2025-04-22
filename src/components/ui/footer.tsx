import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 py-8 px-4 sm:px-8 text-sm text-gray-600 dark:text-gray-400">
      <div className="max-w-7xl text-lg text-center mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <span>
          © {new Date().getFullYear()} Mi Banco. Todos los derechos
          reservados.
        </span>
        <div className="flex space-x-4">
          <Link href="/terms" className="hover:text-primary transition-colors">
            Términos
          </Link>
          <Link href="/privacy" className="hover:text-primary transition-colors">
            Privacidad
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
};
