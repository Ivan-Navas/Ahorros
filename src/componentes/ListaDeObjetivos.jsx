import React, { useState } from "react";
import { Modal } from "./FormularioModal";
import '../css/estilos.css'
import { Objetivo } from "./Objetivo";


export const ListaDeObjetivos = () => {
  const [objetivos, setObjetivo] = useState([]);
  
  const agregarObjetivo = (objetivo)=>{
    console.log(objetivo);
   
    objetivo.nombre = objetivo.nombre.trim();
    objetivo.cantidad = objetivo.cantidad.trim();
    const objetivosActuales = [...objetivos, objetivo ];
    setObjetivo(objetivosActuales);
   
    
  }
  return (
    <>
    <Modal onSubmit={agregarObjetivo}/>
      
      <div className="listaObjetivoContenedor">
        {
          objetivos.map((objetivo)=>{
            <Objetivo
              key={objetivo.id}
              id={objetivo.id}
              objetivo={objetivo.nombre}
              cantidad={objetivo.cantidad}
            />
          }
          )
        }
      
      </div>
    </>
  );
};
