import React,{useState} from 'react'

const X=(props)=>{
    const[mystate,setMyState]=useState({
        person:{
            name:"aadil",
            age:20
        }
    })
    const changeState=()=>{
        setMyState({
            person:{
                name:"arbaz",
                age:20
            }
        })
       
    }
    return(
    <div>Hello {props.val}<p>{changeState}</p></div>
    )
}

export default X;