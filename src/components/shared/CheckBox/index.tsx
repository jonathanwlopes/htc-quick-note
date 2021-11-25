import * as S from "./styles"
import { CheckBoxProps } from "./types"

export const CheckBox = ({ isDone }: CheckBoxProps) => {
  return <S.Check isDone={isDone}></S.Check>
}
