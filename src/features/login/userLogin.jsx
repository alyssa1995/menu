import React, { Component } from 'react'
import { Container, Image, Grid } from 'semantic-ui-react'
import { GoogleLogin } from 'react-google-login'
import '../login/UserLogin.css'

class UserLogin extends Component {
  render() {
    const responseGoogle = (response) => {
      console.log(response);
    }
    
    return (
  <Container> 
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Image centered size='medium' src="https://s3.amazonaws.com/whatif-assets-cdn/images/Zuul/zuul_logo_white.png"></Image>
        </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
            <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        />
        </Grid.Row>
    </Grid> 
  </Container>
    );
  }
}

export default UserLogin