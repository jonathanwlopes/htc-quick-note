import { createContext, PropsWithChildren, ReactNode, useContext } from "react"

export interface TaskContextProps {
  taskList: {
    id: number
    title: string
    tasks: {
      id: number
      name: string
      done: boolean
    }[]
  }[]
}

const TaskContext = createContext<TaskContextProps>({} as TaskContextProps)

export const TaskContextProvider = ({ children }: PropsWithChildren<ReactNode>) => {
  const taskList = [
    {
      id: 1,
      title: "Farmacinha",
      tasks: [
        { id: 20, name: "Dorflex", done: false },
        { id: 21, name: "Dipirona", done: true },
        { id: 22, name: "Eno", done: false },
      ],
    },

    {
      id: 2,
      title: "Compras do Mês",
      tasks: [
        { id: 50, name: "Arroz", done: false },
        { id: 51, name: "Feijão", done: true },
        { id: 52, name: "Açucar", done: false },
      ],
    },

    {
      id: 3,
      title: "Anotação Aula - Noite",
      tasks: [
        { id: 50, name: "Arroz", done: false },
        { id: 51, name: "Feijão", done: true },
        { id: 52, name: "Açucar", done: false },
      ],
    },

    {
      id: 4,
      title: "ToDo 22-11",
      tasks: [
        { id: 50, name: "Passar na Farmacia", done: false },
        { id: 51, name: "Feijão", done: true },
        { id: 52, name: "Açucar", done: false },
      ],
    },

    {
      id: 5,
      title: "Compras do Mês",
      tasks: [
        { id: 50, name: "Arroz", done: false },
        { id: 51, name: "Feijão", done: true },
        { id: 52, name: "Açucar", done: false },
      ],
    },

    {
      id: 6,
      title: "Farmacinha",
      tasks: [
        { id: 50, name: "Arroz", done: false },
        { id: 51, name: "Feijão", done: true },
        { id: 52, name: "Açucar", done: false },
      ],
    },
  ]

  return <TaskContext.Provider value={{ taskList }}>{children}</TaskContext.Provider>
}

export const useTask = () => {
  const context = useContext(TaskContext)
  return context
}
