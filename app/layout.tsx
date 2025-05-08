import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { AnimatedBackground } from "@/components/animated-background"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Portafolio | Samuuduarte12",
  description: "Portafolio profesional de desarrollador frontend con proyectos interactivos y creativos",
  icons: {
    icon: [{ url: "/favicon2.png", type: "image/svg+xml" }],
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" disableTransitionOnChange={false} storageKey="portfolio-theme">                    
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>          
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
