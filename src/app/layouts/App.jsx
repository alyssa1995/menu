import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'
import NavBar from '../../features/nav/NavBar/NavBar'
import eventDashboard from '../../features/event/eventDashboard/eventDashboard';
import eventDetailedPage from '../../features/event/eventDeatiled/eventDetailedPage';
import peopleDashboard from '../../features/user/peopleDashboard/peopleDashboard';
import userDetailedPage from '../../features/user/userDetailed/userDetailedPage';
import settingsDashboard from '../../features/user/settings/settingsDashboard';
import EventForm from '../../features/event/EventForm/EventForm';
import homePage from '../../features/home/homePage';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={homePage} />
        </Switch>

        <Route path="/(.+)" render={() => (
          <div>
            <NavBar />
              <Container className="main">
                <Switch>
                    <Route path='/events' component={eventDashboard} />
                    <Route path='/events/:id' component={eventDetailedPage} />
                    <Route path='/people' component={peopleDashboard} />
                    <Route path='/profile/:id' component={userDetailedPage} />
                    <Route path='/settings' component={settingsDashboard} />
                    <Route path='/createEvent' component={EventForm} />
                </Switch>
              </Container>
            </div>
)}/>
      </div>   
    );
  }
}

export default App;