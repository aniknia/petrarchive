import { HStack } from "@chakra-ui/react";
import Image from "../node_modules/next/image";
import logo_santa from "../public/images/logo_santa.png";

export default function Logo() {
  return (
    <HStack>
      <Image src={logo_santa} alt="Petr" width={55} height={40} />
      <p>Archive</p>
    </HStack>
  );
}
