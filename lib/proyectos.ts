export interface Desafio {
  titulo: string
  descripcion: string
}

export interface Testimonio {
  texto: string
  autor: string
  cargo: string
  empresa: string
}

export interface Proyecto {
  id: number
  slug: string
  titulo: string
  descripcion: string
  descripcionDetallada: string
  imagen: string
  imagenes?: string[]
  tecnologias: string[]
  cliente: string
  año: string
  duracion: string
  rol: string
  enlaceDemo?: string
  enlaceRepositorio?: string
  desafios: Desafio[]
  testimonios?: Testimonio[]
}

const proyectos: Proyecto[] = [
  {
    id: 1,
    slug: "ecommerce",
    titulo: "Plataforma E-commerce",
    descripcion: "Tienda online completa con carrito de compras, pagos y gestión de productos.",
    descripcionDetallada:
      "Desarrollo de una plataforma de comercio electrónico completa para una tienda de joyería minimalista. El proyecto incluye un catálogo de productos, sistema de carrito de compras, pasarela de pagos integrada con Stripe, gestión de inventario y panel de administración para el cliente. La plataforma está optimizada para dispositivos móviles y ofrece una experiencia de usuario fluida y elegante, acorde con la estética minimalista de la marca.",
    imagen: "/minimalist-jewelry-display.png",
    imagenes: [
      "/ecommerce-detail-1.png",
      "/ecommerce-detail-2.png",
      "/ecommerce-detail-3.png",
      "/ecommerce-detail-4.png",
    ],
    tecnologias: ["Next.js", "Tailwind CSS", "Stripe", "Prisma", "PostgreSQL"],
    cliente: "Joyería Minimalista",
    año: "2023",
    duracion: "3 meses",
    rol: "Desarrollador Full Stack",
    enlaceDemo: "https://ejemplo.com/demo-ecommerce",
    enlaceRepositorio: "https://github.com/usuario/ecommerce-project",
    desafios: [
      {
        titulo: "Integración de pagos",
        descripcion:
          "Uno de los principales desafíos fue implementar un sistema de pagos seguro y eficiente. Utilicé la API de Stripe para procesar pagos y webhooks para gestionar eventos como pagos exitosos, fallidos o reembolsos.",
      },
      {
        titulo: "Optimización de rendimiento",
        descripcion:
          "Para garantizar tiempos de carga rápidos, implementé estrategias como Server-Side Rendering (SSR), Static Generation para páginas de productos, y optimización de imágenes con Next.js Image.",
      },
      {
        titulo: "Diseño responsivo",
        descripcion:
          "Crear una experiencia de usuario consistente en todos los dispositivos requirió un enfoque mobile-first y pruebas exhaustivas en diferentes tamaños de pantalla.",
      },
    ],
    testimonios: [
      {
        texto:
          "La plataforma ha transformado nuestro negocio, permitiéndonos llegar a clientes de todo el país con una experiencia de compra excepcional.",
        autor: "María Rodríguez",
        cargo: "Directora",
        empresa: "Joyería Minimalista",
      },
    ],
  },
  {
    id: 2,
    slug: "dashboard",
    titulo: "Dashboard Analítico",
    descripcion: "Panel de control para visualización de datos y métricas empresariales.",
    descripcionDetallada:
      "Diseño y desarrollo de un dashboard analítico para una empresa de marketing digital que necesitaba visualizar métricas clave de rendimiento (KPIs) en tiempo real. El dashboard incluye gráficos interactivos, tablas de datos, filtros personalizables y la capacidad de exportar informes en diferentes formatos. La interfaz se diseñó siguiendo principios de visualización de datos efectiva, priorizando la claridad y la facilidad de interpretación.",
    imagen: "/clean-data-overview.png",
    imagenes: ["/dashboard-detail-1.png", "/dashboard-detail-2.png"],
    tecnologias: ["React", "D3.js", "Firebase", "Material-UI", "Redux"],
    cliente: "Agencia de Marketing Digital",
    año: "2022",
    duracion: "2 meses",
    rol: "Desarrollador Frontend",
    enlaceDemo: "https://ejemplo.com/demo-dashboard",
    enlaceRepositorio: "https://github.com/usuario/dashboard-project",
    desafios: [
      {
        titulo: "Visualización de datos complejos",
        descripcion:
          "El principal desafío fue crear visualizaciones que pudieran representar datos complejos de manera clara y comprensible. Utilicé D3.js para crear gráficos personalizados que mostraran tendencias y patrones de manera efectiva.",
      },
      {
        titulo: "Rendimiento con grandes conjuntos de datos",
        descripcion:
          "Para manejar grandes volúmenes de datos sin afectar el rendimiento, implementé técnicas como la paginación, carga diferida y memoización de componentes React.",
      },
      {
        titulo: "Actualizaciones en tiempo real",
        descripcion:
          "Implementé Firebase Realtime Database para proporcionar actualizaciones instantáneas de los datos sin necesidad de recargar la página.",
      },
    ],
    testimonios: [
      {
        texto:
          "El dashboard nos ha permitido tomar decisiones basadas en datos de manera mucho más eficiente. La visualización clara de nuestras métricas ha sido fundamental para nuestro crecimiento.",
        autor: "Carlos Méndez",
        cargo: "CEO",
        empresa: "Digital Marketing Pro",
      },
    ],
  },
  {
    id: 3,
    slug: "gestion",
    titulo: "Aplicación de Gestión",
    descripcion: "Sistema de gestión de tareas y proyectos para equipos de trabajo.",
    descripcionDetallada:
      "Desarrollo de una aplicación web para la gestión de proyectos y tareas, diseñada para equipos de trabajo remotos. La aplicación permite crear proyectos, asignar tareas a miembros del equipo, establecer fechas límite, adjuntar archivos y seguir el progreso en tiempo real. Incluye funcionalidades como tableros Kanban, gráficos de Gantt, sistema de comentarios y notificaciones, y generación de informes de productividad.",
    imagen: "/clean-workspace-app.png",
    imagenes: ["/gestion-detail-1.png", "/gestion-detail-2.png", "/gestion-detail-3.png"],
    tecnologias: ["TypeScript", "Node.js", "MongoDB", "Express", "Socket.io", "React"],
    cliente: "Startup Tecnológica",
    año: "2022",
    duracion: "4 meses",
    rol: "Desarrollador Full Stack",
    enlaceDemo: "https://ejemplo.com/demo-gestion",
    enlaceRepositorio: "https://github.com/usuario/gestion-project",
    desafios: [
      {
        titulo: "Colaboración en tiempo real",
        descripcion:
          "Implementar funcionalidades de colaboración en tiempo real fue un desafío importante. Utilicé Socket.io para permitir que múltiples usuarios vieran actualizaciones instantáneas sin conflictos.",
      },
      {
        titulo: "Arquitectura escalable",
        descripcion:
          "Diseñé una arquitectura modular y escalable utilizando microservicios para manejar diferentes aspectos de la aplicación, como autenticación, gestión de proyectos y notificaciones.",
      },
      {
        titulo: "Experiencia de usuario intuitiva",
        descripcion:
          "Crear una interfaz que fuera potente pero fácil de usar requirió múltiples iteraciones de diseño y pruebas de usabilidad con usuarios reales.",
      },
    ],
    testimonios: [
      {
        texto:
          "Esta herramienta ha revolucionado la forma en que nuestro equipo trabaja. La productividad ha aumentado significativamente desde que empezamos a utilizarla.",
        autor: "Laura Sánchez",
        cargo: "Project Manager",
        empresa: "TechStart",
      },
    ],
  },
  {
    id: 4,
    slug: "corporativo",
    titulo: "Sitio Web Corporativo",
    descripcion: "Página web para empresa con múltiples secciones y formulario de contacto.",
    descripcionDetallada:
      "Diseño y desarrollo de un sitio web corporativo para una empresa de consultoría financiera. El sitio incluye múltiples secciones como página de inicio, servicios, equipo, casos de éxito, blog y contacto. Se implementó un diseño minimalista y elegante que refleja la identidad de marca del cliente, con animaciones sutiles y transiciones fluidas para mejorar la experiencia del usuario.",
    imagen: "/minimalist-corporate-website.png",
    imagenes: ["/corporativo-detail-1.png", "/corporativo-detail-2.png"],
    tecnologias: ["HTML", "CSS", "JavaScript", "GSAP", "PHP"],
    cliente: "Consultora Financiera",
    año: "2021",
    duracion: "1.5 meses",
    rol: "Desarrollador Frontend",
    enlaceDemo: "https://ejemplo.com/demo-corporativo",
    enlaceRepositorio: "https://github.com/usuario/corporativo-project",
    desafios: [
      {
        titulo: "Optimización SEO",
        descripcion:
          "Implementé estrategias de SEO on-page como estructura semántica, metadatos optimizados, URLs amigables y optimización de velocidad de carga para mejorar el posicionamiento en buscadores.",
      },
      {
        titulo: "Animaciones fluidas",
        descripcion:
          "Utilicé la biblioteca GSAP para crear animaciones suaves y elegantes que mejoraran la experiencia del usuario sin afectar el rendimiento del sitio.",
      },
      {
        titulo: "Formulario de contacto seguro",
        descripcion:
          "Implementé un sistema de validación de formularios y protección contra spam para garantizar que los mensajes de contacto fueran legítimos y seguros.",
      },
    ],
    testimonios: [
      {
        texto:
          "El nuevo sitio web ha mejorado significativamente nuestra imagen corporativa y ha generado un aumento del 40% en las solicitudes de información a través del formulario de contacto.",
        autor: "Javier Martínez",
        cargo: "Director de Marketing",
        empresa: "FinConsult",
      },
    ],
  },
  {
    id: 5,
    slug: "blog",
    titulo: "Blog Personal",
    descripcion: "Plataforma de blog con sistema de gestión de contenidos.",
    descripcionDetallada:
      "Desarrollo de una plataforma de blog personal con un sistema de gestión de contenidos personalizado. El blog permite la publicación de artículos con formato enriquecido, categorización, etiquetas, comentarios y compartir en redes sociales. El diseño es minimalista y centrado en el contenido, con una excelente legibilidad y tiempos de carga optimizados.",
    imagen: "/minimalist-workspace.png",
    imagenes: ["/blog-detail-1.png", "/blog-detail-2.png"],
    tecnologias: ["Next.js", "MDX", "Vercel", "Tailwind CSS", "Contentful"],
    cliente: "Escritor y Desarrollador",
    año: "2021",
    duracion: "1 mes",
    rol: "Desarrollador Full Stack",
    enlaceDemo: "https://ejemplo.com/demo-blog",
    enlaceRepositorio: "https://github.com/usuario/blog-project",
    desafios: [
      {
        titulo: "Sistema de contenido flexible",
        descripcion:
          "Implementé MDX para permitir la inclusión de componentes React dentro del contenido Markdown, ofreciendo mayor flexibilidad en la presentación de artículos.",
      },
      {
        titulo: "Rendimiento y SEO",
        descripcion:
          "Utilicé la generación estática de Next.js para crear páginas HTML en tiempo de compilación, mejorando significativamente los tiempos de carga y el SEO.",
      },
      {
        titulo: "Diseño responsivo para lectura",
        descripcion:
          "Diseñé una experiencia de lectura óptima en todos los dispositivos, con especial atención a la tipografía, espaciado y contraste para mejorar la legibilidad.",
      },
    ],
    testimonios: [],
  },
  {
    id: 6,
    slug: "app-movil",
    titulo: "Aplicación Móvil",
    descripcion: "App móvil para gestión de finanzas personales.",
    descripcionDetallada:
      "Desarrollo de una aplicación móvil para la gestión de finanzas personales que permite a los usuarios registrar ingresos y gastos, categorizar transacciones, establecer presupuestos, visualizar estadísticas y recibir consejos personalizados para mejorar sus hábitos financieros. La aplicación está disponible para iOS y Android, con sincronización en la nube para acceder desde múltiples dispositivos.",
    imagen: "/clean-task-app.png",
    imagenes: ["/app-movil-detail-1.png", "/app-movil-detail-2.png", "/app-movil-detail-3.png"],
    tecnologias: ["React Native", "Redux", "Firebase", "Expo", "Victory Charts"],
    cliente: "Startup Fintech",
    año: "2020",
    duracion: "3 meses",
    rol: "Desarrollador de Aplicaciones Móviles",
    enlaceDemo: "https://ejemplo.com/demo-app-movil",
    enlaceRepositorio: "https://github.com/usuario/app-movil-project",
    desafios: [
      {
        titulo: "Experiencia multiplataforma",
        descripcion:
          "Crear una experiencia consistente y de alta calidad tanto en iOS como en Android requirió un cuidadoso diseño de componentes y pruebas exhaustivas en ambas plataformas.",
      },
      {
        titulo: "Seguridad de datos financieros",
        descripcion:
          "Implementé medidas de seguridad como cifrado de datos, autenticación biométrica y políticas de acceso restrictivas para proteger la información financiera sensible de los usuarios.",
      },
      {
        titulo: "Visualización de datos financieros",
        descripcion:
          "Diseñé gráficos y visualizaciones intuitivas utilizando Victory Charts para ayudar a los usuarios a comprender sus patrones de gasto y ahorro de un vistazo.",
      },
    ],
    testimonios: [
      {
        texto:
          "Esta aplicación ha cambiado completamente la forma en que gestiono mis finanzas. La interfaz es intuitiva y las visualizaciones me ayudan a entender realmente dónde va mi dinero.",
        autor: "Ana García",
        cargo: "Usuario",
        empresa: "FinApp",
      },
    ],
  },
]

export function getProyectoBySlug(slug: string): Proyecto | undefined {
  return proyectos.find((proyecto) => proyecto.slug === slug)
}

export function getProyectosRelacionados(slug: string, limit = 3): Proyecto[] {
  const currentProyecto = getProyectoBySlug(slug)

  if (!currentProyecto) {
    return proyectos.slice(0, limit)
  }

  // Encontrar proyectos con tecnologías similares
  const related = proyectos
    .filter((proyecto) => proyecto.slug !== slug)
    .map((proyecto) => {
      const commonTechs = proyecto.tecnologias.filter((tech) => currentProyecto.tecnologias.includes(tech))
      return {
        ...proyecto,
        commonTechsCount: commonTechs.length,
      }
    })
    .sort((a, b) => b.commonTechsCount - a.commonTechsCount)
    .slice(0, limit)

  return related
}

export function getAllProyectos(): Proyecto[] {
  return proyectos
}
