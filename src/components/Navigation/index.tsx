import { NavigationContextProps } from "../../context/NavigationContext"
import { NavigationSub } from "../NavigationSub"
import * as S from "./styles"

export const Navigation = ({ menuItems }: NavigationContextProps) => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Menu do Quick</S.Title>

        <S.ListNavigation>
          {menuItems.map((item) => {
            return <NavigationSub key={item.id} name={item.name} subMenuList={item.subMenu} icon={item.icon} />
          })}
        </S.ListNavigation>
      </S.Content>
    </S.Container>
  )
}
