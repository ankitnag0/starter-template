"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon, LaptopIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const current = theme === "system" ? systemTheme : theme

  const cycle = () => {
    if (theme === "light") setTheme("dark")
    else if (theme === "dark") setTheme("system")
    else setTheme("light")
  }

  const icon = theme === "system" ? (
    <LaptopIcon className="size-4" />
  ) : current === "dark" ? (
    <MoonIcon className="size-4" />
  ) : (
    <SunIcon className="size-4" />
  )

  const label = `Theme: ${theme}`

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={label}
      title={`${label} (click to cycle)`}
      onClick={cycle}
    >
      {icon}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
