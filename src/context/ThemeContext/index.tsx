import React, { createContext, PropsWithChildren, useContext, useState } from "react"

interface ThemeContextProps {
  theme: "light" | "dark"
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps)

export const ThemeContextProvider = ({ children }: PropsWithChildren<React.ReactNode>) => {
  const [theme, setTheme] = useState<ThemeContextProps["theme"]>("light")

  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  return context
}
