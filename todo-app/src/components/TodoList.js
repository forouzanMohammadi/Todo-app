import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'

export default class TodoList extends Component {
  render() {
    return (
      <Container className="todo-container d-flex justify-content-center">
        <ul>
          <li className="List-group-item text-capitalize d-flex justify-content-between">
            <div>title</div>
            <div className="todo-icon">
              <span className="mx-2 edit">
                <FaEdit />
              </span>
              <span>
                <FaTrashAlt className="trash" />
              </span>
            </div>
          </li>
        </ul>
      </Container>
    )
  }
}
