import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProyectosRelacionados } from "@/components/proyectos-relacionados"
import { getProyectoBySlug, getProyectosRelacionados } from "@/lib/proyectos"

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

  if (!proyecto) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Proyecto no encontrado</h1>
            <p className="mt-2 text-gray-500">El proyecto que buscas no existe o ha sido eliminado.</p>
            <Link href="/proyectos">
              <Button className="mt-4">Volver a proyectos</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const proyectosRelacionados = getProyectosRelacionados(params.slug)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <article className="container px-4 py-12 md:px-6 md:py-24">
          <div className="mb-8">
            <Link href="/proyectos" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a proyectos
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{proyecto.titulo}</h1>
              <div className="mt-4 flex flex-wrap gap-2">
                {proyecto.tecnologias.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-8 aspect-video overflow-hidden rounded-lg border">
                <Image
                  src={proyecto.imagen || "/placeholder.svg"}
                  alt={proyecto.titulo}
                  width={1200}
                  height={675}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">Descripción del proyecto</h2>
                  <div className="mt-4 text-gray-500 space-y-4">
                    <p>{proyecto.descripcionDetallada}</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold">Desafíos y soluciones</h2>
                  <div className="mt-4 text-gray-500 space-y-4">
                    {proyecto.desafios.map((desafio, index) => (
                      <div key={index} className="space-y-2">
                        <h3 className="font-semibold">{desafio.titulo}</h3>
                        <p>{desafio.descripcion}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {proyecto.imagenes && proyecto.imagenes.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold">Galería</h2>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      {proyecto.imagenes.map((imagen, index) => (
                        <div key={index} className="overflow-hidden rounded-lg border">
                          <Image
                            src={imagen || "/placeholder.svg"}
                            alt={`${proyecto.titulo} - Imagen ${index + 1}`}
                            width={600}
                            height={400}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-lg border p-6">
                <h2 className="text-xl font-bold">Información del proyecto</h2>

                <dl className="mt-4 space-y-4">
                  <div>
                    <dt className="font-medium">Cliente</dt>
                    <dd className="mt-1 text-gray-500">{proyecto.cliente}</dd>
                  </div>
                  <div>
                    <dt className="font-medium">Año</dt>
                    <dd className="mt-1 text-gray-500">{proyecto.año}</dd>
                  </div>
                  <div>
                    <dt className="font-medium">Duración</dt>
                    <dd className="mt-1 text-gray-500">{proyecto.duracion}</dd>
                  </div>
                  <div>
                    <dt className="font-medium">Rol</dt>
                    <dd className="mt-1 text-gray-500">{proyecto.rol}</dd>
                  </div>
                </dl>

                <div className="mt-6 space-y-3">
                  {proyecto.enlaceDemo && (
                    <Button className="w-full" asChild>
                      <Link href={proyecto.enlaceDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver demo
                      </Link>
                    </Button>
                  )}

                  {proyecto.enlaceRepositorio && (
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={proyecto.enlaceRepositorio} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Ver código
                      </Link>
                    </Button>
                  )}
                </div>
              </div>

              {proyecto.testimonios && proyecto.testimonios.length > 0 && (
                <div className="rounded-lg border p-6">
                  <h2 className="text-xl font-bold">Testimonios</h2>

                  <div className="mt-4 space-y-4">
                    {proyecto.testimonios.map((testimonio, index) => (
                      <div key={index} className="space-y-2">
                        <p className="italic text-gray-500">"{testimonio.texto}"</p>
                        <p className="font-medium">{testimonio.autor}</p>
                        <p className="text-sm text-gray-500">
                          {testimonio.cargo}, {testimonio.empresa}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>

        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Proyectos relacionados</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explora otros proyectos similares
                </p>
              </div>
            </div>
            <ProyectosRelacionados proyectos={proyectosRelacionados} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
