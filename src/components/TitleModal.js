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
import { BuilderContext } from '../contexts/builderContext'

const TitleModal = ({ isOpen, onClose }) => {
  const [formTitle, setFormTitle] = useState('')
  const { pushForm } = useContext(BuilderContext)

  const handleCreateNewForm = () => {
    pushForm([{ type: 'Title', value: formTitle }])
  }

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
            onClick={handleCreateNewForm}
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
