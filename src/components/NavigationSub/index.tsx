import * as S from "./styles"
import { NavigationSubProps } from "./types"
import { PropsWithChildren, useState } from "react"

export const NavigationSub = ({ name, subMenuList, icon }: PropsWithChildren<NavigationSubProps>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <S.ItemNavigation>
      <S.Wrapper onClick={() => setIsOpen(!isOpen)}>
        <S.Icon src={icon} alt="" />
        <S.Item>{name}</S.Item>
      </S.Wrapper>

      {isOpen && subMenuList && (
        <S.SubListNavigation>
          {isOpen &&
            subMenuList &&
            subMenuList.map((subMenu) => (
              <S.ItemNavigation key={subMenu.id}>
                <S.Wrapper>
                  <S.Icon src={subMenu.icon} alt="" />
                  <S.Item>{subMenu.name}</S.Item>
                </S.Wrapper>
              </S.ItemNavigation>
            ))}
        </S.SubListNavigation>
      )}
    </S.ItemNavigation>
  )
}
