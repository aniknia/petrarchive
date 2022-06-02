import { Flex } from "@chakra-ui/react";
import Item from "./item";

export default function Main() {
  return (
    <Flex justify="space-around" wrap="wrap">
      <Item name="Petr" author="Petr" />
    </Flex>
  );
}
