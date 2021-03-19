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
import ShareModal from './ShareModal'
import { useAuth } from '../contexts/authContext'
import { useParams } from 'react-router'

const FormTabs = () => {
  const { user } = useAuth()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { formId } = useParams()
  return (
    <Tabs colorScheme="teal" h="100vh">
      <Flex h="100%" direction="column">
        <TabList mt={2} position="relative">
          <Tab>Form</Tab>
          <Tab isDisabled={!formId}>Responses</Tab>
          {formId ? (
            <Button
              onClick={onOpen}
              leftIcon={<FaShare />}
              colorScheme="teal"
              mr="3"
              size="sm"
              position="absolute"
              right={0}
            >
              Share
            </Button>
          ) : null}
        </TabList>

        <TabPanels flexGrow={1} overflowY="auto">
          <TabPanel p={0} h="100%">
            <Builder />
          </TabPanel>
          <TabPanel>Responses</TabPanel>
        </TabPanels>
      </Flex>
      <ShareModal
        isOpen={isOpen}
        onClose={onClose}
        link={`localhost:3000/form/u/${user.uid}/${formId}`}
        navigateTo="/"
      />
    </Tabs>
  )
}

export default FormTabs
