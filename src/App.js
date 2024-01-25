import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {
    const [listMovies, setListMovies] = useState([])


    return (
        <div className="layout">
            {/* Cabecera */}
            <header className="header">
                <div className="logo">
                    <div className="play"></div>
                </div>
                <h1>Mis Pelis</h1>
            </header>
            {/* Barra de navegacion */}
            <nav className="nav">
                <ul>
                    <li>
                        <a href="/#">Inicio</a>
                    </li>
                    <li>
                        <a href="/#">Peliculas</a>
                    </li>
                    <li>
                        <a href="/#">Blog</a>
                    </li>
                    <li>
                        <a href="/#">Contacto</a>
                    </li>
                </ul>
            </nav>


            {/* Listado de peliculas */}
            <section className="content">
                <Listado listMovies={listMovies} setListMovies={setListMovies}></Listado>
            </section>

            <aside className="lateral">

                <Buscador listMovies={listMovies} setListMovies={setListMovies}></Buscador>

                <Crear setListMovies={setListMovies}></Crear>
            </aside>

            <footer className="footer">
                &copy; Master en Js ES12 y Typescript <a href="/#">Pagina</a>
            </footer>

        </div>
    );
}

export default App;
