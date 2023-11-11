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
    Badge,
} from "@chakra-ui/react";
import { useContext, useState, useEffect } from "react";
import { AccountContext } from "../components/provider/accountprovider";
import { useRouter } from "../node_modules/next/router";

// TODO: Add more error messages

export default function Registration() {

    const [hasAccount, setHasAccount] = useState(true);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)

    const router = useRouter();

    const loginContext = useContext(AccountContext);
    useEffect(() => { if (loginContext.authorized) { router.push("/") } }, [loginContext])

    const handleUsernameChange = (event) => setUsername(event.target.value)
    const handleEmailChange = (event) => setEmail(event.target.value)
    const handlePasswordChange = (event) => setPassword(event.target.value)

    async function submit() {
        let response;
        if (hasAccount) {
            response = await loginContext.login(email, password)
        } else {
            response = await loginContext.register(username, email, password)
        }
        setError(!response)
        if (!error) {

        }
    }

    return <>
        <Box display="flex" justifyContent="center" height="100%">
            <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                margin="50px"
                padding="20px"
            >

                <Box display="flex" justifyContent="center">
                    <Heading size="md">{hasAccount ? "Login" : "Sign Up"}</Heading>
                </Box>

                {hasAccount ? null : (
                    <FormControl isRequired mt="5px">
                        <FormLabel>Username</FormLabel>
                        <Input
                            type="username"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </FormControl>
                )}

                <FormControl isRequired mt="5px">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" value={email} onChange={handleEmailChange} />
                </FormControl>

                <FormControl isRequired mt="5px">
                    <FormLabel>Password</FormLabel>
                    <Input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </FormControl>

                {error ? <Badge colorScheme='red'>
                    Your username or password was incorrect.
                </Badge> : <></>}

                {hasAccount ?
                    <Box display="flex" justifyContent="center" mt="15px">
                        <Link href="/forgotpassword" color="teal.500">
                            Forgot password?
                        </Link>
                    </Box> : <></>}

                <Box display="flex" justifyContent="center" mt="15px">
                    <Button onClick={submit}>
                        {hasAccount ? "Login" : "Register"}
                    </Button>{" "}
                </Box>

                <Box display="flex" justifyContent="center" alignItems="center" mt="15px">
                    {hasAccount ? <Text>Don&apos;t have an account?</Text> : <Text>Already have an account?</Text>}
                    <Button color="teal.500" bg="" _hover={{ bg: '', textDecoration: 'underline' }} _active={{
                        bg: '',
                        transform: 'scale(0.98)',
                        borderColor: '',
                    }} onClick={() => setHasAccount(!hasAccount)}>
                        {hasAccount ? "Sign up" : "Log in"}
                    </Button>
                </Box>
            </Box>
        </Box>
    </>;
}