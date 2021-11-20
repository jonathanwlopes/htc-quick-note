import * as S from "./styles"
import { Logo, SearchBar, Profile } from "../shared/"

export const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Wrapper>
          <S.IconBars />
          <Logo />
          <SearchBar placeholder="Pesquisar..." />
          <S.IconReload />
        </S.Wrapper>
        <Profile />
      </S.Content>
    </S.Container>
  )
}
