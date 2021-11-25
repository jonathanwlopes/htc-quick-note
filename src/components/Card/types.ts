export interface CardProps {
  title: string
  tasks: {
    id: number
    name: string
    done: boolean
  }[]
}