import React, { Component } from 'react';
import './App.css';
import Greet from './component/functional_component'
import Welcome from './component/class_component'
import StateClass from './component/state'
import Counter from './component/counter'
import Todo from './component/todo'
import Header from './component/headers'
import AddTodo from './component/form'
import About from './component/About'
import {v4 as uuid} from 'uuid'
import {BrowserRouter as Router, Route} from 'react-router-dom'


class App extends Component {

  constructor() {
    super()
    this.state = {
      todos: [
        {
          id: uuid(),
          Title: "Task 1",
          completed: false
        }, {
          id: uuid(),
          Title: "Task 2",
          completed: false
        }, {
          id: uuid(),
          Title: "Task 3",
          completed: false
        },
      ]
    }
  }

  TodoChecked = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id)
          todo.completed = !todo.completed
        return todo
      })
    })
  }
  TodoDelete = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  addNewTodo = (Title)=>{
    const newTodo = {
      id:uuid(),
      Title,
      completed:false
    }
    console.log(newTodo)
    this.setState({ 
      todos: [...this.state.todos, newTodo]
    })
    // () => console.log(this.state.todos)
  }

  render() {
    return (
      <Router>
        <div>
          {/* <Greet name="From React ">
          <p>Some random text </p>
          <Welcome/>
        </Greet>
        < Welcome />
        <StateClass/>
          <Counter></Counter>  */}
          <Header />
          <Route exact path="/" render= {props=>(
            <React.Fragment>
              <AddTodo addNewTodo={this.addNewTodo}/>
              < Todo todos={this.state.todos} TodoChecked={this.TodoChecked} TodoDelete={this.TodoDelete} />
            </React.Fragment>
          )}/> 
          <Route path="/about" component={About}/> 
          
        </div >
      </Router>
    );
  }
}

export default App;
