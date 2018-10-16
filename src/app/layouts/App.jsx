import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import EventDashboard from '../../features/event/eventDashboard/eventDashboard'

class App extends Component {
  render() {
    return (
      <div class="app">
        <h1>Menu</h1>
          <EventDashboard></EventDashboard>
      </div>
    );
  }
}

export default App;
