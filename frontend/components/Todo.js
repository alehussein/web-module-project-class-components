import React from 'react'


// class Todo extends React.Component {
//   render() {
//     return (
//       <div>
//      
//       </div>
//     )
//   }
// }

class Todo extends React.Component {

  handleClick = () => {
    
    this.props.handleToggle(this.props.todo.id);
  }




  render() {
    return  (<li onClick={this.handleClick} key={this.props.todo.id}>{this.props.todo.name} {this.props.todo.completed?<span> - Completed</span>:<span></span>}</li>)
            }
   
}





export default Todo