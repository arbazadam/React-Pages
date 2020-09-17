import React, { Component } from 'react';
import Hoc from './HOCComponent.js'
class HoverComponent extends Component {
    
    render() { 
        const{count,increment}=this.props
        return ( 
        <h1 onMouseOver={increment}>Hovered {count} times</h1>
         );
    }
}
 
export default Hoc(HoverComponent);