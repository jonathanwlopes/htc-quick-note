import IconMark from "../../assets/images/icon-mark.svg"
import IconMarkSub from "../../assets/images/icon-mark-sub.svg"
import IconCalendar from "../../assets/images/icon-calendar.svg"
import IconNotes from "../../assets/images/icon-notes.svg"
import IconProfile from "../../assets/images/icon-profile.svg"
import IconFile from "../../assets/images/icon-file.svg"
import IconTrash from "../../assets/images/icon-trash.svg"
import { createContext, PropsWithChildren, ReactNode, useContext } from "react"

export interface NavigationContextProps {
  ListMenuItems: {
    id: number
    name: string
    link: string
    icon: string
    subMenu?: {
      id: number
      name: string
      link: string
      icon: string
    }[]
  }[]
}

const NavigationContext = createContext<NavigationContextProps>({} as NavigationContextProps)

export const NavigationContextProvider = ({ children }: PropsWithChildren<ReactNode>) => {
  const ListMenuItems = [
    { id: 1, name: "Notas", link: "#", icon: IconNotes },
    { id: 2, name: "Lembretes", link: "#", icon: IconCalendar },
    {
      id: 3,
      name: "Marcadores",
      link: "#",
      icon: IconMark,
      subMenu: [
        {
          id: 1,
          name: "Casa",
          link: "#",
          icon: IconMarkSub,
        },
        { id: 2, name: "Médico", link: "#", icon: IconMarkSub },
        { id: 3, name: "Escritório", link: "#", icon: IconMarkSub },
      ],
    },
    { id: 4, name: "Meus amigos", link: "#", icon: IconProfile },
    { id: 5, name: "Arquivo", link: "#", icon: IconFile },
    { id: 6, name: "Lixeira", link: "#", icon: IconTrash },
  ]

  return <NavigationContext.Provider value={{ ListMenuItems }}>{children}</NavigationContext.Provider>
}

export const useNavigation = () => {
  const context = useContext(NavigationContext)
  return context
}
