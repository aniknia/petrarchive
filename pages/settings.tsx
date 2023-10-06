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
} from "@chakra-ui/react";
import { useContext } from "react";
import { AccountContext } from "../components/provider/accountprovider";

// TODO: Show in each input field if their email, password, etc is valid (or what the error is)
// TODO: Implement Forgot my password

export default function Settings() {

  const loginContext = useContext(AccountContext);

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
      </Box> : <></>}

    </>
  );
}
