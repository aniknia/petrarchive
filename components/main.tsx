import { Flex } from "@chakra-ui/react";
import Searchbar from "./searchbar";

import Item from "./item";
import { useContext } from "react";
import { PetrContext } from "./petrprovider";

export default function Main() {
  const value = useContext(PetrContext);

  return (
    <>
      {" "}
      <Searchbar />
      <Flex justify="space-around" wrap="wrap">
        {value.petrs &&
          value.petrs
            .sort((a, b) => b.created.getTime() - a.created.getTime())
            .map((item) => {
              if (item.dropped) {
                return <Item key={item.id} petr={item} />;
              }
            })}
      </Flex>
    </>
  );
}
