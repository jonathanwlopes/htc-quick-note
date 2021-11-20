import { createContext, PropsWithChildren, useContext, useState } from "react"

interface MobileContextProps {
  novoValor?: boolean
  setNovoValor?: React.Dispatch<boolean>
}

const MobileContext = createContext<MobileContextProps>({})

export const MobileContextProvider = ({ children }: PropsWithChildren<React.ReactNode>) => {
  const [novoValor, setNovoValor] = useState(true)

  return <MobileContext.Provider value={{ novoValor, setNovoValor }}>{children}</MobileContext.Provider>
}

export const useMobile = () => {
  const context = useContext(MobileContext)
  return context
}
