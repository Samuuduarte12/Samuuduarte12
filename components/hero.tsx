import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { TypewriterEffect } from "@/components/typewriter-effect"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { ArrowDown, ExternalLink, Github, Instagram, Linkedin } from 'lucide-react'

const Hero = () => {
    const heroRef = useRef(null)    
    const heroInView = useInView(heroRef, { once: true })

    return (
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
                        <Link href="/CV Duarte Samuel.pdf" download className="group">
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
    )
}

export default Hero