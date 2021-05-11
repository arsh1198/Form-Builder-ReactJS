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
import { useParams } from 'react-router'
import Responses from './Responses'
import DelConfirm from './DelConfirm'
import { useContext } from 'react'
import { BuilderContext } from '../contexts/builderContext'

const FormTabs = ({ deletedRef }) => {
  const { user } = useAuth()
  const {
    isOpen: isOpenShare,
    onOpen: onOpenShare,
    onClose: onCloseShare
  } = useDisclosure()
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete
  } = useDisclosure()
  const { formId } = useParams()

  const { deleteForm } = useContext(BuilderContext)

  return (
    <Tabs colorScheme="teal" h="100vh">
      <Flex h="100%" w="100%" direction="column">
        <TabList mt={2} position="relative">
          <Tab>Form</Tab>
          <Tab isDisabled={!formId}>Responses</Tab>
          {formId ? (
            <>
              <Button
                onClick={onOpenShare}
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
                onClick={onOpenDelete}
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
          <TabPanel p={0} h="100%" w="100%">
            <Responses />
          </TabPanel>
        </TabPanels>
      </Flex>
      <ShareModal
        isOpen={isOpenShare}
        onClose={onCloseShare}
        link={`localhost:3000/form/u/${user.uid}/${formId}`}
      />
      <DelConfirm
        isDeleted={deletedRef}
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
        handleDelete={deleteForm}
      />
    </Tabs>
  )
}

export default FormTabs
