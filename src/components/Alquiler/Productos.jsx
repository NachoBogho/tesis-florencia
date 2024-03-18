import React from 'react';
import '../../sass/styles/_productos.scss';

const Productos = ({ products }) => {
  return (
    <div className='productos-section'>
      <div className='productos-display'>
        {products.map((product) => (
          <div key={product.id} className='productos'>
            <div className='usuario-valoracion'>
              <img src={product.foto_de_perfil} alt="" />
              <p>{product.usuario}</p>
              <div className='valoracion'>
                <div className="stars">
                  {[...Array(product.valoracion)].map((_, index) => (
                    <svg
                      key={index}
                      className='star-icon'
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        fill="#ffc107"
                        d="M12 2l3.09 6.37 6.91.92-5 4.86 1.18 6.88L12 18.29l-6.17 3.74 1.18-6.88-5-4.86 6.91-.92L12 2z"
                      />
                    </svg>

                  ))}
                </div>
              </div>
            </div>
            <h2>{product.producto}</h2>
            <img  src={product.imagen} alt={product.producto} />
            <p>{product.descripcion}</p>
            <p className='precio'>PRECIO: <span>{product.precio} ARS</span></p>

            <div className='botones-productos'>
              <a href="">VER MÁS</a>
              <a href="">ALQUILAR</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
