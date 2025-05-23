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
      "/somos-jardin-detail-2.jpg",      
      "/somos-jardin-detail-3.png",            
    ],
    tecnologias: ["Next.js", "Tailwind", "JavaScript", "Firebase", "Figma"],
    cliente: "Somos Jardín",
    año: "2024",
    duracion: "2 meses",
    rol: "Frontend Developer",
    enlaceDemo: "https://somos-jardinweb.vercel.app/cursos",    
    desafios: [
      {
        titulo: "Diseño de la home y login",
        desafio:
          "Desafío: Diseñar pantallas claras y coherentes con la identidad de la marca para mobile y desktop.",
        solucion: "Solución: Implementé un diseño responsive con una estética visual alineada al estilo de Somos Jardín, asegurando una experiencia fluida en ambos formatos."
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
        "/black-deer-films-1.png",        
        "/black-deer-films-3.png",
        "/black-deer-films-4.png",
        "/black-deer-films-5.png",
        
      ],
      tecnologias: ["Next.js", "Tailwind", "JavaScript", "Firebase", "Figma"],
      cliente: "Black Deer Films",
      año: "2024",
      duracion: "2 meses",
      rol: "Frontend Developer",
      enlaceDemo: "https://black-deer-films.vercel.app/",      
      desafios: [                
        {
          titulo: "Gestión de secciones con contenidos multimedia",
          desafio:
            "Desafío: Crear una estructura flexible para que el administrador pudiera subir y organizar fácilmente imágenes y videos en diferentes secciones.",
          solucion: "Solución: Desarrollé un panel de administración con formularios dinámicos que permiten agregar múltiples bloques multimedia, diferenciando entre imágenes y URLs de video, y guardando todo en Firebase."
        },
        {
          titulo: "Integración con YouTube",
          desafio:
            "Desafío: Unificar la presentación de videos de YouTube con el resto del contenido visual del sitio.",
          solucion: "Solución: Desarrollé un sistema que extrae automáticamente las miniaturas de YouTube a partir de la URL, para mostrarlas como si fueran imágenes, manteniendo una estética uniforme en la galería."
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
