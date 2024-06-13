import React from 'react'

import { Ficha } from '../Ficha/Ficha'
export const Welcome = () => {
  return (
    <>
      <h1>instrumento de evaluación</h1>
      <h2>Ficha: {<Ficha/> }</h2>
      <a className='into' href=''>Ingresar</a>
    </>
  )
}
