import React from 'react'
import {connect} from 'react-redux'

function AgeComponent(props) {
    
    return (
        <div>
           <p>{props.name} &nbsp <small>{props.age}</small></p>
        </div>
    )
}

export default connect((state)=>{return{name:state.posts[2].name,age:state.posts[2].age}})(AgeComponent)
