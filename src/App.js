function App() {
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


        <section className="content">
            <article className="peli-item">
                <h3 className="title">Desarrollo web</h3>
                <p className="description">Pagina.cl</p>
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
            <article className="peli-item">
                <h3 className="title">Desarrollo web</h3>
                <p className="description">Pagina.cl</p>
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
            <article className="peli-item">
                <h3 className="title">Desarrollo web</h3>
                <p className="description">Pagina.cl</p>
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
            <article className="peli-item">
                <h3 className="title">Desarrollo web</h3>
                <p className="description">Pagina.cl</p>
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
        </section>
    
        <aside className="lateral">
            <div className="search">
                <h3 className="title">Buscador</h3>
                <form action="">
                    <input type="text"/>
                    <button>Buscar</button>
                </form>
            </div>
    
            <div className="add">
                <h3 className="title">Añadir Pelicula</h3>
                <form action="">
                    <input type="text" placeholder="Titulo"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Descripcion"></textarea>
                    <input type="submit" name="" id="" value="Guardar"/>
                </form>
            </div>
        </aside>
    
        <footer className="footer">
            &copy; Master en Js ES12 y Typescript <a href="/#">Pagina</a>
        </footer>

    </div>
  );
}

export default App;
