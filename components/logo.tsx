import { HStack } from "@chakra-ui/react";
import Image from "../node_modules/next/image";
import petr from "../public/images/petr_head.png";
import merry_petr from "../public/images/seasonal/merry_petr.png";
import spooky_petr from "../public/images/seasonal/spooky_petr.png";
import { useEffect, useState } from "react";

class LogoObj {
  name: string;
  image: string;
  month: number;
}

export default function Logo() {
  const [logo, setLogo] = useState(new Array<LogoObj>());
  const [source, setSource] = useState(petr);
  let date = new Date();
  let month = date.getMonth() + 1;

  useEffect(() => {
    if (month == 10) {
      setSource(spooky_petr);
    }
    if (month == 12) {
      setSource(merry_petr);
    }
  }, [month]);

  return (
    <HStack>
      <Image src={source} alt="Petr" width={63} height={40} />
    </HStack>
  );
}
