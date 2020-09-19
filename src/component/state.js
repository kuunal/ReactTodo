import React, { Component } from 'react'

class StateClass extends Component{
    constructor(){
        super()
        this.state = {
            message:"Click button to change text"
        }
    }
    changetext(){
        this.setState({
            message:'Text has been changed'
        })
    }
    render(){
        return(
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={( )=> this.changetext()}>Change Text</button>
        </div>
        )
    }
}
export default StateClass