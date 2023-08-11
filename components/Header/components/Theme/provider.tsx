'use client'

// import { useTheme } from './hooks/useTheme'
// import { createContext } from 'react'
// const ThemeContext = createContext({})
// export function ThemeProvider({ children }: { children: React.ReactNode }) {
//   const [theme] = useTheme()
//   return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
// }

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        id="change-theme"
        dangerouslySetInnerHTML={{
          __html: `!function(){var e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,t=localStorage.getItem("theme")||"light";('"dark"'===t||e&&'"light"'!==t)&&document.documentElement.classList.toggle("dark",!0)}()`,
        }}
      ></script>
      {children}
    </>
  )
}

export default ThemeProvider
