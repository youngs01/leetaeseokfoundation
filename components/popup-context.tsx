"use client"

import { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from "react"

type PopupContextType = {
  showPopup1: boolean
  showPopup2: boolean
  openPopup1: () => void
  openPopup2: () => void
  closePopup1: () => void
  closePopup2: () => void
  closePopup1ForToday: () => void
  closePopup2ForToday: () => void
}

const PopupContext = createContext<PopupContextType | undefined>(undefined)

export function PopupProvider({ children }: { children: ReactNode }) {
  const [showPopup1, setShowPopup1] = useState(false)
  const [showPopup2, setShowPopup2] = useState(false)

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    const popup1ClosedUntil = localStorage.getItem("popup1ClosedUntil")
    const popup2ClosedUntil = localStorage.getItem("popup2ClosedUntil")
    const shouldShowPopup1 = !popup1ClosedUntil || new Date() > new Date(popup1ClosedUntil)
    const shouldShowPopup2 = !popup2ClosedUntil || new Date() > new Date(popup2ClosedUntil)

    // Use a ref to track if component is mounted
    let isMounted = true

    const timer = setTimeout(() => {
      if (isMounted) {
        setShowPopup1(shouldShowPopup1)
        setShowPopup2(shouldShowPopup2)
      }
    }, 1500)

    return () => {
      isMounted = false
      clearTimeout(timer)
    }
  }, [])

  const openPopup1 = () => setShowPopup1(true)
  const openPopup2 = () => setShowPopup2(true)

  const closePopup1 = () => setShowPopup1(false)
  const closePopup2 = () => setShowPopup2(false)

  const closeForToday = (key: string, setter: (value: boolean) => void) => {
    const today = new Date()
    today.setHours(23, 59, 59, 999)
    localStorage.setItem(key, today.toISOString())
    setter(false)
  }

  const closePopup1ForToday = () => closeForToday("popup1ClosedUntil", setShowPopup1)
  const closePopup2ForToday = () => closeForToday("popup2ClosedUntil", setShowPopup2)

  const value = useMemo(
    () => ({
      showPopup1,
      showPopup2,
      openPopup1,
      openPopup2,
      closePopup1,
      closePopup2,
      closePopup1ForToday,
      closePopup2ForToday,
    }),
    [showPopup1, showPopup2],
  )

  return <PopupContext.Provider value={value}>{children}</PopupContext.Provider>
}

export function usePopup() {
  const context = useContext(PopupContext)
  if (context === undefined) {
    throw new Error("usePopup must be used within a PopupProvider")
  }
  return context
}
