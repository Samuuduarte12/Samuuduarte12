"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedBackground2 } from "@/components/Animated-Background2"
import { Proyecto } from "@/lib/proyectos"

interface ProyectoContentProps {
  proyecto: Proyecto | null
  proyectosRelacionados: Proyecto[]
}

export function ProyectoContent({ proyecto, proyectosRelacionados }: ProyectoContentProps) {
  const [imagenSeleccionada, setImagenSeleccionada] = useState<string | null>(null)

  if (!proyecto) {
    return (
      <div className="flex min-h-screen flex-col">     
        <AnimatedBackground2/>
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Proyecto no encontrado</h1>
            <p className="mt-2 text-gray-500">El proyecto que buscas no existe o ha sido eliminado.</p>
            <Link href="/proyectos">
              <Button className="mt-4">Volver a proyectos</Button>
            </Link>
          </div>
        </main>        
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">     
      <AnimatedBackground2/> 
      <main className="flex-1">
        <article className="container px-4 py-12 md:px-6 md:py-0">
          <div className="mb-8">
            <Link href="/proyectos" className="inline-flex items-center text-sm text-gray-500 hover:text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a proyectos
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{proyecto.titulo}</h1>              
              <div className="mt-8 aspect-video overflow-hidden rounded-lg border">
                <Image
                  src={proyecto.imagen || "/placeholder.svg"}
                  alt={proyecto.titulo}
                  width={1200}
                  height={675}
                  className="h-full w-full"
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
                  <h2 className="text-2xl font-bold">Tareas realizadas</h2>
                  <div className="mt-4 text-gray-500 space-y-4">
                    {proyecto.desafios.map((desafio, index) => (
                      <div key={index} className="space-y-2">
                        <h3 className="font-semibold">{desafio.titulo}</h3>
                        <p>{desafio.desafio}</p>
                        <p>{desafio.solucion}</p>
                      </div>
                    ))}
                  </div>
                </div>                
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-lg border p-6">
                <h2 className="text-xl font-bold">Información del proyecto</h2>

                <dl className="mt-4 space-y-4">
                  <div>                    
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
              <div className="rounded-lg border p-6">
                <div className="flex flex-wrap gap-2">
                  {proyecto.tecnologias.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>            
            </div>
          </div>
          <div className="mt-6">
            {proyecto.imagenes && proyecto.imagenes.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold">Galería</h2>
                <div className="my-4 grid gap-4 sm:grid-cols-2">
                  {proyecto.imagenes.map((imagen, index) => (
                    <div key={index} className="overflow-hidden rounded-lg border"  onClick={() => setImagenSeleccionada(imagen)}>
                      <Image
                        src={imagen || "/placeholder.svg"}
                        alt={`${proyecto.titulo} - Imagen ${index + 1}`}
                        width={400}
                        height={400}
                        className="h-full w-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>                
        {imagenSeleccionada && (
          <div
            className="fixed inset-0 z-50 flex items-end justify-center backdrop-blur-md bg-black/30"
            onClick={() => setImagenSeleccionada(null)}
          >
            <div
              className="relative max-w-4xl w-full rounded-md mb-20" 
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-white hover:text-red-500"
                onClick={() => setImagenSeleccionada(null)}
              >
                ✕
              </button>
              <Image
                src={imagenSeleccionada}
                alt="Imagen ampliada"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}
      </main>      
    </div>
  )
} 