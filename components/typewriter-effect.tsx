"use client"

import { useState, useEffect } from "react"

interface TypewriterEffectProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenTexts?: number
}

export function TypewriterEffect({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
}: TypewriterEffectProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        // Current text from the array
        const fullText = texts[currentTextIndex]

        // If deleting, remove the last character
        // If typing, add the next character
        setCurrentText((current) =>
          isDeleting ? current.substring(0, current.length - 1) : fullText.substring(0, current.length + 1),
        )

        // If we've completed typing the current text
        if (!isDeleting && currentText === fullText) {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), delayBetweenTexts)
        }
        // If we've deleted all characters
        else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          // Move to the next text in the array
          setCurrentTextIndex((current) => (current + 1) % texts.length)
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, delayBetweenTexts])

  return (
    <span className="text-xl md:text-2xl text-muted-foreground inline-block min-h-[2rem]">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
