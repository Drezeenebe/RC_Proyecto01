import React, { useState } from 'react'
import { setInStorage } from '../helpers/saveInStorage'

export const Crear = () => {

    const titleComponent = "Añadir Pelicula"
    const [movie,setMovie] = useState({
        title: '',
        descript: ''
    })

    const {title, descript} = movie

    const getDatosForm = e =>{
        e.preventDefault()
        const target = e.target
        let title = target.title.value
        let descript = target.descript.value

        const newMovie = {
            id: new Date().getTime(),
            title,
            descript
        }

        //Guardar estado
        setMovie(newMovie)

        //Guardar en almacenamiento local
        setInStorage('movies',newMovie)

    }

    return (
        <>
            <div className="add">
                <strong>
                    {(title && descript) && "Has creado la Pelicula: "+title}
                </strong>
                <h3 className="title">{titleComponent}</h3>
                <form action="" onSubmit={getDatosForm}>
                    <input  type="text" 
                            id="title"
                            placeholder="Titulo" />
                    <textarea 
                            name="" 
                            id="descript" 
                            cols="30" 
                            rows="10" 
                            placeholder="Descripcion"></textarea>
                    <input 
                            type="submit" 
                            name="" 
                            id="" 
                            value="Guardar" />
                </form>
            </div>
        </>
    )
}
