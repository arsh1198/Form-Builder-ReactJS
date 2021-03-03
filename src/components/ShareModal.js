import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Link
} from '@chakra-ui/react'

const ShareModal = ({ link, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} closeOnOverlayClick={false} closeOnEsc={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Form Saved!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Link>{link}</Link>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ShareModal
