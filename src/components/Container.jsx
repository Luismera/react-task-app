import React, { useState } from 'react'
import styled from 'styled-components'

import { useTask } from '../hooks/useTask'
import FormTodo from './FormTodo'
import TaskList from './TaskList'
import { ReactComponent as AddIcon } from '../assets/plus.svg'

const Container = () => {
   const { tasks, updateTask, addTask, removeTask } = useTask()
   const [show, setShow] = useState(false)
   const [taskSelected, setTaskSelected] = useState()

   const handleOnSubmit = (item) => {
      if(taskSelected !== undefined && taskSelected.id) {
         updateTask({
            id: taskSelected.id,
            ...item
         })
         setTaskSelected()
      } else {
         addTask({
            ...item,
            status: 'todo'
         })
      }
   }
   return (
      <div className="container">
         <ButtonStyled
            onClick={() => setShow(true)}
            className="mb-3 mt-3 btn btn-primary"
         >
            <AddIcon /> Nueva tarea
         </ButtonStyled>
         <FormTodo
            show={show}
            handleClose={() => {
               setShow(false)
               setTaskSelected()
            }}
            handleOnSubmit={handleOnSubmit}
            className="mb-3"
            defaultValues={taskSelected}
         />
         <TaskList
            list={tasks}
            removeItem={removeTask}
            editItem={(e) => {
               setTaskSelected(e)
               setShow(true)
            }}
         />
      </div>
   )
}

export default Container

const ButtonStyled = styled.button`
   display: flex;
   align-items: center;
   grid-gap: 5px;
   svg {
      width: 12px;
      height: auto;
   }
`