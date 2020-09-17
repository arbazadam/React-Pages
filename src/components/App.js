import React from 'react';
import NewApp from './NewComponent.js';
import X from './StatefulComponent.js';
import TodoListComponent,{AxiosGet} from './TodoDisplayComponent.js';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import {Button,TextField, makeStyles} from '@material-ui/core';
import {useFormik} from 'formik'
import {StringConstants} from '../constants/StringConstants';
import 'bootstrap/dist/css/bootstrap.min.css';

import A from './AppleComponent.js';
import Axios from 'axios';

function App() {
  const arra=["mango","apple","chickoo"];
  const x = arra.map((word, idx) => {
    return <ul><li key={idx}>{word}</li></ul>;
});
  return (
    <div> 
    {x}
    <Router>
      <Route path="/ab" component={X}>
    <h1>Hi</h1>
    </Route>
    <Route path="/abc" component={Y}>
    <h1>Bye</h1>
    </Route>
    </Router>
    </div>
  );
}
export const Y=()=>{
  return (
    <h1>This is Y Component</h1>
  );
}

export const Nav=(props)=><h1>{props.name}</h1>

export function MaterialFormik()
{


  const formik=useFormik({
    initialValues:{
      username:"",
      email:"",
      birthdate:""
    },
onSubmit:(values)=>{
  Axios.post(StringConstants.api_url+"/postForUser",values).then((response)=>{console.log("data posted to the server"+response.status);})
},
validate: (values)=>{
  console.log("The error object is: "+formik.errors);
  let errors={}
  if(!values.username)
  {
    errors.username="Required";
  }
  if(!values.email)
  {
    errors.email="Required";
  }
  else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
  {
    errors.email='Invalid email format'
  }
  return errors;
}
  })
  
  return(
<div>
  <form onSubmit={formik.handleSubmit} >
    <div >
  <TextField
       id="username"
       name="username"
       label="UserName"
       value={formik.values.username}
       onChange={formik.handleChange}
       

     /> 
     {formik.errors.username?<div>formik.errors.username</div>:null} 
     </div>    <div><TextField
       id="email"
       name="email"
       label="email"
       type="text"
       value={formik.values.email}
       onChange={formik.handleChange}
     />    
       {formik.errors.email?<div>formik.errors.email</div>:null} </div>
     <div><TextField
       id="birthdate"
       name="birthdate"
       type="date"
       InputLabelProps={{
        shrink: true,
      }}
       value={formik.values.birthdate}
       onChange={formik.handleChange}
     />    
       {formik.errors.birthdate?<div>formik.errors.birthdate</div>:null} </div>
       <div>
     <button type="submit">Click me</button>
     </div>
    
  </form>
</div>
  );
}
 

export default App;
