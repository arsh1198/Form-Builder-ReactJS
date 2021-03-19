import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { BuilderContext } from '../contexts/builderContext'

const TitleModal = ({ isOpen, onClose, navigateTo }) => {
  const history = useHistory()
  const [formTitle, setFormTitle] = useState('')
  const { pushBlock } = useContext(BuilderContext)
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      closeOnOverlayClick={false}
      closeOnEsc={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Form Title</ModalHeader>

        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Enter a Suitable Title for your Form.</FormLabel>
            <Input
              placeholder="Form Title"
              value={formTitle}
              onChange={e => setFormTitle(e.target.value)}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            disabled={formTitle.length < 1}
            onClick={() => {
              history.push(navigateTo)
              pushBlock({ type: 'Title', value: formTitle })
            }}
            colorScheme="teal"
            mr={3}
          >
            Done
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default TitleModal
