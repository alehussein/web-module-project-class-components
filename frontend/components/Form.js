import React from 'react'


class Form extends React.Component {

  constructor(){
    super();
    this.state ={
      input: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handlerAdd(this.state.input);
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    })
  }

  render() {
    return (
      
        <form>
          <input type="text" name='Username' placeholder='Input' onChange={this.handleChange}></input>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
    
    )
  }
}

export default Form;