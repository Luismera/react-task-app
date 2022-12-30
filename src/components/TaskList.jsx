import React from 'react'
import styled from 'styled-components'
import TaskItem from './TaskItem'
import { Col, Row } from 'react-bootstrap'

const TaskList = ({ list, removeItem, editItem }) => { 
   const tasksTodo = list.filter(t => t.status === 'todo')
   const tasksProgress = list.filter(t => t.status === 'progess')
   const tasksTerminated = list.filter(t => t.status === 'terminated')

   const tasks = (list) => list.map((item) => (
      <TaskItem
         key={item.id}
         task={item}
         handlerRemove={removeItem}
         handlerEdit={editItem}
      />
   ))

   return (
      <Row>
         <Col className='border-end'>
            <h6>Por hacer</h6>
            {tasksTodo.length > 0 ? (
               tasks(tasksTodo)
            ) : (
               <NotResult>
                  No tienes tareas por hacer
               </NotResult>
            )}
         </Col>
         <Col className='border-end'>
            <h6>En progreso</h6>
            {tasksProgress.length > 0 ? (
               tasks(tasksProgress)
            ) : (
               <NotResult>
                  No tienes tareas en progreso
               </NotResult>
            )}
         </Col>
         <Col>
            <h6>Terminadas</h6>
            {tasksTerminated.length > 0 ? (
               tasks(tasksTerminated)
            ) : (
               <NotResult>
                  No tienes tareas terminadas
               </NotResult>
            )}
         </Col>
      </Row>
   )
}

export default TaskList

const NotResult = styled.div`
   color: #ccc;
   text-align: center;
   font-size: 14px;
   margin: 15px 0;
`