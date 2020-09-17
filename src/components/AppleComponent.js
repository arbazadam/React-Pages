import React,{useState} from 'react';



const A=()=>{
   
    const fruits=["apple","orange","banana"];
    const x=fruits.map((fruit,id)=>{return<ul ><li key={id}>{fruit}</li></ul>});
    return(
<div>
    <h1 style={{color:"red"}}>These are some fruits</h1>
    <br></br>
    {x}
</div>
)};

export default A;