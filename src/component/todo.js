import React, { Component } from 'react';
import TodoItem from './todoitem';

class Todo extends Component{
    // TodoChecked = (id)=>{
    //     console.log(id)
    // }

    render(){
        return (
            <div>
                {
                    this.props.todos.map((todo) =>(<TodoItem  todo={todo} TodoChecked={this.props.TodoChecked} TodoDelete={this.props.TodoDelete}/>))
                    }
            </div>
        )
    }


}


export default Todo