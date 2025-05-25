import type { Metadata } from "next"
import { getProyectoBySlug, getProyectosRelacionados } from "@/lib/proyectos"
import { ProyectoContent } from "./ProyectoContent"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const proyecto = getProyectoBySlug(params.slug)

  if (!proyecto) {
    return {
      title: "Proyecto no encontrado",
    }
  }

  return {
    title: `${proyecto.titulo} | Portafolio`,
    description: proyecto.descripcion,
  }
}

export default function ProyectoPage({ params }: { params: { slug: string } }) {
  const proyecto = getProyectoBySlug(params.slug)
  const proyectosRelacionados = getProyectosRelacionados(params.slug)

  if (!proyecto) {
    return <ProyectoContent proyecto={null} proyectosRelacionados={proyectosRelacionados} />
  }

  return <ProyectoContent proyecto={proyecto} proyectosRelacionados={proyectosRelacionados} />
}
