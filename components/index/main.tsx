import { Flex, Stack, VStack } from "@chakra-ui/react";
import { useState } from "react";

import Item from "../petrdisplay/item";
import { useContext, useEffect } from "react";
import { PetrContext } from "../provider/petrprovider";
import Sort from "../filter/sort";

export default function Main() {
  const value = useContext(PetrContext);
  const [sortValue, setSortValue] = useState("newest");

  useEffect(() => { }, []);

  return (
    <>
      {" "}
      <Stack>
        <VStack gap="2" pt="2" pl="7" pr="7">
          <Sort state={sortValue} changeState={setSortValue} />
        </VStack>
      </Stack>

      <Flex justify="space-around" wrap="wrap">
        {value.petrs &&
          value.petrs
            .sort((a, b) => {
              switch (sortValue) {
                case "Newest":
                  return b.created.getTime() - a.created.getTime();
                case "Oldest":
                  return a.created.getTime() - b.created.getTime();
                case "Most Liked":
                  return b.likes - a.likes;
                default:
                  return b.created.getTime() - a.created.getTime();
              }
            })
            .map((item) => {
              if (item) {
                return <Item key={item.id} petr={item} />;
              }
            })}
      </Flex>
    </>
  );
}