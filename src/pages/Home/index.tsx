import * as S from "./styles"
import { Header, MainContainer, InsertAnnotation, Navigation, Card } from "../../components"

import { useNavigation } from "../../context/NavigationContext"
import { useTask } from "../../context/TaskContext"

export const Home = () => {
  const { menuItems } = useNavigation()
  const { taskList } = useTask()

  return (
    <S.Container>
      <Header />
      <Navigation menuItems={menuItems} />

      <MainContainer>
        <InsertAnnotation />
        <S.Wrapper>
          {taskList.map((task) => (
            <Card key={`task-id-${task.id}`} title={task.title} tasks={task.tasks} />
          ))}
        </S.Wrapper>
      </MainContainer>
    </S.Container>
  )
}
