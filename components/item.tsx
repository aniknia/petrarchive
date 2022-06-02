import { Box, Text } from "@chakra-ui/react";
import Image from "../node_modules/next/image";
import petr from "../public/images/petr.png";

export default function Item(props) {
  return (
    <Box p="10">
      <Image src={petr} alt="Petr" width={320} height={320} />
      <Text>{props.name}</Text>
      <Text>Creator: {props.author}</Text>
    </Box>
  );
}
