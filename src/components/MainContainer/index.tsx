import * as S from "./styles"
import { PropsWithChildren, ReactNode } from "react"

export const MainContainer = ({ children }: PropsWithChildren<ReactNode>) => {
  return <S.Container>{children}</S.Container>
}
