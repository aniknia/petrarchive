import Image from "../../node_modules/next/image";
import petr from "../../public/images/petr_head.png";
import merry_petr from "../../public/images/seasonal/Merry_Petr.png";
import spooky_petr from "../../public/images/seasonal/Spooky_Petr.png";
import { useEffect, useState } from "react";

export default function Logo() {
  const [source, setSource] = useState(petr);
  let date = new Date();
  let month = date.getMonth() + 1;

  useEffect(() => {
    switch (month) {
      case 1:
        setSource(petr);
        break;
      case 2:
        setSource(petr);
        break;
      case 3:
        setSource(petr);
        break;
      case 4:
        setSource(petr);
        break;
      case 5:
        setSource(petr);
        break;
      case 6:
        setSource(petr);
        break;
      case 7:
        setSource(petr);
        break;
      case 8:
        setSource(petr);
        break;
      case 9:
        setSource(petr);
        break;
      case 10:
        setSource(spooky_petr);
        break;
      case 11:
        setSource(petr);
        break;
      case 12:
        setSource(merry_petr);
        break;
    }
  }, [month]);

  return <Image src={source} alt="Petr" height={40} width={60} />;
}
