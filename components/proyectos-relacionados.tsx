import Link from "next/link"
import Image from "next/image"

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Proyecto } from "@/lib/proyectos"

interface ProyectosRelacionadosProps {
  proyectos: Proyecto[]
}

export function ProyectosRelacionados({ proyectos }: ProyectosRelacionadosProps) {
  return (
    <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
      {proyectos.map((proyecto) => (
        <Link key={proyecto.id} href={`/proyectos/${proyecto.slug}`}>
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <div className="aspect-video overflow-hidden">
              <Image
                src={proyecto.imagen || "/placeholder.svg"}
                alt={proyecto.titulo}
                width={500}
                height={300}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{proyecto.titulo}</CardTitle>
              <CardDescription>{proyecto.descripcion}</CardDescription>
            </CardHeader>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                {proyecto.tecnologias.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
                {proyecto.tecnologias.length > 3 && <Badge variant="outline">+{proyecto.tecnologias.length - 3}</Badge>}
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}
