import { useState } from "react";
import "../css/estilos.css";
import { v4 as uuidv4 } from 'uuid';


export function Input(props) {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  
  const manejarNombre = e =>{
    setNombre(e.target.value);
    
  }
   const manejarCantidad = e =>{
    
    setCantidad(e.target.value);
  }

  const manejarEnvio = e =>{
    
    const objetivoNuevo ={
      id: uuidv4(),
      nombre: nombre,
      cantidad: cantidad
    }
    props.onClick(objetivoNuevo);
    }
  return (
    <div className="inputs">
      <input
        className="dato"
        placeholder={props.placeholder1}
        type={props.tipo1}
        onChange={manejarNombre}
      />
      <input
        className="dato"
        placeholder={props.placeholder2}
        type={props.tipo2}
        onChange={manejarCantidad}
      />

      <button onClick={manejarEnvio} className="boton">
        Aceptar
      </button>
    </div>
  );
}
