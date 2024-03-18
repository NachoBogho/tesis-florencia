import React, { useState } from 'react';
import '../../sass/styles/_filtros.scss';

const Filtros = () => {
    return (
        <div className="sidebar">
      <h2>Filtrar por:</h2>
      <div className="filter-section">
        <h3>Categoría</h3>
        <ul>
          <li>
            <input type="checkbox" id="categoria1" />
            <label htmlFor="categoria1">Camisetas</label>
          </li>
          <li>
            <input type="checkbox" id="categoria2" />
            <label htmlFor="categoria2">Pantalones</label>
          </li>
          <li>
            <input type="checkbox" id="categoria3" />
            <label htmlFor="categoria3">Chaquetas</label>
          </li>
          {/* Agrega más opciones de categoría aquí */}
        </ul>
      </div>
      <div className="filter-section">
        <h3>Color</h3>
        <ul>
          <li>
            <input type="checkbox" id="color1" />
            <label htmlFor="color1">Rojo</label>
          </li>
          <li>
            <input type="checkbox" id="color2" />
            <label htmlFor="color2">Azul</label>
          </li>
          <li>
            <input type="checkbox" id="color3" />
            <label htmlFor="color3">Verde</label>
          </li>
          {/* Agrega más opciones de color aquí */}
        </ul>
      </div>
      <div className="filter-section">
        <h3>Tamaño</h3>
        <ul>
          <li>
            <input type="checkbox" id="size1" />
            <label htmlFor="size1">S</label>
          </li>
          <li>
            <input type="checkbox" id="size2" />
            <label htmlFor="size2">M</label>
          </li>
          <li>
            <input type="checkbox" id="size3" />
            <label htmlFor="size3">L</label>
          </li>
          {/* Agrega más opciones de tamaño aquí */}
        </ul>
      </div>
      <div className="filter-section">
        <h3>Ocasión</h3>
        <ul>
          <li>
            <input type="checkbox" id="ocasion1" />
            <label htmlFor="ocasion1">Casual</label>
          </li>
          <li>
            <input type="checkbox" id="ocasion2" />
            <label htmlFor="ocasion2">Cóctel</label>
          </li>
          <li>
            <input type="checkbox" id="ocasion3" />
            <label htmlFor="ocasion3">Negocios</label>
          </li>
          <li>
            <input type="checkbox" id="ocasion4" />
            <label htmlFor="ocasion4">Gala</label>
          </li>
          {/* Agrega más opciones de ocasión aquí */}
        </ul>
    </div>
    </div>
        )   
}

export default Filtros;
