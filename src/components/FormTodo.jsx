import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { Button, Modal, Form } from 'react-bootstrap'

const FormTodo = ({ show, handleClose, handleOnSubmit, defaultValues }) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm()

   const onSubmit = (values) => {
      handleOnSubmit(values)
      onClose()
   }

   const onError = (error) => {
      console.log('ERROR:::', error)
   }

   const onClose = () => {
      reset({
         description: "",
         status: "",
      })
      handleClose()
   }

   useEffect(() => {
      console.log('defaultValues', defaultValues)
      if (defaultValues !== undefined) {
         reset({
            description: defaultValues.description,
            status: defaultValues.status,
         })
      }
   }, [defaultValues, reset])

   return (
      <Modal show={show} onHide={onClose}>
         <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <Modal.Header closeButton>
               <Modal.Title>{defaultValues !== undefined ? "Actualizar Tarea" : "Crear Tarea"}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Descripcion</Form.Label>
                  <Form.Control
                     type="text"
                     {...register('description', {
                        required: 'Description es obligatorio',
                     })}
                  />
                  {errors.description && (
                     <Form.Text className="text-danger">
                        {errors.description.message}
                     </Form.Text>
                  )}
               </Form.Group>
               
               {defaultValues !== undefined ? (
               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Estado</Form.Label>
                  <Form.Select
                     {...register('status', {
                        required: 'Estado es obligatorio',
                     })}
                  >
                     <option>Seleccione una opcion</option>
                     <option value="todo">Por hacer</option>
                     <option value="progess">En progreso</option>
                     <option value="terminated">Terminada</option>
                  </Form.Select>
                  {errors.status && (
                     <Form.Text className="text-danger">
                        {errors.status.message}
                     </Form.Text>
                  )}
               </Form.Group>
               ) : null }
            </Modal.Body>

            <Modal.Footer>
               <Button variant="secondary" onClick={onClose}>
                  Cancelar
               </Button>
               <Button variant="success" type="submit">
                  Guardar
               </Button>
            </Modal.Footer>
         </Form>
      </Modal>
   )
}

export default FormTodo
