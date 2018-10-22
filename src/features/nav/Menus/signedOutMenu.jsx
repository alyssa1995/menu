import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

const SignedOutMenu = ({signIn}) => {
  return (
    <div>
        <Menu.Item floated="right" position="right">
                    <Button onClick={signIn} basic inverted content="Login" />
                    <Button basic inverted content="Register" style={{marginLeft: '0.5em'}} />
        </Menu.Item>
    </div>
  );
};

export default SignedOutMenu;
