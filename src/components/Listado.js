import React, { useEffect, useState } from 'react'
import { saveInStorage } from '../helpers/saveInStorage';

export const Listado = ({listMovies,setListMovies}) => {

    // const [listMovies, setListMovies] = useState([])

    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = () => {
        const movies = JSON.parse(localStorage.getItem('movies'))
        setListMovies(movies)
        return movies
    }

    const deleteMovie = idMovie =>{
        //Conseguir peliculas almacenadas
        const moviesList = getMovies()
        //Filtrar para eliminar la pelicula seleccionada
        const newArrayListMovies = moviesList.filter(movie => movie.id !== parseInt(idMovie))
        //Actualizar estado de listado
        setListMovies(newArrayListMovies)
        //Actualizar storage
        localStorage.setItem('movies',JSON.stringify(newArrayListMovies))
    }

    return (
        <>
            {listMovies !=null 
            ? 
            listMovies.map(movie => {
                return (<article key={movie.id} className="peli-item">
                    <h3 className="title">{movie.title}</h3>
                    <p className="description">{movie.descrip}</p>
                    <button className="edit">Editar</button>
                    <button className="delete" onClick={()=> deleteMovie(movie.id)}>Borrar</button>
                </article>)
            })
            :
            <h2>No hay peliculas para mostrar</h2>
            }
        </>
    )
}
