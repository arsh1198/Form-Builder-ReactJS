import { Flex } from '@chakra-ui/layout'
import {
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tab,
  Button,
  useDisclosure
} from '@chakra-ui/react'
import Builder from './Builder'
import { FaShare } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import ShareModal from './ShareModal'
import { useAuth } from '../contexts/authContext'
import { useHistory, useParams } from 'react-router'
import Responses from './Responses'
import firebase from 'firebase/app'

const handleDelete = (userId, formId) => {
  firebase
    .firestore()
    .collection('users')
    .doc(userId)
    .collection('forms')
    .doc(formId)
    .delete()
    .then(() => {
      console.log(`${formId} deleted!`)
    })
    .catch(error => {
      console.log(error.message)
    })
}

const FormTabs = () => {
  const { user } = useAuth()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { formId } = useParams()
  const history = useHistory()
  return (
    <Tabs colorScheme="teal" h="100vh">
      <Flex h="100%" direction="column">
        <TabList mt={2} position="relative">
          <Tab>Form</Tab>
          <Tab isDisabled={!formId}>Responses</Tab>
          {formId ? (
            <>
              <Button
                onClick={onOpen}
                leftIcon={<FaShare />}
                colorScheme="teal"
                mr="3"
                size="sm"
                position="absolute"
                right={100}
              >
                Share
              </Button>
              <Button
                onClick={() => {
                  handleDelete(user.uid, formId)
                  history.replace('/')
                }}
                leftIcon={<MdDelete size={18} />}
                colorScheme="red"
                mr="3"
                size="sm"
                position="absolute"
                right={0}
              >
                Delete
              </Button>
            </>
          ) : null}
        </TabList>

        <TabPanels flexGrow={1} overflowY="auto">
          <TabPanel p={0} h="100%">
            <Builder />
          </TabPanel>
          <TabPanel>
            <Responses />
          </TabPanel>
        </TabPanels>
      </Flex>
      <ShareModal
        isOpen={isOpen}
        onClose={onClose}
        link={`localhost:3000/form/u/${user.uid}/${formId}`}
      />
    </Tabs>
  )
}

export default FormTabs
