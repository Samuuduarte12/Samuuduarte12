import type { Metadata } from "next"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProyectosGrid } from "@/components/proyectos-grid"

export const metadata: Metadata = {
  title: "Proyectos | Desarrollador Web",
  description: "Explora mi portafolio de proyectos de desarrollo web",
}

export default function ProyectosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mis Proyectos</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Una colección de mis trabajos en desarrollo web y diseño de interfaces.
                </p>
              </div>
            </div>
            <ProyectosGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
