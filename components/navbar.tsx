import { Stack, Flex, Box, Divider } from "@chakra-ui/react";
import { QuestionIcon } from "@primer/octicons-react";
import { ColorModeSwitcher } from "./colormodeswitcher";
import Logo from "./logo";
import NavModal from "./navmodal";

export default function NavBar() {
  return (
    <>
      <Stack>
        <Flex
          align="center"
          justify="space-between"
          gap="2"
          pt="2"
          pl="2"
          pr="2"
        >
          <Box>
            <NavModal
              button={<QuestionIcon size={24} />}
              title="Roadmap"
              body="The first upcoming feature is sorting and searching petrs through name, author, or tags. After that a likes system will be implemented. And finally a submition system to make this site as community run as possible. Until then you can email your petrs to hello@petrarchive.io"
            />
          </Box>
          <Box>
            <Logo />
          </Box>
          <Box>
            <ColorModeSwitcher />
          </Box>
        </Flex>
        <Divider p="0" />
      </Stack>
    </>
  );
}
