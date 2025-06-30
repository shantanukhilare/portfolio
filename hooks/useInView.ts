"use client"

import { useState, useEffect, useRef, type RefObject } from "react"

export function useInView<T extends HTMLElement>(): [RefObject<T>, boolean] {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<T>(null)

  useEffect(() => {
    const checkInView = () => {
      if (ref.current && !isInView) {
        const rect = ref.current.getBoundingClientRect()
        const inView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0
        if (inView) {
          setIsInView(true)
        }
      }
    }

    const handleScroll = () => {
      checkInView()
    }

    window.addEventListener("scroll", handleScroll)
    checkInView() // Check on mount

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isInView])

  return [ref, isInView]
}
