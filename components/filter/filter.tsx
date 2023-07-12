import { Stack, VStack } from "@chakra-ui/react";
import Sort from "./sort";
import Searchbar from "./searchbar";

export default function Filter() {
  return (
    <>
      <Stack>
        <VStack gap="2" pt="2" pl="7" pr="7">
          <Searchbar />
          <Sort />
        </VStack>
      </Stack>
    </>
  );
}
