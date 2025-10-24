"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowDown} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProyectosDestacados } from "@/components/proyectos-destacados"
import { AnimatedBackground } from "@/components/animated-background"
import Hero from "@/components/hero"
import SobreMi from "@/components/sobreMi"
import Contacto from "@/components/contacto"

export default function Home() {    
  const projectsRef = useRef(null)      
  const projectsInView = useInView(projectsRef, { once: true })  

  return (
    <div className="flex flex-col items-center">
      <AnimatedBackground />
      {/* Hero Section */}
      <Hero/>      

      {/* About Section */}      
      <SobreMi/>

      {/* Projects Section - Eliminado el fondo que estaba cubriendo el fondo animado */}
      <section ref={projectsRef} id="proyectos" className="w-full py-20 px-4">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-medium">
              <span className="mr-1">🚀</span> Proyectos
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mis <span className="gradient-text">proyectos destacados</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
              Una selección de mis trabajos más recientes y relevantes en desarrollo frontend.
            </p>
          </motion.div>

          <ProyectosDestacados inView={projectsInView} />

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/proyectos" className="group">
                Ver todos los proyectos
                <ArrowDown className="ml-2 h-4 w-4 rotate-90 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contacto/>
    </div>
  )
}
