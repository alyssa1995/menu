import React, { Component } from 'react'
import { Dropdown, Menu, Item, Image, Grid} from 'semantic-ui-react'


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
        <Grid columns={2} divided>
          <Grid.Row>
              <Grid.Column>
                <Item>
                  <Image size="tiny" circular src="https://randomuser.me/api/portraits/men/20.jpg"/>
                </Item>
              </Grid.Column>
              <Grid.Column>
                <Item>
                  <Item.Description>
                    Hi, Alyssa
                  </Item.Description>
                </Item>
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



/* class NavBar extends Component {

  render() {
    return (
     
              <Menu inverted fixed="top">
                <Container>
                  <Menu.Item header>
                    <img src="assets/logo.png" alt="logo" />
                    Re-vents
                  </Menu.Item>
                  <Menu.Item name="Events" />
                  <Menu.Item>
                    <Button floated="right" positive inverted content="Create Event" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button basic inverted content="Login" />
                    <Button basic inverted content="Sign Out" style={{marginLeft: '0.5em'}} />
                  </Menu.Item>
                </Container>
              </Menu>
              
                
                )
              }
            }

export default NavBar */