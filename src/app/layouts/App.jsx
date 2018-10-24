import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import DashBoard from '../../features/home/DashBoard';
import UserLogin from '../../features/login/UserLogin'
//import NavBar from '../../features/nav/NavBar/NavBar'
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={UserLogin} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
                <Switch>
                  <Route path="/DashBoard" component={DashBoard} />
                </Switch>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;