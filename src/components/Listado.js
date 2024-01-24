import React, { useEffect, useState } from 'react'

export const Listado = ({listMovies,setListMovies}) => {

    // const [listMovies, setListMovies] = useState([])

    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = () => {
        const movies = JSON.parse(localStorage.getItem('movies'))
        setListMovies(movies)
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
                    <button className="delete">Borrar</button>
                </article>)
            })
            :
            <h2>No hay peliculas para mostrar</h2>
            }
        </>
    )
}
