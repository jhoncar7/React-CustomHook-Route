import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ handleAddTodo }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault(); // evitar el refres del formulario

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo(newTodo);
        reset();
    }

    return (
        <>
            <h4>Agregar Tarea</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Escriba una tarea pendiente..."
                    autoComplete='off'
                    onChange={handleInputChange}
                    value={description}
                    name='description'
                />

                <button
                    className='btn btn-outline-primary mt-1 btn-block'
                    type='submit'
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
