import React from "react";
import "../css/estilos.css";
import { AiOutlineEdit, AiOutlineCloseCircle } from "react-icons/ai";
export function Objetivo({id, eliminarObjetivo, objetivo = "", cantidad = 900, completado = 2}) {
  let tamaño;
  tamaño = (completado * 100) / cantidad;
  let total = tamaño.toString();
 
  let res = total.substring(0,4)
 
  let resultado = res + "%";


  
  return (
    <div className="objetivo-contenedor">
      <h3 className="contenido">objetivo:<br></br>{objetivo}</h3>
      <h3 className="contenido">cantidad:<br></br> {cantidad}</h3>
      <h3 className="contenido">Ahorrado: <br></br>{completado}</h3>
      <div className="iconos">
        <button className="botonObjetivo">
          <AiOutlineEdit title="Editar" className="botonDentro" color="#00ddff" />
        </button>
        <button className="botonObjetivo">
          <AiOutlineCloseCircle color="#00ddff" title="Eliminar" className="botonDentro"
          onClick={()=> eliminarObjetivo(id)}
          />
        </button>
      </div>
      <div className="porcentaje">
        <div style={{ width: resultado }} className="dentro">
          <p className="valorPorcentaje">{resultado}</p>
        </div>
      </div>
    </div>
  );
}
