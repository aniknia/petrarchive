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
} from "@chakra-ui/react";
import Logo from "../components/general/logo";
import { useContext, useState } from "react";
import { AccountContext } from "../components/provider/accountprovider";

// TODO: Show in each input field if their email, password, etc is valid (or what the error is)
// TODO: Redirect if logged in

export default function Login() {
  const [hasAccount, setHasAccount] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  function submit() {
    let response;
    if (hasAccount) {
      response = loginContext.login(email, password);
    } else {
      response = loginContext.register(username, email, password);
    }
    if (!response) {
    }
  }

  return (
    <>
      <Box display="flex" justifyContent="center" height="100%">
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          margin="50px"
          padding="20px"
        >
          <Box display="flex" justifyContent="center">
            <Logo />
          </Box>

          <Box display="flex" justifyContent="center">
            <Heading size="md">{hasAccount ? "Login" : "Sign Up"}</Heading>
          </Box>

          {hasAccount ? null : (
            <FormControl isRequired m="5px">
              <FormLabel>Username</FormLabel>
              <Input
                type="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </FormControl>
          )}

          <FormControl isRequired m="5px">
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={handleEmailChange} />
          </FormControl>

          <FormControl isRequired m="5px">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </FormControl>

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
      </Box>
    </>
  );
}
