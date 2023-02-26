import React, { useState } from "react";
import { Modal } from "./Modal";
import '../css/estilos.css'
import { Objetivo } from "./Objetivo";
import { Input } from "./Input";

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
    <Input onClick={agregarObjetivo}/>
      <Modal 
      /> 
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
