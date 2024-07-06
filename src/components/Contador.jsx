import React, { useState } from 'react'
//HOOKS- useState

const Contador = (props) => {
 const [cuenta, setCuenta]= useState(props.inicialState);
const suma = ()=>{
    setCuenta (cuenta + 1);
}
    return (
    <div> <h1>Contador</h1>
    <h3>{cuenta} </h3>
    <button onClick={suma}>+</button>
    <button onClick={()=> setCuenta(props.inicialState) }>Reset</button>
    <button onClick={()=>setCuenta(cuenta - 1)  }>-</button>
    </div>
  )
}

export default Contador