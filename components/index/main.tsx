import { Flex } from "@chakra-ui/react";
import Filter from "../filter/filter";

import Item from "../petrdisplay/item";
import { useContext, useEffect } from "react";
import { PetrContext } from "../provider/petrprovider";
import { SearchContext } from "../provider/searchprovider";

export default function Main() {
  const value = useContext(PetrContext);
  const sort = useContext(SearchContext);

  useEffect(() => {}, []);

  return (
    <>
      {" "}
      <Filter />
      <Flex justify="space-around" wrap="wrap">
        {value.petrs &&
          value.petrs
            .sort((a, b) => {
              switch (sort.sortType) {
                case "Newest":
                  return b.created.getTime() - a.created.getTime();
                  break;
                case "Oldest":
                  return a.created.getTime() - b.created.getTime();
                  break;
                case "Most Liked":
                  return b.likes - a.likes;
                  break;
                default:
                  return b.created.getTime() - a.created.getTime();
              }
            })
            .map((item) => {
              return <Item key={item.id} petr={item} />;
            })}
      </Flex>
    </>
  );
}
