import { Stack, Flex, Box, Spacer, Divider, Button } from "@chakra-ui/react";
import { PlusIcon, QuestionIcon } from "@primer/octicons-react";
import { ColorModeSwitcher } from "./colormodeswitcher";
import Link from "../node_modules/next/link";
import Logo from "./logo";
import NavModal from "./navmodal";

export default function NavBar() {
  return (
    <>
      <Stack>
        <Flex align="center" gap="2" pt="2" pl="2" pr="2">
          <Box width={88}>
            <NavModal
              button={<QuestionIcon size={24} />}
              title="Info"
              body="Like your favourite Petr and show your love for our schools Petr addiction."
            />
          </Box>
          <Spacer />
          <Box>
            <Logo />
          </Box>
          <Spacer />
          <Box>
            <ColorModeSwitcher />
          </Box>
        </Flex>
        <Divider p="0" />
      </Stack>
    </>
  );
}
