import React from 'react'
import styled from 'styled-components'
import { ReactComponent as EditIcon } from '../assets/pencil.svg'
import { ReactComponent as DeleteIcon } from '../assets/trash.svg'

const TaskItem = ({ task, handlerRemove, handlerEdit }) => {
   return (
      <Wrap>
         <p>{task?.description}</p>
         <Button
            className="btn btn-link btn-sm"
            onClick={() => handlerEdit(task)}
         >
            <EditIcon />
         </Button>
         <Button
            className="btn btn-link btn-sm"
            onClick={() => handlerRemove(task.id)}
         >
            <DeleteIcon />
         </Button>
      </Wrap>
   )
}

export default TaskItem

const Button = styled.button`
   line-height: 1;
   svg {
      width: 14px;
      height: auto;
   }
`

const Wrap = styled.div`
   display: flex;
   align-items: center;
   border: 1px solid #ccc;
   margin-bottom: 8px;
   border-radius: 6px;
   padding: 10px;
   p {
      flex: 1;
      margin: 0
   }
`