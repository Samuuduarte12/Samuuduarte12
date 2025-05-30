export interface Desafio {
  titulo: string
  desafio: string
  solucion: string
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
    slug: "somos-jardin-cursos",
    titulo: "Somos Jardin - Plataforma de Cursos",
    descripcion: "Diseño y maquetación de una plataforma de venta de cursos.",
    descripcionDetallada:
    "Colaboré en el diseño (mobile y desktop) y maquetación de varias pantallas para la plataforma educativa Somos Jardín. Se implementaron vistas responsivas y un diseño amigable para usuarios que acceden desde diferentes dispositivos.", 
    imagen: "/somos-jardin.png",
    imagenes: [
      "/somos-jardin-detail-1.png",                
    ],
    tecnologias: ["Next.js", "Tailwind", "JavaScript", "Firebase", "Figma"],
    cliente: "Proyecto desarrolado con LFT Labs",
    año: "2024",
    duracion: "2 meses",
    rol: "Frontend Developer",
    enlaceDemo: "https://somos-jardinweb.vercel.app/cursos",    
    desafios: [
      {
        titulo: "Diseño de la home y login",
        desafio:
          "Diseñé las pantallas de la home y el login y luego desarrollé las vistas utilizando Next.js, TailwindCSS y JavaScript.",
        solucion: ""
      },          
    ],    
  },
  {
    id: 2,  
    slug: "black-deer-films",
    titulo: "Black Deer Films - Sitio web Productora Audiovisual",
    descripcion: "Diseño y desarrolo completo de sitio web para productora audiovisual.",
    descripcionDetallada:
      "Diseñé y desarrollé por completo el sitio web de Black Deer Films, para una productora audiovisual. El proyecto incluye diseño responsivo y esta desarrollado con Next.js, Tailwind y Firebase.",
    imagen: "/black-deer-films.png",
      imagenes: [
        "/black-deer-films-2.png",        
        "/black-deer-films-1.png",                
        
      ],
      tecnologias: ["Next.js", "Tailwind", "JavaScript", "Firebase", "Figma"],
      cliente: "Proyecto desarrolado con LFT Labs",
      año: "2024",
      duracion: "2 meses",
      rol: "Frontend Developer",
      enlaceDemo: "https://black-deer-films.vercel.app/",      
      desafios: [                
        {
          titulo: "Gestión de secciones con contenidos multimedia",
          desafio:
            "Desarrollé un formulario que permite agregar múltiples secciones multimedia, y agregar el contenido de las secciones como imágenes y videos de you tube mediante la URLs de video.",
          solucion: ""
        },
        {
          titulo: "Panel de administracion",
          desafio:
            "Desarrolle un panel de administracion en donde se puede modificar las secciones, el contenido de las secciones, la informacion de la biografias y las redes sociales.",
          solucion: ""
        },        
      ],       
  },  
  {
    id: 3,  
    slug: "somos-jardin-landing-page",
    titulo: "Somos Jardín - Landing Page",
    descripcion: "Landing promocional conectada a la plataforma de cursos.",
    descripcionDetallada:
      "Diseñé y desarrollé una landing page responsive para Somos Jardín con fines promocionales. La misma se integró directamente al sistema de compra de cursos. El foco fue crear una experiencia visual atractiva y fluida.",
    imagen: "/somos-jardin-landing.png",
      imagenes: [                         
      ],
      tecnologias: ["Next.js", "Tailwind", "JavaScript", "Firebase", "Figma"],
      cliente: "Proyecto desarrolado con LFT Labs",
      año: "2024",
      duracion: "1 meses",
      rol: "Frontend Developer",
      enlaceDemo: "https://somos-jardinweb.vercel.app/",      
      desafios: [                
        {
          titulo: "Diseñar y Conectar la landing con la venta de cursos",
          desafio:
            "Diseñe la pantalla en figma y conecte la landing moviendo la antigua home a una ruta independiente (`/cursos`), y estableciendo la nueva landing como página principal (`/`) y adaptar todos los enlaces para que dirijan correctamente a los detalles y compra de cada curso.",
          solucion: ""
        },    
      ],       
  },
  {
    id: 4,
    slug: "dar-app-finanzas",
    titulo: "Dar-App - Sistema Financiero y control del personal",
    descripcion: "Sistema interno de finanzas y empleados para empresa de logística.",
    descripcionDetallada:
      "Actualmente formo parte del equipo de desarrollo del nuevo sistema de Dar-App, enfocado en la gestión financiera y de recursos humanos.",
    imagen: "/darapp-finanzas-home.png",
    imagenes: [

    ],
    tecnologias: ["Next.js", "Tailwind CSS", "TypeScript", "Firebase"],
    cliente: "Proyecto desarrolado con LFT Labs",
    año: "2025",
    duracion: "En desarrollo",
    rol: "Frontend Developer",
    enlaceDemo: "",    
    desafios: [
      {
        titulo: "Aprendizaje de TypeScript",
        desafio:
          "Tuve que aprender y aplicar TypeScript en un entorno real, mejorando la robustez del código y la escalabilidad del proyecto.",
        solucion: ""
      },      
    ]
  }, 
  {
    id: 5,
    slug: "app-reservas-peluqueria",
    titulo: "Reservar Corte - App de Reservas para Peluquería",
    descripcion: "Aplicación web para reservar turnos y gestionar estadísticas de una peluquería.",
    descripcionDetallada:
      "Aplicación web desarrollada para la gestión de reservas en una peluquería. Los clientes pueden seleccionar día y hora para reservar un turno de corte de pelo, mientras que el peluquero accede a un panel de administración donde visualiza las reservas en tiempo real y estadísticas detalladas, como ingresos semanales y cantidad de turnos. La plataforma también permite configurar horarios laborales, días no disponibles y precios del servicio.",
    imagen: "/reservar-corte.png",
    imagenes: [
      "/reservar-corte-1.png",
      
    ],
    tecnologias: ["Next.js", "Tailwind CSS", "JavaScript", "Firebase"],
    cliente: "Proyecto freelance",
    año: "2025",
    duracion: "1 meses",
    rol: "Desarrollador Full Stack",
    enlaceDemo: "https://reservar-corte.vercel.app/",  
    desafios: [
    {
      titulo: "Formulario de reservas con selección de día y hora",
      desafio:
        "Implemente un formulario de reservas, en donde el cliente puede seleccionar el dia y la hora de su reserva",
      solucion: ""
    },
    {
      titulo: "Visualización de estadísticas",
      desafio:
        "Diseñé una pantalla donde  muestra  una tabla con las estadísticas semanales de reservas y ganancias, Como funcionalidad adicional, incorpore un botón para generar un PDF con el resumen estadístico de la semana..",
      solucion: ""
    },
    {
      titulo: "Panel de administración con filtros",
      desafio:
        "Desarrollé un panel donde el peluquero puede ver las reservas en tiempo real, con filtros por día y por nombre del cliente, facilitando la organización diaria del trabajo.",
      solucion: ""
    },
    {
      titulo: "Configuración de horarios y disponibilidad",
      desafio:
        "Creé una sección de configuración donde el peluquero puede definir sus horarios laborales por día de la semana, excluir sábados o días no laborables, establecer el precio del servicio y configurar datos de pago como alias para transferencias.",
      solucion: ""
    },
  ]
}
  

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
