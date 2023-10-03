import { Box, Heading, Text } from "@chakra-ui/react";
import Logo from "../components/general/logo";
import { AccountContext } from "../components/provider/accountprovider";
import { useContext } from "react";

// TODO: Redirect if not logged in

export default function Account() {
  const user = useContext(AccountContext);
  console.log(user);
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
            <Heading size="md">Account Settings</Heading>
          </Box>
          <Text>Username: {user.user["username"]}</Text>
        </Box>
      </Box>
    </>
  );
}
