import { HStack } from "@chakra-ui/react";
import Image from "../node_modules/next/image";
import petr_head from "../public/images/petr_head.png";

export default function Logo() {
  return (
    <HStack>
      <Image src={petr_head} alt="Petr" width={45} height={40} />
    </HStack>
  );
}
