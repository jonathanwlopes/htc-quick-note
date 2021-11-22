import { Header } from "../../components/Header"
import { MainContainer } from "../../components/MainContainer"
import { Navigation } from "../../components/Navigation"
import * as S from "./styles"

export const Home = () => {
  return (
    <S.Container>
      <Header />
      <Navigation />
      <MainContainer />
    </S.Container>
  )
}
