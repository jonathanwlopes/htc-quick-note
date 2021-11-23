import * as S from "./styles"
import { Header } from "../../components/Header"
import { MainContainer } from "../../components/MainContainer"
import { Navigation } from "../../components/Navigation"
import { Card } from "../../components/Card"
import { useNavigation } from "../../context/NavigationContext"
import { useTask } from "../../context/TaskContext"

export const Home = () => {
  const { ListMenuItems } = useNavigation()
  const { taskList } = useTask()

  return (
    <S.Container>
      <Header />
      <Navigation items={ListMenuItems} />

      <MainContainer>
        {taskList.map((task) => (
          <Card key={`task-id-${task.id}`} title={task.title} tasks={task.tasks} />
        ))}
      </MainContainer>
    </S.Container>
  )
}
