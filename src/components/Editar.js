import React from 'react'

export const Editar = ({movie}) => {

    const title_component = 'Editar Pelicula'
    return (
        <div className='edit_form'>
            <h3>{title_component}</h3>
            <form>
                <input type="text"
                    name='title'
                    className='title_edit'
                    defaultValue={movie.title} />
                <textarea
                    name='descrip'
                    defaultValue={movie.descrip}
                    className='descrip_edit'
                />
                <input type="text" className='edit' value="Actualizar" />
            </form>
        </div>
    )
}
