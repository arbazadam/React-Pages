import React from 'react'
import '../css/TodoListComponent.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import SimpleCard from './CardComponent.js';
import {StringConstants} from '../constants/StringConstants.js'
import axios from 'axios';

export default function TodoListComponent()
{
    const test=(
        <div><p>Hiee</p><br></br><h3>Arbaz</h3></div>
    )
    return(
        <div className="todos">
          <SimpleCard />
        </div>
    );
}

export class AxiosGet extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            user:[]
        }
    }
    componentDidMount()
    {
axios.get(StringConstants.api_url).then((response)=>{
  console.log(response.data);
})

}
    
    render()
    {
        const words = ['sky', 'blue', 'falcon', 'wood', 'cloud'];
        const items = words.map((word, idx) => {
            return <li key={idx}>{word}</li>;   
        });
        return(
            
            <div>
            <h2>Hii axios</h2>
            {items}
            </div>
        );
    }
}

export const NewComponent=({obj1,obj2,obj3})=>{
    const words = ['sky', 'blue', 'falcon', 'wood', 'cloud'];
    const items = words.map((word, idx) => {
        return <li key={idx}>{word}</li>;   
    });
    return(
        <ul>
{items}
        </ul>
    )
}

