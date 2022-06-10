import { Flex } from "@chakra-ui/react";
import Item from "./item";
import { useContext } from "react";
import { PetrContext } from "./petrprovider";

export default function Main() {
  const value = useContext(PetrContext);

  return (
    <Flex justify="space-around" wrap="wrap">
      {value.petrs &&
        value.petrs.map((item) => <Item key={item.id} petr={item} />)}
    </Flex>
  );
}
