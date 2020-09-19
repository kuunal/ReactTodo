import React, { Component } from "react";

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: "",
    };
  }

  getUserData = (e) => {
    this.setState({
      newTodo: e.target.value,
    });
   
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addNewTodo(this.state.newTodo);
    this.setState({
      newTodo: " ",
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="newTodo"
          placeholder="Add Todo..."
          style={{ flex: "10", padding: "10px" }}
          value={this.state.newTodo}
          onChange={this.getUserData}
        />
        <button type="submit" style={btnStyle} >
          Add Todo
        </button>
      </form>
    );
  }
}

const btnStyle = {
  flex̥: "1",
  padding: "5px",
  borderRadius: "10px",
  background: "black",
  color: "white",
};

export default AddTodo;
