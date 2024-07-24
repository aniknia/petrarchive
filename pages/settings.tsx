/**
 * Account Page
 * This page contains the login/singup page as well as the account settings page. 
 * I moved all of these pages in together so I wouldnt need to deal with someone visitng the login page when they were already logged in.
 * Submit makes a call to the AccountContext which handles the api calls and state of user authentication.
 *  */

import {
  Box,
  Heading,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Divider,
  Center,
  Editable,
  EditablePreview,
  EditableInput,
  Badge
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../components/provider/accountprovider";
import { useRouter } from "../node_modules/next/router";

// TODO: Add more error messages

export default function Settings() {

  const loginContext = useContext(AccountContext);

  const [currentPasword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleCurrentPasswordChange = (event) => setCurrentPassword(event.target.value);
  const handleNewPasswordChange = (event) => setNewPassword(event.target.value);
  const handleConfirmNewPasswordChange = (event) => setConfirmNewPassword(event.target.value);

  const [currentPasswordError, setCurrentPasswordError] = useState(false);
  const [newPasswordError, setNewPasswordError] = useState(false)
  const [newPasswordSuccess, setNewPasswordSuccess] = useState(false)

  const [currentPasswordErrorMessage, setCurrentPasswordErrorMessage] = useState('');
  const [newPasswordErrorMessage, setNewPasswordErrorMessage] = useState('')
  const [newPasswordSuccessMessage, setNewPasswordSuccessMessage] = useState('')

  async function updatePassword() {
    setCurrentPasswordError(false);
    setNewPasswordError(false);
    setNewPasswordSuccess(false);
    setCurrentPasswordErrorMessage('');
    setNewPasswordErrorMessage('');

    let updatePasswordResponse;
    updatePasswordResponse = await loginContext.updatePassword(currentPasword, newPassword, confirmNewPassword)

    switch (updatePasswordResponse) {
      case "success":
        setNewPasswordSuccess(true);
        setNewPasswordSuccessMessage('Success!');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
        break;
      case "currentPassword is a required field":
        setCurrentPasswordError(true);
        setCurrentPasswordErrorMessage("Password cannot be blank.")
      case "The provided current password is invalid":
        setCurrentPasswordError(true);
        setCurrentPasswordErrorMessage("The provided current password is invalid.");
        break;
      case "Your new password must be different than your current password":
        setNewPasswordError(true);
        setNewPasswordErrorMessage("Your new and current passwords must be different.");
        break;
      case "Passwords do not match":
        setNewPasswordError(true);
        setNewPasswordErrorMessage("Passwords do not match.");
        break;
      default:
        setNewPasswordError(true);
        setNewPasswordErrorMessage("Check for blank or unmatched passwords.")
    }

  }
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(!show)

  const router = useRouter();

  useEffect(() => { if (!loginContext.authorized) { router.push("/registration") } }, [loginContext])

  return (
    <>
      <Box display="flex" justifyContent="center" height="100%">
        <Box
          width='lg'
          borderWidth="1px"
          borderRadius="lg"
          margin="50px"
          padding="20px"
        >
          <Center>
            <Heading size="lg">Account Settings</Heading>
          </Center>

          <Box mt='5'>
            <Heading size='sm' pb='1'>Username</Heading>
            <Text>{loginContext.authorized ? String(loginContext.user.username) : 'username'} </Text>
          </Box>

          <Box mt='5'>
            <Heading size='sm' pb='1'>Email</Heading>
            <Text>{loginContext.authorized ? String(loginContext.user.email) : 'username'} </Text>
          </Box>

          <Divider pt="5" />

          <Center pt="5">
            <Heading size="md">Set a New Password</Heading>
          </Center>

          <Heading size='sm' pt="5" pb='1'> Current Password</Heading>
          <Input
            size="md"
            pr='4.5rem'
            type='password'
            value={currentPasword}
            placeholder='Enter current password'
            onChange={handleCurrentPasswordChange}
          />
          {currentPasswordError ? <Badge colorScheme='red'>{currentPasswordErrorMessage}</Badge> : <></>}

          <Heading size='sm' pt="5" pb='1'> New Password</Heading>
          <Input
            size="md"
            pr='4.5rem'
            type='password'
            value={newPassword}
            placeholder='Enter new password'
            onChange={handleNewPasswordChange}
          />

          <Heading size='sm' pt="5" pb='1'>Confirm New Password</Heading>
          <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              value={confirmNewPassword}
              placeholder='Confirm new password'
              onChange={handleConfirmNewPasswordChange}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleShow}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          {newPasswordError ? <Badge colorScheme='red'>{newPasswordErrorMessage}</Badge> : <></>}
          {newPasswordSuccess ? <Badge colorScheme='green'>{newPasswordSuccessMessage}</Badge> : <></>}

          <Center pt="5"><Button onClick={updatePassword}>Update Password</Button></Center>
        </Box>
      </Box >
    </>
  );
}
