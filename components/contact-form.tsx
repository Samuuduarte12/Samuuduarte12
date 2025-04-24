"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarme. Te responderé lo antes posible.",
    })

    setFormData({
      nombre: "",
      email: "",
      mensaje: "",
    })
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="nombre">Nombre</Label>
        <div className="relative">
          <Input
            id="nombre"
            name="nombre"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="pr-10 focus-visible:ring-primary"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={formData.nombre ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500"
          >
            {formData.nombre && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            )}
          </motion.div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="pr-10 focus-visible:ring-primary"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={formData.email ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500"
          >
            {formData.email && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            )}
          </motion.div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensaje">Mensaje</Label>
        <Textarea
          id="mensaje"
          name="mensaje"
          placeholder="Escribe tu mensaje aquí..."
          value={formData.mensaje}
          onChange={handleChange}
          required
          className="min-h-[150px] resize-none focus-visible:ring-primary"
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full group relative overflow-hidden">
        <span className="relative z-10 flex items-center justify-center">
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          <Send className={`ml-2 h-4 w-4 ${isSubmitting ? "" : "group-hover:translate-x-1 transition-transform"}`} />
        </span>
        <motion.span
          initial={{ x: "-100%" }}
          animate={isSubmitting ? { x: "0%" } : { x: "-100%" }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 z-0"
        />
      </Button>
    </form>
  )
}
