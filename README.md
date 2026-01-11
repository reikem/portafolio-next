# Proyecto Portfolio Next

Un portfolio interactivo y cinematográfico construido con Next.js 14, utilizando la libreríaGSAP y React. Presenta animaciones complejas inspiradas en GTA 6, efectos parallax avanzados y soporte multiidioma.

## Características Principales

### Animaciones y Efectos

- **Animaciones GSAP Cinematográficas**: Transiciones suaves y efectos visuales complejos inspirados en videojuegos AAA
- **Efectos Parallax Multicapa**: Profundidad y movimiento dinámico en todas las secciones
- **ScrollTrigger Avanzado**: Animaciones activadas por scroll con control preciso
- **Modales Animados**: Transiciones 3D y efectos de entrada/salida elaborados

### Funcionalidades

- **Sistema Multiidioma**: Soporte para 6 idiomas (Español, Inglés, Japonés, Alemán, Italiano, Chino Mandarín)
- **Sistema de Contacto**: Formulario funcional con React Email y Resend
- **Sistema de Notificaciones**: Toast notifications personalizadas
- **Easter Egg de Assassin's Creed**: Modal interactivo con acertijos temáticos
- **Diseño Responsivo**: Optimizado para todos los dispositivos

### Secciones

- **Hero**: Presentación cinematográfica con efectos parallax
- **About**: Información personal con skills animados
- **Projects**: Galería de proyectos con modales detallados
- **Education**: Timeline educativo con animaciones 3D
- **Contact**: Formulario funcional con validación

## Stack Tecnológico

### Frontend

- **Next.js 14**: Framework React con App Router
- **React 19**: Biblioteca UI
- **TypeScript**: Tipado estático
- **Tailwind CSS 4**: Estilos utility-first
- **GSAP 3**: Animaciones profesionales
- **SHADCN**: Componentes visuales
- **Lucide React**: Iconos modernos

### Backend y Servicios

- **React Email**: Templates de email
- **Resend**: Servicio de envío de emails
- **Vercel Analytics**: Análisis de tráfico

### UI Components

- **Radix UI**: Componentes accesibles
- **shadcn/ui**: Sistema de diseño
- **React Hook Form**: Manejo de formularios

## Instalación

### Prerrequisitos

- Node.js 18.17 o superior
- npm o yarn o pnpm

### Pasos de Instalación

1. Clona el repositorio:
```bash
git clone <https://github.com/reikem/portafolio-next.git>
cd portafolio-next
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. Configura las variables de entorno:

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Resend API Key (para el formulario de contacto)
RESEND_API_KEY=tu_api_key_aqui
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Configuración

### Email

Para habilitar el formulario de contacto:

1. Regístrate en [Resend](https://resend.com)
2. Obtén tu API Key
3. Agrégala a `.env.local` como `RESEND_API_KEY`
4. Los emails se enviarán a: jimmymeneses11@gmail.com

### Personalización

#### Proyectos

Edita el array `projects` en `app/page.tsx`:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: "Tu Proyecto",
    description: "Descripción corta",
    image: "/path/to/image.jpg",
    tags: ["React", "Node.js"],
    fullDescription: "Descripción completa...",
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com/user/repo",
    color: "from-purple-600 to-pink-600",
    category: "Web Application",
  },
]
```

#### Skills

Edita el array `skills` en `app/page.tsx`:

```typescript
const skills: Skill[] = [
  { name: "React", level: 95, category: "Frontend", icon: "⚛️" },
  // Agrega más skills...
]
```

#### Educación

Edita el array `education` en `app/page.tsx`:

```typescript
const education: Education[] = [
  {
    title: "Tu Título",
    institution: "Tu Institución",
    year: "2020 - 2024",
    description: "Descripción...",
    type: "degree", // degree, certification, course
  },
]
```

### Traducciones

Para agregar o modificar traducciones, edita `lib/translations.ts`:

```typescript
export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      // ...
    },
  },
  // Agrega más idiomas...
}
```

## Estructura del Proyecto

```
gsap-portfolio/
├── app/
│   ├── api/
│   │   └── send-email/
│   │       └── route.ts          # API endpoint para envío de emails
│   ├── globals.css               # Estilos globales y tokens de diseño
│   ├── layout.tsx                # Layout principal con providers
│   └── page.tsx                  # Página principal del portfolio
├── components/
│   ├── navigation.tsx            # Barra de navegación
│   ├── heroSection.tsx          # Sección hero
│   ├── aboutSection.tsx         # Sección sobre mí
│   ├── projectsSection.tsx      # Galería de proyectos
│   ├── projectCard.tsx          # Card de proyecto
│   ├── projectModal.tsx         # Modal de detalles de proyecto
│   ├── educationSection.tsx     # Sección de educación
│   ├── contactSection.tsx       # Formulario de contacto
│   ├── contactStatusModal.tsx   # Modal de estado de envío
│   ├── assassinModal.tsx        # Easter egg de Assassin's Creed
│   ├── languageSelector.tsx     # Selector de idioma
│   ├── toaster.tsx               # Sistema de notificaciones
│   └── emails/
│       └── contact-email.tsx     # Template de email
├── core/
│   ├── data/
│   │     └──index.ts             # Información de education, skills y projects
│   ├── interface/
│   │     └──index.ts             # Interfaces de formulario,education,skill y project
├── contexts/
│   ├── languageContext.tsx      # Contexto de idioma
├── lib/
│   ├── translations.ts           # Traducciones en 6 idiomas
│   ├── useToast.ts               # Hook de notificaciones
│   └── utils.ts                  # Utilidades (cn, etc.)
└── public/                       # Archivos estáticos
```

## Uso

### Navegación

- Click en los enlaces del navbar para navegar entre secciones
- Scroll suave automático
- Indicador visual de sección activa

### Cambio de Idioma

- Click en el selector de idioma en el navbar
- Selecciona entre 6 idiomas disponibles
- Los cambios se aplican instantáneamente


### Easter Egg

- Click 5 veces en "PORTFOLIO" en el navbar
- Aparecerá un modal con acertijos de Assassin's Creed
- Responde correctamente para revelar mensajes especiales

### Formulario de Contacto

- Completa el formulario
- Click en enviar
- Aparecerá un modal confirmando el envío
- El formulario se limpia automáticamente

## Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm run start

# Linting
npm run lint
```

## Despliegue

### Otros Servicios

El proyecto es compatible con cualquier plataforma que soporte Next.js:

- Netlify
- AWS Amplify
- Railway
- Render

Asegúrate de configurar las variables de entorno en tu plataforma.

## Soporte de Navegadores

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Contacto

Email: jimmymeneses11@gmail.com
---

