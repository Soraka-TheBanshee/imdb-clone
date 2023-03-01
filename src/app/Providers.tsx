"use client"
import { ThemeProvider } from "next-themes"

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers({ children }:ProvidersProps) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute='class' >
        {children}
      </ThemeProvider>
    </>
  )
}
