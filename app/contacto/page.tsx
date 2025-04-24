import type { Metadata } from "next"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactoForm } from "@/components/contacto-form"

export const metadata: Metadata = {
  title: "Contacto | Desarrollador Web",
  description: "Ponte en contacto conmigo para discutir tu próximo proyecto",
}

export default function ContactoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contacto</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                ¿Tienes un proyecto en mente? Estoy disponible para nuevas oportunidades y colaboraciones.
              </p>
              <div className="space-y-4 py-4">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">Email:</div>
                  <div className="text-gray-500">correo@ejemplo.com</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="font-semibold">Ubicación:</div>
                  <div className="text-gray-500">Madrid, España</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="font-semibold">Disponibilidad:</div>
                  <div className="text-gray-500">Disponible para proyectos freelance</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <ContactoForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
