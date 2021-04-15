import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'
import { useHistory, useParams } from 'react-router-dom'

const DelConfirm = ({ isOpen, onClose, handleDelete, isDeleted }) => {
  const history = useHistory()

  const { formId } = useParams()
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      closeOnOverlayClick={false}
      closeOnEsc={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Form</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Are you sure you want to delete this form ?</ModalBody>

        <ModalFooter>
          <Button
            onClick={() => {
              handleDelete(formId).then(() => {
                history.replace('/')
              })
              isDeleted.current = true
            }}
            colorScheme="red"
            mr={3}
          >
            Yes
          </Button>
          <Button colorScheme="teal" mr={3}>
            No
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default DelConfirm
