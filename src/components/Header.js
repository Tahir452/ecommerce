import React,{} from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'
import {IoMdCart} from 'react-icons/io';
export default function Header() {

    return (
        <Menu size='large' >
        <Menu.Item
          name='home'
        
 
        />
        <Menu.Item
          name='messages'
        />

        <Menu.Menu position='right'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
}
