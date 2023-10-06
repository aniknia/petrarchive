import { IconButton } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import Link from "../../node_modules/next/link";
import { AccountContext } from "../provider/accountprovider";
import { GearIcon } from "@primer/octicons-react";
import { useRouter } from "../../node_modules/next/router";


export default function SettingsNavButton() {
    const loginContext = useContext(AccountContext);
    const router = useRouter();

    function redirect() {
        router.push('/settings')
    }

    useEffect(() => { }, [loginContext]);

    return (
        <>
            <IconButton size="md" fontSize="lg" variant="ghost" color="current" icon={<GearIcon size={24} />} onClick={() => redirect()}>
            </IconButton>

        </>
    );
}