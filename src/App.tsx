import { ThemeProvider } from "styled-components"
import { NavigationContextProvider } from "./context/NavigationContext"
import { TaskContextProvider } from "./context/TaskContext"

import { Home } from "./pages/Home"
import { GlobalStyled } from "./styles"
import { theme } from "./styles/theme"

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContextProvider>
        <TaskContextProvider>
          <GlobalStyled />
          <Home />
        </TaskContextProvider>
      </NavigationContextProvider>
    </ThemeProvider>
  )
}
