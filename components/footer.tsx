import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t py-12">
      <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold gradient-text">Miguel.dev</span>
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Desarrollador Frontend especializado en crear experiencias web interactivas.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 md:items-end">
          <div className="flex space-x-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </span>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </span>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </span>
            </Link>
            <Link href="mailto:miguel@ejemplo.com">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </span>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 Miguel.dev. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
