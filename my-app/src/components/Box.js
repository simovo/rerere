import React from 'react';

export default class Box extends React.Component {
  render() {
    return (
      <div className="box">
        {this.props.children}
      </div>
    )
  }
}

<Box>
  <div>React</div>
</Box>
