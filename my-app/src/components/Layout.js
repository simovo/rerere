import React from 'react';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <div className="nav-bar">
          {this.props.navbar}
        </div>
        <div className="main">
          <div className="content">
            {this.props.content}
          </div>
          <div className="sidebar">
            {this.props.sidebar}
          </div>
        </div>
      </div>
    )
  }
}


class InstallPage extends React.Component {
  render() {
    return (
      <Layout
        navbar={<Navbar />}
        content={<InstallPageContent />}
        sidebar={<Sidebar />}
      />
    )
  }
}

class HelloWorldPage extends React.Component {
  render() {
    return (
      <Layout
        navbar={<Navbar />}
        content={<HelloWorldPageContent />}
        sidebar={<Sidebar />}
      />
    )
  }
}