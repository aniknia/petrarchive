/**
 * Account Page
 * This page contains the login/singup page as well as the account settings page. 
 * I moved all of these pages in together so I wouldnt need to deal with someone visitng the login page when they were already logged in.
 * Submit makes a call to the AccountContext which handles the api calls and state of user authentication.
 *  */

import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Button,
  Link,
  Text,
  Badge,
} from "@chakra-ui/react";
import Logo from "../components/general/logo";
import { useContext, useState } from "react";
import { AccountContext } from "../components/provider/accountprovider";

// TODO: Show in each input field if their email, password, etc is valid (or what the error is)
// TODO: Implement Forgot my password

export default function Settings() {
  const [hasAccount, setHasAccount] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)

  const loginContext = useContext(AccountContext);

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  async function submit() {
    let response;
    if (hasAccount) {
      response = await loginContext.login(email, password)
    } else {
      response = await loginContext.register(username, email, password)
    }
    if (response) {
      setError(false)
    }
    else {
      setError(true)
    }
  }

  return (
    <>
      {loginContext.authorized ? <Box display="flex" justifyContent="center" height="100%">
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          margin="50px"
          padding="20px"
        >

          <Box display="flex" justifyContent="center">
            <Heading size="md">Account Settings</Heading>
          </Box>
          <Text>Username: {loginContext.user["username"]}</Text>
        </Box>
      </Box> : <Box display="flex" justifyContent="center" height="100%">
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          margin="50px"
          padding="20px"
        >

          <Box display="flex" justifyContent="center">
            <Heading size="md">{hasAccount ? "Login" : "Sign Up"}</Heading>
          </Box>

          {hasAccount ? null : (
            <FormControl isRequired mt="5px">
              <FormLabel>Username</FormLabel>
              <Input
                type="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </FormControl>
          )}

          <FormControl isRequired mt="5px">
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={handleEmailChange} />
          </FormControl>

          <FormControl isRequired mt="5px">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </FormControl>

          {error ? <Badge colorScheme='red' w='100%'>
            Your username or password was incorrect.
          </Badge> : <></>}

          <Box display="flex" justifyContent="center" mt="15px">
            <Link color="teal.500">
              {hasAccount ? "Forgot password?" : null}
            </Link>{" "}
          </Box>

          <Box display="flex" justifyContent="center" mt="15px">
            <Button onClick={submit}>
              {hasAccount ? "Login" : "Register"}
            </Button>{" "}
          </Box>

          <Box display="flex" justifyContent="center" mt="15px">
            <Text>
              {hasAccount
                ? "Don't have an account?"
                : "Already have an account?"}
            </Text>{" "}
            <Link color="teal.500" onClick={() => setHasAccount(!hasAccount)}>
              {hasAccount ? "Sign up" : "Log in"}
            </Link>
          </Box>
        </Box>
      </Box>}

    </>
  );
}
