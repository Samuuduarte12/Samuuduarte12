"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Github } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProyectosDestacadosProps {
  inView: boolean
}

export function ProyectosDestacados({ inView }: ProyectosDestacadosProps) {
  const proyectos = [
    {
      id: 1,
      titulo: "Black Deer Films - Sitio web Productora Audiovisual",
      descripcion: "Diseño y desarrolo completo de sitio web para productora audiovisual.",
      imagen: "/black-deer-films/black-deer-films.png",
      tecnologias: ["Next.js", "Tailwind", "JavaScript", "Firebase", "Figma"],
      demo: "https://black-deer-films.vercel.app/",      
      slug: "black-deer-films",
    },
    {
      id: 2,
      titulo: "Dar-App - Sistema Financiero y control del personal",
      descripcion: "Sistema interno de finanzas y empleados para empresa de logística.",
      imagen: "/dar-app/dar-App.png",
      tecnologias: ["Next.js", "Tailwind", "TypeScript", "Firebase"],
      demo: "",      
      slug: "dar-app-finanzas",
    },
    {
      id: 3,
      titulo: "Reservar Corte - App de Reservas para Peluquería",
      descripcion: "Aplicación web para reservar turnos y gestionar estadísticas de una peluquería.",
      imagen: "/app-reservas/reservar-corte.png",
      tecnologias: ["Next.js", "Tailwind", "JavaScript", "Firebase"],
      demo: "https://reservar-corte.vercel.app/",      
      slug: "app-reservas-peluqueria",
    },
  ]

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {proyectos.map((proyecto, index) => (
        <motion.div
          key={proyecto.id}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        >
          <Card className="overflow-hidden hover-card h-full flex flex-col justify-between">          
            <div className="relative aspect-video overflow-hidden">            
              <Image
                src={proyecto.imagen}
                alt={proyecto.titulo}
                width={600}
                height={340}
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">              
                <div className="flex gap-2">
                  {proyecto.tecnologias.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-black/50 text-white border-none">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <CardContent className="p-6 flex-grow">
              <h3 className="text-xl font-bold mb-2">{proyecto.titulo}</h3>
              <p className="text-muted-foreground">{proyecto.descripcion}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link href={`/proyectos/${proyecto.slug}`}>Ver detalle</Link>
              </Button>
              <div className="flex gap-2">                
                <Button size="sm" asChild>
                  <Link href={proyecto.demo} target="_blank" rel="noopener noreferrer" className="group">
                    Demo
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
