import React, { Component } from 'react';

const todos = [
  {
  id:1,
  body : "공부",
  complete : true,
},{
    id: 1,
    body: "공부",
    complete: false,
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <h1>할일 목록</h1>
      <ul>
        {
          todos.map(todos => (
            <li key={todo.id}>{todo.body}</li>
          ))

        }
      </ul>

      </div>

    );
  }
}

export default App;
