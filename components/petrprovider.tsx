import { createContext, useState } from "react";

export const petr = createContext({
  petrs: [],
  addPetr: () => {},
  removePetr: () => {},
});

function getPetrs() {
  fetch(process.env.API_HOST + "/api/petr")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

export default function PetrProvider(props) {
  const [petrs, setPetrs] = useState([]);
  return <></>;
}
