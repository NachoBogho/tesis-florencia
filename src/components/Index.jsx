import React from 'react'
import '../sass/styles/_index.scss'

const Index = () => {
  return (
    <div className='index-display'>
      <img src="../../public/img/index-foto.jpg" alt="" />
      <div className='display-texto-index'>
        <div className='display-texto'>
          <p className="index-p">ANNIE & PETRO</p>
          <h1 className="index-t">RENT A DRESS</h1>
          <div className='display-botones'>
          <a href="/">QUIERO PUBLICAR</a>
          <a href="/">QUIERO ALQUILAR</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Index
