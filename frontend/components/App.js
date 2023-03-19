import React from 'react';
import TodoList from './TodoList';
import Form from './Form';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
      
    }
  }
  handlerClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === true);
      })
    });

  }
  handlerAdd = (name) => {
    const newTodo={
      name: name,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]

    });
  }

  handleToggle = (clikedId) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo=> {
        if(todo.id === clikedId){
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })

    });
  }
 
  
  
  render() {
    const {todos} = this.state;
    return (
      <div>
       <TodoList   handleToggle={this.handleToggle} todos={todos}/>
       <Form handlerAdd={this.handlerAdd}/>
       <button onClick={this.handlerClear}>Clear Data</button>
      </div>
    )
  }
}


export default App