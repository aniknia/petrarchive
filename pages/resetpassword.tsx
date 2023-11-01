import {
    Box,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    Center,
    Badge
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../components/provider/accountprovider";
import { useRouter } from "../node_modules/next/router";

// TODO: Add more error messages

export default function ResetPassword() {
    const loginContext = useContext(AccountContext);
    const router = useRouter();
    useEffect(() => { if (loginContext.authorized) { router.push("/registration") } }, [loginContext])

    const [show, setShow] = useState(false)
    const handleShow = () => setShow(!show)

    const code = String(router.query.code);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handlePasswordChange = (event) => setPassword(event.target.value);
    const handleConfirmPasswordChange = (event) => setConfirmPassword(event.target.value);

    const [passwordError, setPasswordError] = useState(false)
    const [passwordSuccess, setPasswordSuccess] = useState(false)

    const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
    const [passwordSuccessMessage, setPasswordSuccessMessage] = useState('')

    async function resetPassword() {
        let response;
        response = await loginContext.resetPassword(code, password, confirmPassword)

        switch (response) {
            case "success":
                setPasswordSuccess(true);
                setPasswordSuccessMessage('Email sent.')
                setPassword('');
                setConfirmPassword('');
                break;
            case "Incorrect code provided":
                setPasswordError(true);
                setPasswordErrorMessage("Incorrect code provided")
            default:
                setPasswordError(true);
                setPasswordErrorMessage("Something went wrong.")
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
                        <Heading size="lg">Reset Password</Heading>
                    </Center>

                    <Heading size='sm' pt="5" pb='1'> New Password</Heading>
                    <Input
                        size="md"
                        pr='4.5rem'
                        type='password'
                        placeholder='Enter new password'
                        onChange={handlePasswordChange}
                    />

                    <Heading size='sm' pt="5" pb='1'>Confirm New Password</Heading>
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Confirm new password'
                            onChange={handleConfirmPasswordChange}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleShow}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    {passwordError ? <Badge colorScheme='red'>{passwordErrorMessage}</Badge> : <></>}
                    {passwordSuccess ? <Badge colorScheme='green'>{passwordSuccessMessage}</Badge> : <></>}

                    <Center pt="5"><Button onClick={resetPassword}>Submit</Button></Center>
                </Box>
            </Box >
        </>
    );
}