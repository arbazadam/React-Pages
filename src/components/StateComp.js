import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import Hoc from './HOCComponent.js';

class  StateComp extends Component {
    
    render() { 
        const{count,increment}=this.props
        return ( 
<Button color="primary" onClick={increment}>Clicked {count} times</Button>
         );
    }
}
 
export default Hoc(StateComp);