import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class Todolist extends Component {
  render() {
    const {
      todos,
      handletodoItemComplete,
      handleDel} = this.props
    return(
      <ul>
        {
          todos.map(todo => (<TodoItem
            key={todo.id}
            {...todo}
            onComplete={handletodoItemComplete}
            del={handleDel} />
          ))
        }
      </ul>

    )

  }

}