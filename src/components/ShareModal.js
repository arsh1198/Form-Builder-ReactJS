import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Heading,
  useToast
} from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const ShareModal = ({ link, isOpen, onClose, navigateTo }) => {
  const history = useHistory()
  const toast = useToast()
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      closeOnOverlayClick={false}
      closeOnEsc={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading size="md">Form Saved</Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody
          bg="#E6FFFA"
          borderWidth={2}
          mx={4}
          borderRadius="lg"
          borderColor="#008080"
        >
          <Text fontWeight="bold">{link}</Text>
        </ModalBody>

        <ModalFooter>
          <CopyToClipboard
            text={link}
            onCopy={() => {
              toast({
                title: 'Link Copied',
                description: 'You can now Share the link',
                status: 'success',
                duration: 4000,
                isClosable: true
              })
            }}
          >
            <Button colorScheme="teal" mr={3}>
              Copy Link
            </Button>
          </CopyToClipboard>
          <Button
            onClick={
              navigateTo
                ? () => {
                    history.push(navigateTo)
                  }
                : onClose
            }
          >
            Done
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ShareModal
