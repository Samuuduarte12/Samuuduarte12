import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t py-12">
      <div className="container flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold gradient-text">SamuuDuarte12</span>
          </Link>          
        </div>
        <div className="flex flex-col gap-3 text-center text-xs text-muted-foreground">          
          <p>© 2024 SamuuDuarte12</p>
          <p>Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
