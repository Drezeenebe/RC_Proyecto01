import React, { useState } from 'react'

export const Buscador = ({listMovies,setListMovies}) => {
    
    const [search,setSearch] = useState('')

    const searchMovie = e =>{
        //Crear estado y actualizarlo
        setSearch(e.target.value)        
        // Filtrar para buscar conincidencias
        let moviesResult = listMovies.filter(movie=>{
            return movie.title.toLowerCase().includes(search.toLowerCase())
        })

        if(search.length<=2 || moviesResult.length===0){
            moviesResult = JSON.parse(localStorage.getItem('movies'))
        }

        setListMovies(moviesResult)
    }
    return (
        <>
            <div className="search">
                <h3 className="title">Buscador</h3>
                <form action="">
                    <input type="text"
                    id='search_field'
                    name='search_movie'
                    autoComplete='off'
                    value={search}
                    onChange={e=>searchMovie(e)} />
                    <button id='search'>Buscar</button>
                </form>
            </div>
        </>
    )
}
