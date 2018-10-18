import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import NavBar from '../../features/nav/NavBar/NavBar'

class App extends Component {
  render() {
    return (
      <div>
          <NavBar />
          <Container className="main">
          </Container>
      </div>
    );
  }
}

export default App;
