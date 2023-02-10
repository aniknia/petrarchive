import { useState, useEffect } from "react";
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

// TODO: Reimplement the searchbar
// TODO: Implement search by attribute (e.g. dropped, community, etc)
// TODO: Implement a trending option

export default function Searchbar() {
  const [show, setShow] = useState(false);
  const [selectValue, setSelectValue] = useState("Newest");
  const handleClick = () => setShow(!show);

  useEffect(() => {
    console.log(selectValue);
  }, [selectValue]);

  return (
    <>
      <Stack>
        <VStack gap="2" pt="2" pl="7" pr="7">
          {show ? (
            <>
              <InputGroup size="lg" minW="320">
                <InputLeftElement pointerEvents="none">
                  <SearchIcon key="1" size={24} />
                </InputLeftElement>

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
            </>
          ) : (
            <></>
          )}

          <Box p="1" minW="130">
            <Select
              variant="filled"
              onChange={(value) => {
                setSelectValue(value.target.value);
              }}
            >
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
              <option value="Most Liked">Most Liked</option>
            </Select>
          </Box>
        </VStack>
      </Stack>
    </>
  );
}
