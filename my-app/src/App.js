import React, { Component } from 'react';
import Todolist from './components/Todolist'
import axios from 'axios'
let count = 1
  const TodoAPI = axios.create({
    baseURL: 'https://polar-mustang.glitch.me'
  })
class App extends Component {
  state = {
    loading : false,
    todos : [
      // {
      //   id: count++,
      //   body: "공부",
      //   complete: true
      // },
      // {
      //   id: count++,
      //   body: "공부",
      //   complete: false
      // }
    ],
    newTodoBody : ''
  }

  async componentDidMount(){
  await this.fetchTodos()
  }

  fetchTodos = async () => {
    this.setState({
      loading: true
    })
    const res = await TodoAPI.get('./todos')
    this.setState({
      todos: res.data,
      loading: false
    })

  }

  handleInputChange = e => {
    this.setState({newTodoBody : e.target.value})
  }

  handelBtnClick = async e => {
  if (this.state.newTodoBody) {
      const newTodo = {
        body : this.state.newTodoBody,
        complete :false,
      };
      this.setState({
        loading : true
      })
     await TodoAPI.post('/todos', newTodo)
     await this.fetchTodos()
      this.setState({
        newTodoBody:''
      });
   }
  }

handletodoItemComplete = async id =>{
  this.setState({
    loading : true
  })
     await TodoAPI.patch(`/todos/${id}` , {
      complete : true 
    })
  await this.fetchTodos()
}


handleDel = async id => {
  this.setState({loading :true})
  await TodoAPI.delete(`/todos/${id}`)
  await this.fetchTodos();
}






  render() {
  const {todos, newTodoBody, loading} = this.state
    return (
      <div>
        <h1>할일 목록</h1>
        <label>
        새 할일
        <input type="text" value={newTodoBody} onChange={this.handleInputChange} />
      <button onClick={this.handelBtnClick}>추가</button>
        </label>
        {loading ? (
          <div> loading... </div>
        ) : (
<Todolist todos = {todos} 
      handletodoItemComplete = {this.handletodoItemComplete} 
      handleDel={this.handleDel}  /> 
        )}
      </div>
    );
  }
}





export default App;
