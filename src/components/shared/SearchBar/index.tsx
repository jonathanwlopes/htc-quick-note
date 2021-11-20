import * as S from "./styles"
import { SearchBarProps } from "./types"

export const SearchBar = ({ placeholder }: SearchBarProps) => {
  return (
    <S.Container>
      <S.Input placeholder={placeholder} />
      <S.IconSearch />
    </S.Container>
  )
}
