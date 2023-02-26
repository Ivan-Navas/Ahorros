import React, { useState } from "react";
import { Modal } from "./componentes/Modal";
import styled from "styled-components";
import { Input } from "./componentes/Input";
import { ListaDeObjetivos } from "./componentes/ListaDeObjetivos";
import { Objetivo } from "./componentes/Objetivo";
import './css/estilos.css'
import "./App.css";

function App() {
  const Contenedor = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding-top: 20px;
  `;
  const Boton = styled.button`
    background-color: #1b1d2a;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      animation-name: colores;
      animation-duration: 1s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }

    @keyframes colores {
      0% {
        background-color: #1b1d2a;
      }
      12.5% {
        background-color: #3c5053;
      }
      25% {
        background-color: #45858f;
      }
      37.5% {
        background-color: #31a6b8;
      }
      50% {
        background-color: #00ddff;
      }
      62.5% {
        background-color: #31a6b8;
      }
      75% {
        background-color: #45858f;
      }
      87.5% {
        background-color: #3c5053;
      }
      100% {
        background-color: #1b1d2a;
      }
    }
  `;

  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const [nombreObjetivo, setNombreObjetivo] = useState("");
 
  
  return (
    <div className="App">
      <div className="header">
        <h1 className="tituloHeader">Registro de Objetivos</h1>

        <Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>
          Nuevo Objetivo
        </Boton>
      </div>

      <Modal
        titulo="Añadir Objetivo"
        estado={estadoModal1}
        cambiarEstado={cambiarEstadoModal1}
      >
      </Modal>
      
      <div className="conObjetivo">
        <Objetivo/>
      </div>
    </div>
    
  );
}

export default App;
