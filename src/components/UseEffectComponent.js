import React, { Component,useEffect,useState } from 'react';

export default function App()
{
    const[x,setX]=useState(0);
    const[y,setY]=useState(0);

    const mousePosition=(e)=>{
setX(e.clientX)
setY(e.clientY)
    }

    useEffect(()=>{
        console.log("the function is dependent on the value of x "+x)
        window.addEventListener("mousemove",mousePosition)
    },[x])
    return(
    <h1>X- {x}& Y- {y}</h1>
    );
}