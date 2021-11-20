import { Header } from "../components/Header"
import { Navigation } from "../components/Navigation"
import * as S from "./styles"

export const Home = () => {
  return (
    <S.Container>
      <Header />
      <Navigation />
    </S.Container>
  )
}
