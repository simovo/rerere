import React, { Component } from 'react';

let count = 0;

class App extends Component {
  state = {
    todos : [
      {
        id: count++,
        body: "공부",
        complete: true
      },
      {
        id: count++,
        body: "공부",
        complete: false
      }
    ],
    newTodoBody : ''

  }



  handleInputChange = e => {
    this.setState({newTodoBody : e.target.value})
  }

  handelBtnClick = e => {
  if (this.state.newTodoBody) {
      const newTodo = {
        body : this.state.newTodoBody,
        complete :false,
        id: count++
      };
      this.setState({
        todos : [
          ...this.state.todos,
          newTodo
        ],
        newTodoBody:''
      });
   }
  }

handletodoItemComplete = id =>{
  this.setState({
      todos :  this.state.todos.map(t => {
            const newtodo = {
              ...t
            }
            if (t.id === id) {
              newtodo.complete = true;
            }
            return newtodo
          })
        })
}

handleDel = id => {
  this.setState({
    todos: this.state.todos.filter(t => t.id !== id)

        })


}


  
  render() {
  const {todos, newTodoBody} = this.state

    return (
      <div>
        <h1>할일 목록</h1>
        <label>
        새 할일
        <input type="text" value={newTodoBody} onChange={this.handleInputChange} />
      <button onClick={this.handelBtnClick}>추가</button>
        </label>
      <ul>
        {
          todos.map(todo => ( <TodoItem 
            key = {todo.id} 
           {...todo}
             onComplete = {this.handletodoItemComplete} 
             del = {this.handleDel} />
            
            ))

        }

      </ul>
      </div>
    );
  }
}



class TodoItem extends Component {
render(){

  const {id,body,complete, onComplete, del} =this.props

return (
<li className = { complete ? 'complete' : '' }> 

{ body }

    < button onClick = {e => {onComplete(id) }} > 완료</button >

      <button onClick={ e => {del(id)}}> 삭제</button>
           
           
            </li >

  )

}

}


export default App;
