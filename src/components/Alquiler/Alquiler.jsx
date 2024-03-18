import Navbar from '../NavBar.jsx'
import Filtros from './Filtros.jsx'
import '../../sass/styles/_loader.scss';
import '../../sass/styles/_alquiler.scss';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import jsonCall from '../../data/productos.json'; // Importar datos JSON directamente
import Productos from './Productos.jsx';

const Alquiler = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para el indicador de carga
  const category = useParams().category;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simular un retraso con setTimeout para imitar una solicitud de red
        setTimeout(() => {
          if (category) {
            const filteredProducts = jsonCall.filter(product => product.category === category);
            setProducts(filteredProducts);
          } else {
            setProducts(jsonCall);
          }
          setLoading(false); // Establecer loading en false después de que se carguen los datos
        }, 1200);
      } catch (error) {
        console.error('Error al obtener datos:', error);
        setLoading(false); // Asegurar que loading se establezca en false en caso de error
      }
    };

    fetchData();
  }, [category]);

  // Renderizar el indicador de carga si loading es true
  if (loading) {
    return (
      <div className='displaySpin'>
        <div className='lds-ring'><div></div><div></div><div></div><div></div></div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className='display-alquiler'>
        <Filtros/>
        <Productos products={products} />
      </div>

    </div>
  )
}

export default Alquiler
