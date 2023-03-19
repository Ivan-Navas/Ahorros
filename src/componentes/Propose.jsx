import { useState } from "react";

export const Propose = ()=>{

    const sumbmit = (e) => {
        e.preventDefault();
        console.log(title)
    }

    const [title, setTitle] = useState("")
    return (
        <>
        <form 
        onSubmit={sumbmit}
        > 
            <input type="text" placeholder="Nombre de la tarea"
            onChange={(e)=> setTitle(e.target.value)}
            />
            <button>Aceptar</button>
        </form>
        </>
    )
}