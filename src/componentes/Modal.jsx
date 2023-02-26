import React from "react";
import styled from "styled-components";
import "../css/estilos.css";
import { AiOutlineClose } from "react-icons/ai";

export const Modal = ({ titulo, children, estado, cambiarEstado }) => {
  return (
    <>
      {estado && (
        <Overlay className="overlay">
          <ContenedorModal>
            <EncabezadoModal>
              <h3 className="tituloModal">{titulo}</h3>
            </EncabezadoModal>
            <div className="inputs">
              <input className="dato" placeholder="Nombre Objetivo"></input>

              <input className="dato" placeholder="Cantidad Objetivo"></input>

              <button className="boton">Aceptar</button>
            </div>
            <BotonCerrar onClick={() => cambiarEstado(!estado)}>
              <AiOutlineClose className="cerrar" />
            </BotonCerrar>
            {children}
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
};

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContenedorModal = styled.div`
  width: 500px;
  min-height: 100px;
  background: #fff;
  position: relative;
  border-radius: 16px;
  box-shadow: #1B1D2A 0px 7px 29px 0px;
  padding  20px
`;

const EncabezadoModal = styled.div`
  background: #fff;

  .tituloModal {
    background-color: #fff;
    color: #1b1d2a;
    padding-bottom: 20px;
    border-bottom: 1px #aaa solid;
  }
`;

const BotonCerrar = styled.button`
  background: #fff;
  position: absolute;
  top: 10px;
  right: 20px;
  border: none;
  width: 20px;
  height: 20px;
  cursor: pointer;

  .cerrar {
    background: #fff;
    padding: 7px;
  }
  .cerrar:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
