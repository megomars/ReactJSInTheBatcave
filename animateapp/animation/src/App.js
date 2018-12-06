import React, { Component } from 'react';
import './App.css';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
const uuid = require('uuid/v4');

class App extends Component {

  constructor(props){
      super(props);
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
      this.getTodos=this.getTodos.bind(this);

      this.state={
        newTodo:'',
        todos:[
            {
              text:"hello world",
              id:uuid()
            },
            {
              text:"hello two",
              id:uuid()
            }
        ]
      };
  }

  handleChange (e){
    this.setState({ newTodo: e.target.value});
    console.log(this.state.newTodo);
  }

  getTodos(){
      return this.state.todos.map((todo,index) => {
        return(
          <li className="todo-item" key={todo.id}>{todo.text}</li>
        );
      })
  }

  handleSubmit (e){
    e.preventDefault();
    let todos = this.state.todos;
    todos.push({
      id:uuid(),
      text:this.state.newTodo
    });
    this.setState({
      newTodo:'',
      todos
    });
    console.log(this.state.todos);
  }

  render() {
    return (
      <div className="container">
      <TransitionGroup className="yo">
        <CSSTransition
        component="ul"
        className="todo-list"
        transitionName="new-todo"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}>
          {this.getTodos()}
        </CSSTransition>
      </TransitionGroup>
        <form onSubmit={this.handleSubmit}>
          <input
            className="todo-input"
            onChange={this.handleChange}
            placeholder="Add a todo"
            type="text"
            value={this.state.newTodo}
          />
        </form>
        <button className="todo-button">Add</button>
      </div>
    );
  }
}

export default App;
