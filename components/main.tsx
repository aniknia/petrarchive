import { Flex } from "@chakra-ui/react";
import Searchbar from "./searchbar/searchbar";

import Item from "./petrdisplay/item";
import { useContext } from "react";
import { PetrContext } from "./provider/petrprovider";

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
              return <Item key={item.id} petr={item} />;
            })}
      </Flex>
    </>
  );
}
