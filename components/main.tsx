import { Flex } from "@chakra-ui/react";
import Item from "./item";
import { useEffect } from "react";

export default function Main() {
  useEffect(() => {
    fetch(process.env.REACT_APP_API_HOST + "/api/petrs")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <Flex justify="space-around" wrap="wrap">
      <Item name="Petr" author="Petr" />
    </Flex>
  );
}
