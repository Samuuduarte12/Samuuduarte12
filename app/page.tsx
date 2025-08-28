"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowDown, Code, ExternalLink, Github, Linkedin, Mail, Instagram } from "lucide-react"
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
import { AnimatedBackground } from "@/components/animated-background"
import { FaLink } from "react-icons/fa6";

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
      <AnimatedBackground />
      {/* Hero Section */}
      <section
        ref={heroRef}
        id="inicio"
        className="w-full min-h-[90vh] flex flex-col justify-center items-center py-20 px-4 relative overflow-hidden"
      >        
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
              <Link href="/proyectos" className="group">
                Ver proyectos
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/CV Duarte Samuel.pdf"  download className="group">
                Descargar CV
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Link>
            </Button>
          </div>
          <div className="flex justify-center mt-8 gap-4">
            <Link href="https://github.com/Samuuduarte12" target="_blank" rel="noopener noreferrer">
              <Button
                size="icon"
                variant="outline"
                className="rounded-full hover:text-primary hover:bg-background/10 transition-colors border hover:border-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/samu-duarte12/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:text-primary hover:bg-background/10 transition-colors border hover:border-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://www.instagram.com/samuuduarte12/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:text-primary hover:bg-background/10 transition-colors border hover:border-primary"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
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
      <section ref={aboutRef} id="sobre-mi" className="w-full md:py-20 md:px-4">
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

          <div className="flex flex-col md:flex-row justify-center md:gap-12 w-full">
            <div className="md:w-1/2 flex md:items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Image
                  src="/imgPortfolio.png"
                  alt="Samuel Duarte - Desarrollador Frontend"
                  width={700}
                  height={700}
                  className="rounded-2xl shadow-lg md:mx-auto my-10 md:my-14"
                />
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Tabs defaultValue="perfil">
                  <TabsList className="grid w-full grid-cols-4 mb-8 bg-primary text-white">
                    <TabsTrigger value="perfil">Perfil</TabsTrigger>
                    <TabsTrigger value="experiencia" className="p-2">Experiencia</TabsTrigger>
                    <TabsTrigger value="educacion" className="p-2">Educación</TabsTrigger>
                    <TabsTrigger value="habilidades" className="p-2">Habilidades</TabsTrigger>
                  </TabsList>
                  <TabsContent value="perfil" className="space-y-4">
                    <p>
                      Soy Samuel, desarrollador Frontend. Me apasiona crear interfaces funcionales y visualmente atractivas, siempre enfocado en ofrecer una excelente experiencia de usuario.
                      <br />
                      <br />
                      A lo largo de mi trayectoria he aprendido muchísimas cosas de forma autodidacta, lo que me ha permitido crecer rápidamente y adaptarme a distintas tecnologías y metodologías. Me encanta seguir aprendiendo, explorar nuevas herramientas y adquirir experiencias que me ayuden a mejorar como profesional.
                      <br />
                      <br />
                      Disfruto trabajar en equipo, adaptarme, enfrentar nuevos desafíos y colaborar tanto en proyectos freelance como en entornos corporativos. En mi tiempo libre, el fútbol me inspira a mantener el espíritu de equipo, la constancia y la disciplina.
                    </p>
                  </TabsContent>
                  <TabsContent value="experiencia" className="space-y-4">
                    <div className="space-y-4">
                      <div className="border-l-2 border-primary pl-4 pb-4">
                        <h3 className="font-semibold">Frontend Developer</h3>
                        <p className="text-sm text-muted-foreground">LFT Labs |  11/2023 - Actualmente</p>
                        <p className="mt-2">
                          Diseño y desarrollo de interfaces web con foco en usabilidad, escalabilidad y diseño responsivo. Participé en la creación de plataformas web para sectores como logística, educación y cine, utilizando herramientas modernas como Next.js, Tailwind CSS, Firebase y TypeScript.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="educacion" className="space-y-4">
                    <div className="space-y-4">
                      <div className="border-l-2 border-primary pl-4 pb-4">
                        <h3 className="font-semibold">Full Stack Developer</h3>
                        <p className="text-sm text-muted-foreground">Santander Open Academy - ITBA | Cursando</p>                        
                      </div>
                      <div className="border-l-2 border-primary pl-4 pb-4">
                        <h3 className="font-semibold">Desarrollo Front End</h3>
                        <p className="text-sm text-muted-foreground">Telecom - Digitalers | Cursando</p>                        
                      </div>
                      <div className="border-l-2 border-primary pl-4 pb-4">
                        <h3 className="font-semibold">React JS</h3>
                        <p className="text-sm text-muted-foreground">CoderHouse | 02/2025 - 05/2025</p>
                        <p className="mt-2">
                          Formación práctica en desarrollo de interfaces con React: componentes, hooks, routing, consumo de APIs y uso de Firebase y proyecto final.
                        </p>
                        <Link href="https://e-comerce-coder-house.vercel.app/" target="_blank" className="flex  items-center hover:text-primary underline"><FaLink />Proyecto final</Link>
                      </div>
                      <div className="border-l-2 border-primary pl-4">
                        <h3 className="font-semibold">Diseño Web - IT Bootcamp</h3>
                        <p className="text-sm text-muted-foreground">Alkemy | 09/2023 - 11/2023</p>
                        <p className="mt-2">
                          Formación intensiva en HTML, CSS y Bootstrap enfocada en el diseño de interfaces web modernas y responsive.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="habilidades" className="space-y-4">
                    <Habilidades />
                  </TabsContent>
                </Tabs>
              </motion.div>
            </div>
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
                  <Link href="mailto:samu_dmatheu@live.com">
                    <CardContent className="p-4 flex items-center">
                      <Mail className="h-5 w-5 mr-3 text-primary" />
                      <span>samu_dmatheu@live.com</span>
                    </CardContent>
                  </Link>
                </Card>

                <Card className="hover-card">
                  <Link href="https://github.com/Samuuduarte12" target="_blank">
                    <CardContent className="p-4 flex items-center">
                      <Code className="h-5 w-5 mr-3 text-primary" />
                      <span>github.com/Samuuduarte12</span>
                    </CardContent>
                  </Link>
                </Card>

                <Card className="hover-card">
                  <Link href="https://www.linkedin.com/in/samuduarte12/" target="_blank">
                    <CardContent className="p-4 flex items-center">
                      <Linkedin className="h-5 w-5 mr-3 text-primary" />
                      <span>linkedin.com/in/samu-duarte12</span>
                    </CardContent>
                  </Link>
                </Card>

                <Card className="hover-card">
                  <Link href="https://www.instagram.com/samuuduarte12/" target="_blank">
                    <CardContent className="p-4 flex items-center">
                      <Instagram className="h-5 w-5 mr-3 text-primary" />
                      <span>instagram.com/samuuduarte12</span>
                    </CardContent>
                  </Link>
                </Card>
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
