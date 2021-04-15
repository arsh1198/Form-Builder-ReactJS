import { Button } from '@chakra-ui/button'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { MenuItem } from '@chakra-ui/menu'
import { MenuList } from '@chakra-ui/menu'
import { MenuButton } from '@chakra-ui/menu'
import { Menu } from '@chakra-ui/menu'
import { useHistory } from 'react-router'
import firebase from 'firebase/app'

const UserDropDown = ({ userName }) => {
  const history = useHistory()
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {userName}
      </MenuButton>
      <MenuList mt={4}>
        <MenuItem>Profile</MenuItem>
        <MenuItem
          onClick={async () => {
            await firebase.auth().signOut()
            history.replace('/login')
          }}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default UserDropDown
