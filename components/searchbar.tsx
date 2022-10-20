import { useState } from "react";
import {
  Stack,
  VStack,
  Box,
  Select,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { SearchIcon, XIcon } from "@primer/octicons-react";

export default function Searchbar() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Stack>
        <VStack gap="2" pt="2" pl="7" pr="7">
          <InputGroup size="lg" minW="320">
            <InputLeftElement
              pointerEvents="none"
              children={[<SearchIcon size={24} />]}
            />

            <Input
              variant="filled"
              placeholder="Search for your favourite Petr"
            />
            <InputRightElement>
              <Button variant="none" onClick={handleClick}>
                <XIcon size={24} />
              </Button>
            </InputRightElement>
          </InputGroup>

          <Box p="1" minW="130">
            <Select variant="filled" placeholder="Newest">
              <option value="Oldest">Oldest</option>
              <option value="Most Liked">Most Liked</option>
            </Select>
          </Box>
        </VStack>
      </Stack>
    </>
  );
}
