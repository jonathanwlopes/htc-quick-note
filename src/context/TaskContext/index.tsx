import { createContext, PropsWithChildren, ReactNode, useContext } from "react"

interface TaskContextProps {
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
        { id: 21, name: "Dipirona", done: false },
        { id: 22, name: "Eno", done: false },
      ],
    },

    {
      id: 2,
      title: "Compras do Mês",
      tasks: [
        { id: 50, name: "Arroz", done: false },
        { id: 51, name: "Feijão", done: false },
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
