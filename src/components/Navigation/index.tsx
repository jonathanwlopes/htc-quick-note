import { NavigationSub } from "../NavigationSub"
import * as S from "./styles"

interface NavigationItemsProps {
  items: {
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

export const Navigation = ({ items }: NavigationItemsProps) => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Menu do Quick</S.Title>

        <S.ListNavigation>
          {items.map((item) => {
            return <NavigationSub key={item.id} name={item.name} subMenuList={item.subMenu} icon={item.icon} />
          })}
        </S.ListNavigation>
      </S.Content>
    </S.Container>
  )
}
