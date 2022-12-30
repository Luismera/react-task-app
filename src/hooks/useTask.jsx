import { useState } from 'react'

export const useTask = () => {
   const [tasks, setTasks] = useState([])

   const removeTask = (id) => {
      setTasks(tasks.filter(item => item.id !== id))
   }

   const addTask = (task) => {
      let newTask = {
         ...task,
         id: (+new Date()).toString(),
      }
      setTasks([...tasks, newTask])
   }

   const updateTask = (task) => {
      let idxTask = tasks.findIndex((t) => t.id === task.id)
      tasks[idxTask] = task
      setTasks(tasks)
   }

   return { tasks, updateTask, removeTask, addTask }
}
