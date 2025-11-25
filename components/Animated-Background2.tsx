"use client"

export function AnimatedBackground2() {
  return (
    <div 
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        background: 'linear-gradient(135deg, #1a0033 0%, #000000 30%, #2d0044 50%, #000000 70%, #1a0033 100%)',
      }}
      aria-hidden="true"
    />
  )
}
