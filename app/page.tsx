"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowDown, Code, ExternalLink, Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProyectosDestacados } from "@/components/proyectos-destacados"
import { ContactForm } from "@/components/contact-form"
import { Habilidades } from "@/components/habilidades"
import { TypewriterEffect } from "@/components/typewriter-effect"

export default function Home() {
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const aboutInView = useInView(aboutRef, { once: true })
  const projectsInView = useInView(projectsRef, { once: true })
  const contactInView = useInView(contactRef, { once: true })

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section
        ref={heroRef}
        id="inicio"
        className="w-full min-h-[90vh] flex flex-col justify-center items-center py-20 px-4 relative overflow-hidden"
      >
        {/* Eliminado el div de fondo que estaba cubriendo el fondo animado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="container max-w-4xl text-center"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-medium">
            <span className="mr-1">👋</span> ¡Hola! Soy
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="gradient-text">Samuel Duarte</span>
          </h1>
          <div className="mb-8 max-w-2xl mx-auto text-center">
            <TypewriterEffect
              texts={["Desarrollador web", "Desarrollador Frontend"]}
              typingSpeed={100}
              deletingSpeed={50}
              delayBetweenTexts={2000}
            />
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#proyectos" className="group">
                Ver proyectos
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/cv-samuel-duarte.pdf" download className="group">
                Descargar CV
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Link>
            </Button>
          </div>
          <div className="flex justify-center mt-8 gap-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:text-primary hover:bg-background/10 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:text-primary hover:bg-background/10 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:text-primary hover:bg-background/10 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="mailto:samuel@ejemplo.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:text-primary hover:bg-background/10 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
          <div className="flex justify-center mt-8">
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
              <Link href="#sobre-mi">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ArrowDown className="h-6 w-6" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="sobre-mi" className="w-full py-20 px-4">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-medium">
              <span className="mr-1">👨‍💻</span> Sobre mí
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Conoce un poco más <span className="gradient-text">sobre mí</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
              Soy un desarrollador frontend apasionado por crear experiencias digitales atractivas y funcionales.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Image
                src="/profile.png"
                alt="Miguel Ángel - Desarrollador Frontend"
                width={500}
                height={500}
                className="rounded-2xl shadow-lg mx-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Tabs defaultValue="perfil" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="perfil">Perfil</TabsTrigger>
                  <TabsTrigger value="experiencia">Experiencia</TabsTrigger>
                  <TabsTrigger value="educacion">Educación</TabsTrigger>
                </TabsList>
                <TabsContent value="perfil" className="space-y-4">
                  <p>
                    Soy un desarrollador frontend con más de 5 años de experiencia creando interfaces de usuario
                    atractivas y funcionales. Me especializo en React, Next.js y diseño de experiencias interactivas.
                  </p>
                  <p>
                    Mi enfoque combina creatividad con soluciones técnicas sólidas, siempre buscando la mejor manera de
                    implementar diseños que no solo se vean bien, sino que también ofrezcan una excelente experiencia de
                    usuario.
                  </p>
                  <div className="pt-4">
                    <h3 className="text-lg font-semibold mb-3">Habilidades principales</h3>
                    <Habilidades />
                  </div>
                </TabsContent>
                <TabsContent value="experiencia" className="space-y-4">
                  <div className="space-y-4">
                    <div className="border-l-2 border-primary pl-4 pb-4">
                      <h3 className="font-semibold">Desarrollador Frontend Senior</h3>
                      <p className="text-sm text-muted-foreground">Empresa Tecnológica | 2021 - Presente</p>
                      <p className="mt-2">
                        Desarrollo de aplicaciones web utilizando React, Next.js y TypeScript. Implementación de diseños
                        responsivos y accesibles.
                      </p>
                    </div>
                    <div className="border-l-2 border-primary pl-4 pb-4">
                      <h3 className="font-semibold">Desarrollador Frontend</h3>
                      <p className="text-sm text-muted-foreground">Agencia Digital | 2019 - 2021</p>
                      <p className="mt-2">
                        Creación de sitios web interactivos para clientes de diversos sectores. Implementación de
                        animaciones y transiciones.
                      </p>
                    </div>
                    <div className="border-l-2 border-primary pl-4">
                      <h3 className="font-semibold">Desarrollador Web Junior</h3>
                      <p className="text-sm text-muted-foreground">Startup | 2018 - 2019</p>
                      <p className="mt-2">
                        Desarrollo de interfaces de usuario para aplicaciones web utilizando HTML, CSS y JavaScript.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="educacion" className="space-y-4">
                  <div className="space-y-4">
                    <div className="border-l-2 border-primary pl-4 pb-4">
                      <h3 className="font-semibold">Máster en Desarrollo Web</h3>
                      <p className="text-sm text-muted-foreground">Universidad Tecnológica | 2017 - 2018</p>
                      <p className="mt-2">Especialización en tecnologías frontend y experiencia de usuario.</p>
                    </div>
                    <div className="border-l-2 border-primary pl-4">
                      <h3 className="font-semibold">Ingeniería Informática</h3>
                      <p className="text-sm text-muted-foreground">Universidad Nacional | 2013 - 2017</p>
                      <p className="mt-2">
                        Formación en fundamentos de programación, algoritmos y desarrollo de software.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </div>
      </section>

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
      <section ref={contactRef} id="contacto" className="w-full py-20 px-4">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-medium">
              <span className="mr-1">📬</span> Contacto
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Tienes un <span className="gradient-text">proyecto en mente</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
              Estoy disponible para proyectos freelance y oportunidades laborales. ¡Hablemos!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold">Información de contacto</h3>
              <p className="text-muted-foreground">
                Puedes contactarme a través del formulario o directamente por correo electrónico o redes sociales.
              </p>

              <div className="space-y-4">
                <Card className="hover-card">
                  <CardContent className="p-4 flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-primary" />
                    <span>miguel@ejemplo.com</span>
                  </CardContent>
                </Card>

                <Card className="hover-card">
                  <CardContent className="p-4 flex items-center">
                    <Code className="h-5 w-5 mr-3 text-primary" />
                    <span>github.com/miguel</span>
                  </CardContent>
                </Card>

                <Card className="hover-card">
                  <CardContent className="p-4 flex items-center">
                    <Linkedin className="h-5 w-5 mr-3 text-primary" />
                    <span>linkedin.com/in/miguel</span>
                  </CardContent>
                </Card>

                <Card className="hover-card">
                  <CardContent className="p-4 flex items-center">
                    <Twitter className="h-5 w-5 mr-3 text-primary" />
                    <span>twitter.com/miguel</span>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-bold mb-4">Sígueme en redes</h3>
                <div className="flex space-x-4">
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:text-primary hover:border-primary transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:text-primary hover:border-primary transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:text-primary hover:border-primary transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
