import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';




export default function FormComponent()
{
    const formik=useFormik({
initialValues:{
    username:"",
    email:"",
    birthdate:""
},
validationSchema: Yup.object({
    username:Yup.string().required('Required'),
    email: Yup.string().required('Required').email("Invalid format"),
}),

/*validate: (values)=>{
    let errors={};
    if(!values.username)
    {
        errors.username="required";
    }
    else if(values.username.length<5)
    {
        errors.username="Username too short";
    }
    if(!values.email)
    {
        errors.email="required";
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    {
        errors.email="Please type a valid email";
    }
    console.log(errors)
    return errors;
    
},*/
onSubmit:(values)=>{
console.log("These are the values you are submitting: "+values);
}
    })
    
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="username">
<label htmlFor="username">Username: </label>
<input type="text" id="username" name="username" value={formik.values.username} onBlur={formik.handleBlur} onChange={formik.handleChange}></input>
<div className="error" style={{color:"red"}}>{formik.touched.username && formik.errors.username?<div >{formik.errors.username}</div>:null}</div>
                </div>
                <div className="email">
                <label htmlFor="email">Email: </label>
<input type="text" id="email" name="email" {...formik.getFieldProps('email')}></input> 
    <div className="error">{formik.touched.email && formik.errors.email?<div style={{color:"red"}}>{formik.errors.email}</div>:null}</div>
                </div>
                <div className="birthdate" style={{padding:"5px"}}>
                
<input type="date"></input>
                </div>
                <button type="submit">Click Me</button>
            </form>
        </div>
    );
}