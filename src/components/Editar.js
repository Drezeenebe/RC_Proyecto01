import React from 'react'

export const Editar = () => {

    const title_component = 'Editar Pelicula'
    return (
        <div className='edit_form'>
            <h3>{title_component}</h3>
            <form>
                <input type="text"
                    name='title'
                    className='title_edit'
                    defaultValue="titulo original" />
                <textarea
                    name='descript'
                    defaultValue="Descripcion original"
                    className='descript_edit'
                />
                <input type="text" className='edit' value="Actualizar" />
            </form>
        </div>
    )
}
