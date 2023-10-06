import { Button } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import Link from "../../node_modules/next/link";
import { AccountContext } from "../provider/accountprovider";


export default function AccountNavButton() {
    const loginContext = useContext(AccountContext);

    useEffect(() => { }, [loginContext]);

    return (
        <>
            <Button size="md" fontSize="lg" variant="ghost" color="current">
                <Link href="/account">Account</Link>
            </Button>

        </>
    );
}