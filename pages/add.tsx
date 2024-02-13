import { useState, useContext, useRef, useEffect } from "react"
import { Flex, Box, FormControl, FormLabel, FormHelperText, FormErrorMessage, Input, Image, Switch, Button, Center, CenterProps, HStack, Icon, Square, Text, VStack, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, AlertDialog, useDisclosure } from '@chakra-ui/react'
import { FiUploadCloud } from 'react-icons/fi'
import { AccountContext } from "../components/provider/accountprovider";
import Link from "../node_modules/next/link";
import { getCookie, hasCookie, setCookie } from "cookies-next";

export default function Add() {
    const loginContext = useContext(AccountContext);

    const [name, setName] = useState(hasCookie('petrname') ? getCookie('petrname') : '')
    const [nameError, setNameError] = useState(false)
    const handleNameChange = (event) => {
        if (event.target.value) {
            setName(event.target.value)
            setNameError(false)
        }
        else {
            setNameError(true)
        }
    }

    const [created, setCreated] = useState(hasCookie('petrcreated') ? getCookie('petrcreated') : new Date())
    const [createdError, setCreatedError] = useState(false)
    const currentDate = new Date().toJSON().slice(0, 10);
    const handleCreatedChange = (event) => {
        if (event.target.value) {
            setCreated(new Date(event.target.value).toJSON().slice(0, 10))
            setCreatedError(false)
        }
        else {
            setCreatedError(true)
        }
    }


    const [dropped, setDropped] = useState(hasCookie('petrdropped') ? getCookie('petrdropped') : false)
    const handleDroppedChange = (event) => setDropped(event.target.value)

    const [image, setImage] = useState(hasCookie('petrimage') ? getCookie('petrimage') : '')
    const [imageFile, setImageFile] = useState(hasCookie('petrimagefile') ? getCookie('petrimagefile') : '')
    const [imageError, setImageError] = useState(false)
    const handleImageChange = (event) => {
        if (event.target.files[0]) {
            let temp = URL.createObjectURL(event.target.files[0])
            console.log(temp)
            setImage(temp)
            setImageFile(event.target.files[0])
            setImageError(false)

        }
        else {
            setImageError(true)
        }

    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()

    function handleSubmit() { }

    useEffect(() => {
        setCookie('petrname', name)
        setCookie('petrcreated', created)
        setCookie('petrdropped', dropped)
        setCookie('petrimage', image)
        setCookie('petrimagefile', imageFile)
    }, [name, created, dropped, image])

    return (<>
        <Flex justify='center' wrap='wrap' m="15">

            <Box m="15">
                <FormControl isInvalid={imageError} id="file" h="300px" w="300px" isRequired>
                    <label>
                        <Image src={image.toString()} alt="" position="absolute" left="0" top="0" h="100%" w="100%" borderRadius="10px" />
                        <Input type="file" accept="image/png, image/jpeg" onChange={handleImageChange} style={{ display: 'none' }} />
                        <Button as='span' h="100%" width="100%" variant='outline' pl="6" pr="6" pt="4" pb="4">
                            {image ? '' :
                                <VStack spacing="3">
                                    <Square size="10" bg="bg.subtle" borderRadius="lg">
                                        <Icon as={FiUploadCloud} boxSize="5" color="fg.muted" />
                                    </Square>
                                    <VStack spacing="1">
                                        <HStack spacing="1" whiteSpace="nowrap">
                                            <Text textStyle="sm" color="fg.muted">
                                                Click to upload
                                            </Text>
                                        </HStack>
                                        <Text textStyle="xs" color="fg.muted">
                                            PNG or JPG  up to 2MB
                                        </Text>
                                    </VStack>
                                </VStack>
                            }
                        </Button>
                    </label>
                </FormControl>
            </Box>

            <Flex direction='column' m="15">
                <FormControl isInvalid={nameError} isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input value={name.toString()} onChange={handleNameChange} />
                    {!nameError ? (
                        <FormHelperText>
                            Enter the name of your Petr.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>Petr name is required.</FormErrorMessage>
                    )}
                </FormControl>

                <FormControl isInvalid={createdError} isRequired mt="10px">
                    <FormLabel>Created</FormLabel>
                    <Input
                        placeholder="Select Date and Time"
                        size="md"
                        type="date"
                        max={currentDate}
                        value={created}
                        onChange={handleCreatedChange}
                    />
                    {!createdError ? (
                        <FormHelperText>
                            Enter the birthday of your Petr.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>Petr needs a creation date.</FormErrorMessage>
                    )}
                </FormControl>

                <FormControl display='flex' alignItems='center' mt="10px">
                    <FormLabel htmlFor='dropswitch' mb='0'>Dropped</FormLabel>
                    <Switch id='dropswitch' isChecked={Boolean(dropped)} onChange={handleDroppedChange} />
                </FormControl>

                <FormControl mt='10px'>
                    <Button colorScheme='teal' variant='outline' onClick={loginContext.authorized ? handleSubmit : onOpen}>
                        Submit
                    </Button>
                </FormControl>
            </Flex>
        </Flex>

        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                        Warning
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        You must create an account or login to submit a Petr.
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            Close
                        </Button>
                        <Link href="/registration">
                            <Button colorScheme='red' onClick={onClose} ml={3}>
                                Login
                            </Button>
                        </Link>

                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog >
    </>)
}