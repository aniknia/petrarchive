import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import Image from "../node_modules/next/image";

export default function Item(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        display="block"
        colorScheme="gray"
        p="0"
        m="15"
        width={330}
        height={371.5}
      >
        <Box width={330} pt="5" pb="5" pr="5" pl="5">
          <Image
            src={props.petr.attributes.image.data[0].attributes.url}
            alt="Petr"
            width={320}
            height={320}
          />
          <Text width={290}>{props.petr.attributes.name}</Text>
          <Text width={290}>Creator: {props.petr.attributes.author}</Text>
        </Box>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.petr.attributes.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex align="center" justify="center">
              <Image
                src={props.petr.attributes.image.data[0].attributes.url}
                alt="Petr"
                width={320}
                height={320}
              />
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="outline"
              colorScheme="gray"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
