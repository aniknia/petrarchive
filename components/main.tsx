import { Flex } from "@chakra-ui/react";
import Item from "./item";
import { useState, useEffect } from "react";

export default function Main() {
  const [petrs, setPetrs] = useState([]);
  useEffect(() => {
    fetch(process.env.API_HOST + "/api/petrs?populate=*")
      .then((response) => response.json())
      .then((data) => {
        setPetrs(data.data.map((petr) => <Item key={petr.id} petr={petr} />));
      });
  }, []);

  return (
    <Flex justify="space-around" wrap="wrap">
      {petrs}
    </Flex>
  );
}
