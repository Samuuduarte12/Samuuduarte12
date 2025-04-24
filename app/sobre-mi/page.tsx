import type { Metadata } from "next"
import Image from "next/image"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Sobre Mí | Desarrollador Web",
  description: "Conoce más sobre mi experiencia y habilidades como desarrollador web",
}

export default function SobreMiPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sobre Mí</h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Desarrollador web con pasión por crear experiencias digitales elegantes y funcionales.
                  </p>
                </div>
                <div className="space-y-4 text-gray-500">
                  <p>
                    Soy un desarrollador web con más de 5 años de experiencia en la creación de sitios web y
                    aplicaciones. Mi trayectoria profesional comenzó con HTML, CSS y JavaScript, y ha evolucionado para
                    incluir frameworks modernos como React y Next.js.
                  </p>
                  <p>
                    Me especializo en crear interfaces de usuario intuitivas y responsivas que proporcionan una
                    experiencia excepcional al usuario. Mi enfoque combina principios de diseño minimalista con
                    funcionalidad robusta.
                  </p>
                  <p>
                    Además de mi trabajo como desarrollador, me apasiona compartir conocimientos y contribuir a la
                    comunidad de desarrollo web a través de artículos y proyectos de código abierto.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/abstract-professional.png"
                  alt="Foto de perfil"
                  width={400}
                  height={400}
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Experiencia</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Mi trayectoria profesional en el desarrollo web.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-8 md:grid-cols-2 md:gap-12">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Desarrollador Frontend Senior</h3>
                <p className="text-sm text-gray-500">Empresa Tecnológica, 2020 - Presente</p>
                <p className="text-gray-500">
                  Desarrollo de aplicaciones web utilizando React, Next.js y TypeScript. Implementación de diseños
                  responsivos y accesibles. Colaboración con equipos de diseño y backend.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Desarrollador Web</h3>
                <p className="text-sm text-gray-500">Agencia Digital, 2018 - 2020</p>
                <p className="text-gray-500">
                  Creación de sitios web para clientes de diversos sectores. Uso de HTML, CSS, JavaScript y WordPress.
                  Optimización de rendimiento y SEO.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Desarrollador Frontend Junior</h3>
                <p className="text-sm text-gray-500">Startup Tecnológica, 2016 - 2018</p>
                <p className="text-gray-500">
                  Desarrollo de interfaces de usuario para aplicaciones web. Implementación de diseños responsivos
                  utilizando HTML, CSS y JavaScript.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Freelance</h3>
                <p className="text-sm text-gray-500">2015 - 2016</p>
                <p className="text-gray-500">
                  Desarrollo de sitios web para pequeñas empresas y profesionales. Creación de identidad visual y
                  presencia online.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
