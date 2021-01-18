import {
  Text,
  Center,
  Button,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Element = ({ type }) => {
  switch (type) {
    case "Text":
      return <Text>Helooo</Text>;
    case "Input":
      return <Input> </Input>;
  }
};

const Builder = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const elements = [];

  return (
    <Center>
      <Box>
        <Box p={4} mt={125} borderWidth="3px" borderRadius="lg" color>
          <Button
            onClick={onOpen}
            leftIcon={<AddIcon />}
            colorScheme="teal"
            variant="outline"
          >
            Add Element
          </Button>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent p={10}>
            <VStack spacing={2}>
              <Button
                colorScheme="teal"
                onClick={() => {
                  elements.push("Text");
                }}
              >
                Text
              </Button>
              <Button
                colorScheme="teal"
                onClick={() => {
                  elements.push("Input");
                }}
              >
                Input
              </Button>
            </VStack>
          </ModalContent>
        </Modal>
      </Box>
    </Center>
  );
};

export default Builder;
