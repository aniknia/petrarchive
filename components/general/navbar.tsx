import { Stack, Flex, Box, Center, Divider, IconButton } from "@chakra-ui/react";
import { PlusIcon, WorkflowIcon } from "@primer/octicons-react";
import Link from "../../node_modules/next/link";
import { ColorModeSwitcher } from "./colormodeswitcher";
import Logo from "./logo";
import LoginNavButton from "./loginnavbutton";
import { AccountContext } from "../provider/accountprovider";
import { useContext } from "react";
import SettingsNavButton from "./settingsnavbutton";

export default function NavBar(props) {
  const loginContext = useContext(AccountContext)

  return (
    <>
      <Stack>
        <Flex
          justify="space-between"
          gap="2"
          pt="2"
          pl="2"
          pr="2"
          height="48px"
        >
          <Flex p="1" flex="1" alignItems='center'>
            <Link href="/roadmap">
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Add a Petr`}
                variant="ghost"
                color="current"
                icon={<WorkflowIcon size={24} />}
                {...props}
              />
            </Link>
          </Flex>
          <Center p="1" flex="1">
            <Link href="/">
              <Logo />
            </Link>
          </Center>
          <Flex p="1" flex="1" justify="end" alignItems='center'>
            <LoginNavButton />
            {loginContext.authorized ? <SettingsNavButton /> : <></>}
            <Link href='/add'>
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Add a Petr`}
                variant="ghost"
                color="current"
                icon={<PlusIcon size={24} />}
                {...props}
              />
            </Link>

            <ColorModeSwitcher />
          </Flex>
        </Flex>
        <Divider p="0" />
      </Stack>
    </>
  );
}
