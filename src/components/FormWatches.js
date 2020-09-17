import React from 'react'
import {Formik,Form,Field} from 'formik'
import Axios from 'axios'
import { StringConstants } from '../constants/StringConstants'
import { TextField } from '@material-ui/core'
import * as Yup from 'yup'

function FormWatches() {
    const initialValues={
        watch_name:"",
        watch_description:"",
        watch_availability:""
    }
    const submitHandler=(values)=>{
Axios.post(StringConstants.api_url+"/postWatches",values).then(()=>{
    console.log("data posted successfully")
}).catch((error)=>{
    console.log("Theres some error, try to figure out")
})
    }
    const validationSchema= Yup.object({
        watch_name:Yup.string().required('Required'),
        watch_description: Yup.string().required('Required'),
        watch_availability: Yup.string().required('Required')
    })
    return (
        
            <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submitHandler}>
                <Form>
                    <div>
                    <Field name="watch_name"></Field>
                    </div>
                    <div>
                    <Field name="watch_description"></Field>
                    </div>
                </Form>
            </Formik>
        
    )
}

export default FormWatches
