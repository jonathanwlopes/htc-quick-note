import * as S from "./styles"

interface CardProps {
  title: string
  tasks: {
    id: number
    name: string
    done: boolean
  }[]
}

export const Card = ({ title, tasks }: CardProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {tasks.map((task) => (
        <S.Wrapper key={`task-id-${task.id}`}>
          <S.Check />
          <S.Title>{task.name}</S.Title>
        </S.Wrapper>
      ))}
    </S.Container>
  )
}
