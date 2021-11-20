import { ThemeProvider } from "styled-components"
import { MobileContextProvider } from "./context/MobileContext"
import { Home } from "./pages"
import { GlobalStyled } from "./styles"
import { theme } from "./styles/theme"

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MobileContextProvider>
        <GlobalStyled />
        <Home />
      </MobileContextProvider>
    </ThemeProvider>
  )
}
