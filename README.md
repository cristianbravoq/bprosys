## ¿Qué criterios seguiste para diseñar la UI de productos financieros?

Para el diseño de la UI me enfoqué en lograr un **balance entre claridad, jerarquía visual y confianza**. Los principales criterios fueron:

- **Claridad en la información**: Los datos clave (riesgo, tasa, tipo, plazo, etc.) se presentan como “cards” para facilitar el escaneo visual.
- **Jerarquía visual**: Tipografías grandes para títulos, texto suave para descripciones, y uso del color para destacar elementos como el nivel de riesgo.
- **Accesibilidad visual**: Contraste adecuado, componentes accesibles y diseño responsivo.
- **Consistencia de patrones UI**: Uso consistente de badges, secciones, íconos y spacing.
- **Microinteracciones suaves**: Con ayuda de `framer-motion` se logró una experiencia fluida en el renderizado y transición de elementos, dando una sensación profesional y elegante.

---

## ¿Cómo decidiste cuándo usar Tailwind y cuándo Styled Components?

Utilicé **Tailwind CSS** como sistema base de estilos por su rapidez y consistencia, ideal para prototipado visual rápido y utilidades reutilizables. Se aplicó principalmente en:

- **Layout general y spacing**
- **Colores, tipografía, grid y flex**
- **Responsive**

Usé **Styled Components** solo en casos puntuales donde:

- Se requería lógica condicional más compleja en los estilos.
- Era importante encapsular comportamiento visual por componente.
- El componente iba a escalar y necesitaba mantener una firma visual clara y aislada del resto del diseño.

---

## ¿Qué harías para escalar este proyecto en una aplicación real de banca digital?

Para escalarlo a una app bancaria real:

- **Diseño de sistema de diseño (Design System)**: Extraería los componentes clave como `Badge`, `Card`, `Tag`, `Modal`, `Input`, etc., en una librería compartida, para esto recomendaria un monorepo en nx, nos brinda la capacidad de trabajar con microfrontends, compartir librerias, y permite trabajar con equipos de desarrollo agil facilmente.
- **Internacionalización y accesibilidad**: Incorporaría `react-i18next` o `next-intl` desde el inicio y aplicaría roles y navegación con teclado.
- **Autenticación y permisos**: Integración con OpenID Connect / OAuth2 (ej: Auth0 o Keycloak), manejo de roles y scopes.
- **Flujos transaccionales seguros**: Aseguraría manejo robusto de formularios (zod, react-hook-form, yup), validaciones, y feedback del usuario.
- **Manejo de estado robusto**: Zustand y/o React Query, dependiendo del tipo de datos, junto con middlewares custom para persistencia o auditoría.

---

## ¿Qué herramientas usarías para mejorar el rendimiento y monitoreo en producción?

- **Lazy loading de módulos y recursos** (`next/dynamic`)
- **Code splitting automático con Next.js**
- **Optimización de imágenes con `next/image`**
- **Pre-caching de datos con SWR o React Query + SSR**
- **Logging estructurado**: Sentry (errores de frontend) y LogRocket o Highlight.io (session recording).
- **APM tools**: Datadog, NewRelic o incluso Prometheus + Grafana para backend.
- **Analítica de uso**: Mixpanel o PostHog para evaluar cómo interactúan los usuarios con los productos.
- **Testing y CI/CD**: Cypress para pruebas E2E, Jest para unit testing, GitHub Actions para integración continua.

---


# Iniciar el Proyecto Localmente

Guía para ejecutar el proyecto de productos financieros en tu entorno local de desarrollo.

## Requisitos Previos

- [Node.js](https://nodejs.org/) v18 o superior
- [npm](https://www.npmjs.com/) v9 o superior (o [pnpm](https://pnpm.io/) si lo preferís)
- Git instalado

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo

npm install
npm run dev

src/
│
├── app/                # Rutas de la aplicación (Next.js App Router)
│   ├── (main)/         # Secciones públicas (home, product detail)
│   └── not-found.tsx   # Página 404
│
├── components/         # Componentes reutilizables
│
├── data/               # Datos mockeados o estáticos
│
├── store/              # Estado global (Zustand)
│
├── lib/                # Utilidades compartidas
│
├── views/              # Vistas específicas de páginas
└── types/              # Tipos TypeScript

npm run lint       # Ejecutar el linter
npm run build      # Compilar el proyecto
npm run start      # Iniciar el proyecto en modo producción
```
