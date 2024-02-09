import { Button, Center, CenterProps, HStack, Icon, Square, Text, VStack } from '@chakra-ui/react'
import { FiUploadCloud } from 'react-icons/fi'

export const Dropzone = (props: CenterProps) => (
  <Center h="100%" borderWidth="1px" borderRadius="lg" pl="6" pr="6" pt="4" pb="4" {...props}>
    <VStack spacing="3">
      <Square size="10" bg="bg.subtle" borderRadius="lg">
        <Icon as={FiUploadCloud} boxSize="5" color="fg.muted" />
      </Square>
      <VStack spacing="1">
        <HStack spacing="1" whiteSpace="nowrap">
          <Button variant="text" colorScheme="blue" size="sm">
            Click to upload
          </Button>
          <Text textStyle="sm" color="fg.muted">
            or drag and drop
          </Text>
        </HStack>
        <Text textStyle="xs" color="fg.muted">
          PNG, JPG or GIF up to 2MB
        </Text>
      </VStack>
    </VStack>
  </Center>
)
