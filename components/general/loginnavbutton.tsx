import { Button, Box } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import Link from "../../node_modules/next/link";
import { AccountContext } from "../provider/accountprovider";

export default function LoginNavButton() {
  const loginContext = useContext(AccountContext);
  const [authorized, setAuthorized] = useState(loginContext.authorized);

  function logout() {
    loginContext.logout();
    setAuthorized(loginContext.authorized());
    console.log(authorized);
  }

  useEffect(() => {}, [loginContext]);

  return (
    <>
      {loginContext.authorized() ? (
        <Box>
          <Button
            size="md"
            fontSize="lg"
            variant="ghost"
            color="current"
            onClick={() => loginContext.logout()}
          >
            <Link href="/">Log Out</Link>
          </Button>
          <Button size="md" fontSize="lg" variant="ghost" color="current">
            <Link href="/account">Account</Link>
          </Button>
        </Box>
      ) : (
        <Button size="md" fontSize="lg" variant="ghost" color="current">
          <Link href="/login">Log In</Link>
        </Button>
      )}
    </>
  );
}
