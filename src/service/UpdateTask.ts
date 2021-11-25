interface UpdateTaskProps {
  id: number
  done: boolean
  taskList: {
    id: number
    name: string
    done: boolean
  }[]
}

export const UpdateTask = ({ id, done, taskList }: UpdateTaskProps) => {
  const newListTasks = taskList.map((task) => {
    const newTask = {
      ...task,
      done: !done,
    }

    if (task.id === id) return newTask
    if (task.id !== id) return task

    return newTask
  })

  return newListTasks
}
