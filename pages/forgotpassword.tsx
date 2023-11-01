import {
    Box,
    Heading,
    Input,
    Button,
    Center,
    Badge
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../components/provider/accountprovider";
import { useRouter } from "../node_modules/next/router";

// TODO: Add more error messages

export default function ForgotPassword() {

    const loginContext = useContext(AccountContext);
    const router = useRouter();
    useEffect(() => { if (loginContext.authorized) { router.push("/") } }, [loginContext])

    const [email, setEmail] = useState('')
    const handleEmailChange = (event) => setEmail(event.target.value)

    const [emailError, setEmailError] = useState(false)
    const [emailSuccess, setEmailSuccess] = useState(false)

    const [emailErrorMessage, setEmailErrorMessage] = useState('')
    const [emailSuccessMessage, setEmailSuccessMessage] = useState('')

    async function forgotPassword() {
        setEmailError(false);
        setEmailSuccess(false);
        setEmailErrorMessage('');
        setEmailSuccessMessage('');

        let response;
        response = await loginContext.forgotPassword(email)

        switch (response) {
            case "success":
                setEmailSuccess(true);
                setEmailSuccessMessage('Email sent.')
                setEmail('');
                break;
            case "email must be a valid email":
                setEmailError(true);
                setEmailErrorMessage("Email must be a valid email")
            default:
                setEmailError(true);
                setEmailErrorMessage("Something went wrong.")
        }
    }

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
                        <Heading size="lg">Forgot Password</Heading>
                    </Center>

                    <Heading size='sm' pt="5" pb='1'>Email</Heading>
                    <Input
                        size="md"
                        pr='4.5rem'
                        type='email'
                        value={email}
                        placeholder='Enter your email'
                        onChange={handleEmailChange}
                    />
                    {emailError ? <Badge colorScheme='red'>{emailErrorMessage}</Badge> : <></>}
                    {emailSuccess ? <Badge colorScheme='green'>{emailSuccessMessage}</Badge> : <></>}

                    <Center pt="5"><Button onClick={forgotPassword}>Submit</Button></Center>
                </Box>
            </Box >
        </>
    );
}