import React, { Component } from 'react'
import { Menu, Dropdown, Item, Grid, Image} from 'semantic-ui-react'
import '../NavBar/NavBar.css'
// import { NavLink, Link, withRouter } from 'react-router-dom'
// import SignedOutMenu from '../Menus/signedOutMenu'
// import SignedInMenu from '../Menus/signedInMenu';

import Greeting from './greeting'


const userName = {
  username: 'Alyssa'
}

class NavBar extends Component {
  state = {
    activeItem: 'sites',
  }

  handleItemClick = (e, { name }) => this.setState({
    activeItem: name
  })


  render() {
    const {activeItem} = this.state;
    return (
      <div>
        <Menu inverted vertical>
        <Item>
          <Image size="tiny" centered src="https://s3.amazonaws.com/whatif-assets-cdn/images/what_ifcolonizer.png"></Image>
        </Item>
        <Grid columns={2}>
        <Grid.Row centered>
              <Grid.Column className="image">
                
                  <Image size="medium" circular src="https://s3.amazonaws.com/whatif-assets-cdn/images/linkedin-mobile.png"/>
              
              </Grid.Column>
              </Grid.Row>
              <Grid.Row centered>
              <Grid.Column>
                  <p>
                    <Greeting></Greeting> {userName.username}
                  </p>  
              </Grid.Column>
              </Grid.Row>
        </Grid>
        <Dropdown item text='Sites'>
        <Dropdown.Menu name='sites' active={activeItem === 'sites'} onClick={this.handleItemClick} >
          <Dropdown.Item>Site Groups</Dropdown.Item>
          <Dropdown.Item>Sites</Dropdown.Item>
          <Dropdown.Item>Themes</Dropdown.Item>
          <Dropdown.Item>Sequences</Dropdown.Item>
          <Dropdown.Item>Landing Pages</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
        <Menu.Item
          name='Campaigns'
          active={activeItem === 'Campaigns'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Users'
          active={activeItem === 'Users'}
          onClick={this.handleItemClick}
        />
      <Menu.Item
          name='Settings'
          active={activeItem === 'Settings'}
          onClick={this.handleItemClick}
        />
      </Menu>
      </div>
    )
  }
}


export default NavBar


/*
class NavBar extends Component {
  state = {
    authenticated: false
  }

  handleSignIn = () => {
    this.setState({
      authenticated: true
    })
  }
  
  handleSignOut = () => {
    this.setState({
      authenticated: false
    });
    this.props.history.push('/')
  }

  render() {
    const {authenticated} = this.state;
    return (
     
              <Menu inverted fixed="top">
                <Container>
                  <Menu.Item as={Link} to='/' header>
                    <img src="assets/logo.png" alt="logo" />
                    Re-vents
                  </Menu.Item>
                  <Menu.Item as={NavLink} to='/events' name="Events" />
                  {authenticated && 
                  <Menu.Item as={NavLink} to='/people' name="People" />}
                  
                  {authenticated &&
                  <Menu.Item>
                    <Button as={Link} to='/createEvent' floated="right" positive inverted content="Create Event" />
                  </Menu.Item> }
                  {authenticated ? (
                    <SignedInMenu signOut={this.handleSignOut}/> 
                  ) : ( 
                    <SignedOutMenu signIn={this.handleSignIn}/>
                  )}
                </Container>
              </Menu>
              
                
                )
              }
            }

export default withRouter(NavBar); */