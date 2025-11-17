import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import { Badge } from './ui/badge'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'
import { Habilidades } from './habilidades'
import { FaLink } from "react-icons/fa6";

const SobreMi = () => {
    const aboutRef = useRef(null)
    const aboutInView = useInView(aboutRef, { once: true })
    return (
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
                                                Desarrollo de interfaces responsivas utilizando Next.js y Tailwind CSS. Integración de servicios en la nube con
                                                Firebase (Firestore, Authentication, Storage). Consumo de APIs, componentes reutilizables. Trabajo en equipo
                                                bajo Scrum (jira, trello). Colaboración en la planificación y ejecución de proyectos web
                                            </p>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="educacion" className="space-y-4">
                                    <div className="space-y-4">
                                        <div className="border-l-2 border-primary pl-4 pb-4">
                                            <h3 className="font-semibold">Desarrollo Full Stack</h3>
                                            <p className="text-sm text-muted-foreground">Santander Open Academy - ITBA | 08/2025 - Actualmente</p>
                                            <p className="mt-2">
                                                Formación en MongoDB, Express, React y Node.js, complementada con HTML, CSS y JavaScript.
                                            </p>
                                        </div>
                                        <div className="border-l-2 border-primary pl-4 pb-4">
                                            <h3 className="font-semibold">Desarrollo Frontend React</h3>
                                            <p className="text-sm text-muted-foreground">Telecom - Digitalers | 05/2025 - 11/2025</p>
                                            <p className="mt-2">
                                                Formación en HTML, CSS, Bootstrap, JavaScript y React, enfocada en maquetación responsive, lógica de
                                                programación y desarrollo de interfaces dinámicas.
                                            </p>
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
    )
}

export default SobreMi