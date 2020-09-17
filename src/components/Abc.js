import React,{useState} from 'react'
import { TextField } from '@material-ui/core'

function Abc() {
    const [state, setstate] = useState(0)
console.log("The component has re rendered")
    return (
        <div>
            <TextField value={state} onBlur={()=>{setstate(state+1)}}></TextField>
        </div>
    )
}

export default Abc
