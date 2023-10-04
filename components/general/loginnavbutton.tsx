import { Button, Box } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import Link from "../../node_modules/next/link";
import { AccountContext } from "../provider/accountprovider";

export default function LoginNavButton() {
  const loginContext = useContext(AccountContext);

  useEffect(() => { }, [loginContext]);

  return (
    <>
      {loginContext.authorized ? (
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
          <Link href="/account">Log In</Link>
        </Button>
      )}
    </>
  );
}
