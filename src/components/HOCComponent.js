import React, { Component } from 'react';
export default function Hoc(OriginalComponent) {

    //Returns this enhanced component
    return class EnhancedComponent extends Component {
        constructor(props) {
            super(props);
            this.state={
                count:0
            }
        }
        handleCount=()=>{
            this.setState({
                count:this.state.count+1
            })
        }
        //The render method of the EnhancedComponent which returns the OriginalComponent with certain enhanccements
        render() {
            return < OriginalComponent count={this.state.count} increment={this.handleCount} />
        }
    }
}