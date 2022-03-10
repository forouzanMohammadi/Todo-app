import React, { Component } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { Container, Row } from 'react-bootstrap';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state={
      items:[],
      id:0,
      value:'',
      editItem:false
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  addTodo = ()=>{
    const newItem ={
      id:this.state.id,
      item:this.state.item
    }
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items:updatedItems,
      item:'',
      id:Math.floor(Math.random() * 100),
      editItem:false,
    });
    
  }
  render() {
    return (
      <Container fluid className='p-0 mt-5'>
        <h1>Todo app</h1>
        <Container>
          <Row >
            <div className="d-flex justify-content-center mt-5">
            <TodoForm value={this.state.value} handleChange={this.state.handleChange} addTodo={this.state.addTodo} />
            </div>
            <div className="d-flex justify-content-center mt-4">
            <TodoList/>
            </div>
          </Row>
        </Container>
      </Container>
    )
  }
}

