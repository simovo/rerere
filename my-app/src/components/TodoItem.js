import React, { Component } from "react"

export default class TodoItem extends Component {
  render() {
    const { id, body, complete, onComplete, del } = this.props
    return (
      <li className={complete ? 'complete' : ''}>
        {body}
       < button onClick={e => { onComplete(id) }} > 완료</button >
        <button onClick={e => { del(id) }}> 삭제</button>
      </li >

    )

  }

}


