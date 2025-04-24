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
      titulo: "E-commerce Moderno",
      descripcion: "Tienda online con diseño atractivo, animaciones suaves y experiencia de usuario optimizada.",
      imagen: "/ecommerce.png",
      tecnologias: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      demo: "https://ejemplo.com/demo",
      github: "https://github.com/usuario/proyecto",
      slug: "ecommerce", // Añadir slug
    },
    {
      id: 2,
      titulo: "Dashboard Analítico",
      descripcion: "Panel de control interactivo con visualizaciones de datos y filtros dinámicos.",
      imagen: "/dashboard.png",
      tecnologias: ["React", "D3.js", "Tailwind CSS", "TypeScript"],
      demo: "https://ejemplo.com/demo",
      github: "https://github.com/usuario/proyecto",
      slug: "dashboard", // Añadir slug
    },
    {
      id: 3,
      titulo: "Aplicación de Productividad",
      descripcion: "App para gestión de tareas con interfaz intuitiva y animaciones fluidas.",
      imagen: "/productivity.png",
      tecnologias: ["React", "Redux", "Styled Components", "Firebase"],
      demo: "https://ejemplo.com/demo",
      github: "https://github.com/usuario/proyecto",
      slug: "app-movil", // Añadir slug
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
          <Card className="overflow-hidden hover-card h-full flex flex-col">          
            <div className="relative aspect-video overflow-hidden">            
              <Image
                src={proyecto.imagen || "/placeholder.svg"}
                alt={proyecto.titulo}
                width={600}
                height={340}
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <Link href={`/proyectos/${proyecto.slug}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">              
                  <div className="flex gap-2">
                    {proyecto.tecnologias.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-black/50 text-white border-none">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
            <CardContent className="p-6 flex-grow">
              <Link href={`/proyectos/${proyecto.slug}`}>
                <h3 className="text-xl font-bold mb-2">{proyecto.titulo}</h3>
              </Link>            
              <p className="text-muted-foreground">{proyecto.descripcion}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link href={proyecto.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Código
                </Link>
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
