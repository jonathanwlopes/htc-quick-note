import * as S from "./styles"

export const InsertAnnotation = () => {
  return (
    <S.Container>
      <S.Input placeholder="Crie sua anotação ou lista..." />
      <S.CheckedIcon />
      <S.ImageIcon />
    </S.Container>
  )
}
