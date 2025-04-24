"use client"

import { motion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiFirebase } from "react-icons/si";
import { FaCodeFork } from "react-icons/fa6";
import { Code2, FileJson, Braces, Layers, Atom, Paintbrush, GitBranch, Database, Cpu, Globe } from "lucide-react"
import Link from "next/link";

export function Habilidades() {
  const habilidades = [
    { nombre: "HTML", icono: <FaHtml5 className="h-6 w-6" /> },
    { nombre: "CSS", icono: <FaCss3Alt className="h-6 w-6" /> },
    { nombre: "JavaScript", icono: <IoLogoJavascript className="h-6 w-6" /> },
    { nombre: "React", icono: <FaReact className="h-6 w-6" /> },
    { nombre: "Next.js", icono: <RiNextjsFill className="h-6 w-6" /> },
    { nombre: "Firebase", icono: <SiFirebase className="h-6 w-6" /> },
    { nombre: "Fork", icono: <FaCodeFork className="h-6 w-6" /> }, 
    { nombre: "Tailwind", icono: <RiTailwindCssFill className="h-6 w-6" /> },
    { nombre: "Bootstrap", icono: <FaBootstrap className="h-6 w-6" /> },
    { nombre: "Figma", icono: <FaFigma className="h-6 w-6" /> },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {habilidades.map((habilidad, index) => (
        <motion.div
          key={habilidad.nombre}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Link href="" className="flex flex-col items-center justify-center p-4 rounded-lg border bg-card hover:shadow-md transition-all hover:-translate-y-1 text-center">
            <div className="mb-2 text-primary">{habilidad.icono}</div>
            <span className="text-sm font-medium">{habilidad.nombre}</span>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
