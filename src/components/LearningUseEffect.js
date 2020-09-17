import React,{useEffect,useState} from 'react'

function LearningUseEffect() {
    const[name,setName]=useState('ray');
    const handler=()=>{
        const nameArray=['jay','kay','jim','tim']
        nameArray.forEach(element => {
            setName(element);
        });
        
    }
useEffect(()=>{
    console.log("This does not depends on any state change so it will just render once");
},[name]

)
    return (
        <div>
            <p onClick={handler}>Hie {name}</p>
        </div>
    )
}

export default LearningUseEffect
