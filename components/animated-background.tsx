"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
  pulse: number
  pulseSpeed: number
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    // Colores violeta y púrpura para las partículas
    const colors = [
      "138, 43, 226", // BlueViolet
      "148, 0, 211", // DarkViolet
      "186, 85, 211", // MediumOrchid
      "218, 112, 214", // Orchid
      "221, 160, 221", // Plum
      "128, 0, 128", // Purple
      "147, 112, 219", // MediumPurple
      "153, 50, 204", // DarkOrchid
      "139, 0, 139", // DarkMagenta
      "75, 0, 130", // Indigo      
    ]

    // Ajustar el tamaño del canvas al tamaño de la ventana
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = 3000
      initParticles()
    }

    // Inicializar partículas
    const initParticles = () => {
      particles = []
      const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 500), 120)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 6 + 1,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.5 + 0.2,
          pulse: 0,
          pulseSpeed: Math.random() * 0.02 + 0.01,
        })
      }
    }

    // Actualizar y dibujar partículas
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Crear un efecto de resplandor en el fondo
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2,
      )
      gradient.addColorStop(0, "rgba(75, 0, 130, 0.03)")
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Dibujar partículas
      particles.forEach((particle, index) => {
        // Actualizar posición
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Efecto de pulso
        particle.pulse += particle.pulseSpeed
        const pulseFactor = Math.abs(Math.sin(particle.pulse))
        const currentSize = particle.size * (0.8 + pulseFactor * 0.4)
        const currentOpacity = particle.opacity * (0.8 + pulseFactor * 0.4)

        // Rebote en los bordes
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX = -particle.speedX
        }

        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY = -particle.speedY
        }

        // Dibujar partícula con resplandor
        ctx.beginPath()

        // Añadir resplandor
        const glow = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, currentSize * 2)
        glow.addColorStop(0, `rgba(${particle.color}, ${currentOpacity})`)
        glow.addColorStop(1, `rgba(${particle.color}, 0)`)

        ctx.fillStyle = glow
        ctx.arc(particle.x, particle.y, currentSize * 2, 0, Math.PI * 2)
        ctx.fill()

        // Dibujar el centro de la partícula
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${particle.color}, ${currentOpacity * 1.5})`
        ctx.fill()

        // Conectar partículas cercanas
        for (let j = index + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x
          const dy = particles[j].y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            // Mezclar los colores de las dos partículas
            const color1 = particle.color.split(", ").map(Number)
            const color2 = particles[j].color.split(", ").map(Number)

            const mixedColor = color1.map((c, i) => Math.floor((c + color2[i]) / 2)).join(", ")

            const opacity = 0.3 - (distance / 150) * 0.3

            // Dibujar línea con gradiente
            const gradient = ctx.createLinearGradient(particle.x, particle.y, particles[j].x, particles[j].y)
            gradient.addColorStop(0, `rgba(${particle.color}, ${opacity * pulseFactor})`)
            gradient.addColorStop(0.5, `rgba(${mixedColor}, ${opacity * 1.2 * pulseFactor})`)
            gradient.addColorStop(1, `rgba(${particles[j].color}, ${opacity * pulseFactor})`)

            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    // Inicializar
    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    animate()

    // Limpieza
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true" />
}
