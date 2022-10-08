import { HStack } from "@chakra-ui/react";
import Image from "../node_modules/next/image";
import petr_head from "../public/images/petr_head.png";
import { createContext, useEffect, useState } from "react";

class LogoObj {
  name: string;
  image: string;
  month: number;
}

export default function Logo() {
  const [logo, setLogo] = useState(new Array<LogoObj>());
  const [source, setSource] = useState(petr_head.src);
  let date = new Date();
  let month = date.getMonth() + 1;
  useEffect(() => {
    fetch(process.env.API_HOST + "/api/logos?populate=*")
      .then((response) => response.json())
      .then((data) => {
        setLogo(
          data.data.map((item) => {
            return {
              name: item.name,
              image: item.attributes.image.data.attributes.formats.small.url,
              month: item.attributes.month,
            };
          })
        );
      });

    if (logo.find((item) => item.month == month)) {
      setSource(logo.find((item) => item.month == month).image);
    }
  });

  return (
    <HStack>
      <Image src={source} alt="Petr" width={45} height={40} />
    </HStack>
  );
}
