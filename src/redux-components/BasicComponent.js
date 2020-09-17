import React from 'react'
import {connect} from 'react-redux'

function BasicComponent(props) {
    console.log(props)
const jsx=props.posts.map((post)=>{return(<p key={post.age}>{post.name}</p>)})
    return (
        <div>
            <h1 align="center">Hello Redux</h1>
            {jsx}
        </div>
    )
}

/*In this function we are taking the state from the redux store as a parameter
and mapping it to the props of our component*/

const mapStateToProps=(state)=>{
return{
    posts:state.posts
}
}
export default connect(mapStateToProps)(BasicComponent) 
/*The connect(mapStateToProps) function returns a HOC,
 which wraps our component and connects it to the store*/
