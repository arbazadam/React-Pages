const initState={
    posts:[
        {id:1,name:'arbaz',age:23},
        {id:2,name:'asiya',age:27},
        {id:3,name:'aadil',age:26}
    ]
}

const rootReducer=(state=initState,action)=>{
    return state;
}

export default rootReducer;