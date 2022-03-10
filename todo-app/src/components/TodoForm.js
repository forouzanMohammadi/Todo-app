import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'

export default class TodoForm extends Component {

  render() {
    return (
      <Container>
        <form className="d-flex justify-content-center">
            <input type="text" placeholder="Add your new todo..." 
            value={this.props.value}
            onChange={this.props.handleChange} 
            />
           <button className='btnsubmit' type='submit'><FaPlus className="icon"/></button>
        </form>
      </Container>
    )
  }
}
