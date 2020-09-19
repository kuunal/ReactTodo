import React, { Component } from 'react';

class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed && 'line-through',
            borderBottom: '1px dotted',
            padding: '10px',
            background : '#f4f4f4'
        }
    }


    render() {
        const {id, title} = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>                
                    <input type="checkbox" onChange={this.props.TodoChecked.bind(this, id)}/>
                    {this.props.todo.Title} 
                    <button  onClick={this.props.TodoDelete.bind(this, id)} style={btnStyle} >Delete</button>
                </p>
			</div>  
        )
    }

    

}
const btnStyle = {
    backgroundColor:'white',
    padding:'1px',
    borderRadius:'5px',
    boxShadow:'2px 2px 4px  1px black',
    float:'right',

    
}

export default TodoItem