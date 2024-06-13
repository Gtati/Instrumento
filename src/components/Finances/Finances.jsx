import React, { useState } from 'react'
import { ListFinances } from '../ListFinances/ListFinances'
import { Welcome } from '../Welcome/Welcome'


export const Finances = () => {

  const [gasto, setGasto] = useState("gasto1")
  const [precio, setPrecio] = useState("precio1")
  const [list, setList] = useState("list1")

  const handleBills = (e) => {
  
    setGasto();

  }

  return (
    <div>
      <h1>Mis finanzas</h1>
      
      <form action="">        
        <input type="text" placeholder='¿En qué gastaste?' />
        <span>$ <input type="number" placeholder='¿Cuánto gastaste?' /></span>
      </form>      

      <button className='btnAdd' onClick={handleBills}>Agregar Gasto</button>
      <ul>
        
      </ul>
    </div>
  )
}
