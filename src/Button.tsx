import React from "react";

type ButtonProps = {
    tamanho?: string,
    children: React.ReactNode,
    onClick? : () => void 
    
}


export default function Button(props: ButtonProps){
    return(
        <>
        <button onClick={props.onClick} style={{fontSize : props.tamanho}}>{props.children}
        </button>
        </>
    )
}