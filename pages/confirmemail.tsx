import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../components/provider/accountprovider";
import { useRouter } from "../node_modules/next/router";

// TODO: check if confirmed
// TODO: login if confirmed

export default function ConfirmEmail() {
    const loginContext = useContext(AccountContext);
    const router = useRouter();
    useEffect(() => { router.push("/") })
    return <></>;
}
