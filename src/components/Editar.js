import React from 'react'

export const Editar = ({ movie,getMovies,setEditar,setListMovies }) => {

    const title_component = 'Editar Pelicula'

    const saveEditar = (e,id) =>{
        e.preventDefault()
        const target = e.target

        //Buscar indice del objeto movie a actualizar
        const listMovies = getMovies()
        const indexMovie = listMovies.findIndex(movie => movie.id === parseInt(id))
        //Crear objeto con ese indice

        const movieUpdate = {
            id,
            title: target.title.value,
            descript: target.descript.value
        }

        //Actualizar movie en lista
        listMovies[indexMovie] = movieUpdate

        //Guardar en localStorage
        localStorage.setItem('movies',JSON.stringify(listMovies))
        //Actualizar states
        setListMovies(listMovies)
        setEditar(0)
    }

    return (
        <div className='edit_form'>
            <h3>{title_component}</h3>
            <form onSubmit={e => saveEditar(e, movie.id)}>
                <input type="text"
                    name='title'
                    className='title_edit'
                    defaultValue={movie.title} />
                <textarea
                    name='descript'
                    defaultValue={movie.descript}
                    className='descript_edit'
                />
                <input type="submit" className='edit' value="Actualizar" />
            </form>
        </div>
    )
}
