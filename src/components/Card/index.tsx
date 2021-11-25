import * as S from "./styles"
import { CardProps } from "./types"
import { CheckBox } from "../shared"
import { UpdateTask } from "../../service/UpdateTask"
import { useState } from "react"
import { InfoCard } from ".."

export const Card = ({ title, tasks }: CardProps) => {
  const [taskList, setTaskList] = useState([...tasks])

  const handleUpdate = (id: number, done: boolean) => {
    const newTaskList = UpdateTask({ id, done, taskList })
    setTaskList(newTaskList)
  }

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {taskList.map((task) => (
        <S.Wrapper key={`task-id-${task.id}`} onClick={() => handleUpdate(task.id, task.done)}>
          <CheckBox isDone={task.done} />
          <S.TaskName>{task.name}</S.TaskName>
        </S.Wrapper>
      ))}
      <InfoCard />
    </S.Container>
  )
}
