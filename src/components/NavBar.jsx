import React from 'react'
import '../sass/styles/_navbar.scss'

const NavBar = () => {
    return (
        <nav className='display-navbar'>
            <a className='navbar-logo'>RENT A DRESS</a>
            <div className="display-serch">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
                <input type="text" placeholder="Buscar" />
            </div>
            <div className='display-navbar-links'>
                <ul className='display-ul'>
                    <li className='display-li'><a href="/">Alquilar</a></li>
                    <li className='display-li'><a href="/">Publicar</a></li>
                    <li className='display-li'><a href="/">Nosotros</a></li>
                    <li className='display-li'><a href="/">Contacto</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
