import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion"
import { Badge } from './ui/badge'
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'
import { Code,Linkedin, Mail, Instagram } from "lucide-react"
import { ContactForm } from './contact-form'

const Contacto = () => {
    const contactRef = useRef(null)    
    const contactInView = useInView(contactRef, { once: true })

    return (
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
    )
}

export default Contacto