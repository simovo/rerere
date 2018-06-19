import React, { Component } from "react"; // 노드 모듈스 안에 라이브러리 모듈을 쓸 떄는 경로를 안쓴다.

import TodoContainer from '../containers/TodoContainer';
import {TodoProvider} from '../contexts/TodoContext';
import LogoutButtonContainer from '../containers/LogoutButtonContainer';

export default class TodoPage extends Component {
  render() {
    return (
      <TodoProvider>
        <TodoContainer />
        <LogoutButtonContainer />
      </TodoProvider>
    )
  }
}


