import React from 'react'
import { Container, Image, Grid } from 'semantic-ui-react'
import '../login/UserLogin.css'

const UserLogin = ({history}) => {
  
    return (
      <div>
  <Container> 
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Image centered size='medium' src="https://s3.amazonaws.com/whatif-assets-cdn/images/Zuul/zuul_logo_white.png"></Image>
        </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
        <div onClick={() => history.push('/DashBoard')} className="ui huge white button">Login with Google        
        </div>
        </Grid.Row>
    </Grid> 
  </Container>
  </div>
    )
}

export default UserLogin