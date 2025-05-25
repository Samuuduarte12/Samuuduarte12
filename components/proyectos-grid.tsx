import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAllProyectos } from "@/lib/proyectos"
import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProyectosGrid() {
  const proyectos = getAllProyectos()

  return (
    <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
      {proyectos.map((proyecto) => (
        <Card key={proyecto.id} className="overflow-hidden hover-card h-full flex flex-col justify-between">
          <Link href={`/proyectos/${proyecto.slug}`}>
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={proyecto.imagen || "/placeholder.svg"}
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
            <CardContent className="p-8 flex-grow">
              <h3 className="text-xl font-bold mb-2">{proyecto.titulo}</h3>
              <p className="text-muted-foreground">{proyecto.descripcion}</p>
            </CardContent>
          </Link>
            <CardFooter className="p-6 pt-0 flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link href={`/proyectos/${proyecto.slug}`}>Ver detalle</Link>
              </Button>
              <div className="flex gap-2">                
                {proyecto.enlaceDemo && (
                  <Button size="sm" asChild>
                    <Link href={proyecto.enlaceDemo} target="_blank" rel="noopener noreferrer" className="group">
                      Demo
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>                    
      ))}
    </div>
  )
}
