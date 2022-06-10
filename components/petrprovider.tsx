import { createContext, useEffect, useState } from "react";

class Petr {
  id: number;
  name: string;
  author: string;
  likes: number;
  image: string;
}

export const PetrContext = createContext({
  petrs: new Array<Petr>(),
  constructor: () => {},
  getPetr: (id: number) => {},
  putPetr: (id: number) => {},
  addLikes: (id: number) => {},
  removeLikes: (id: number) => {},
});

export default function PetrProvider(props) {
  const [petrs, setPetrs] = useState();

  function constructor() {
    fetch(process.env.API_HOST + "/api/petrs?populate=*")
      .then((response) => response.json())
      .then((data) => {
        setPetrs(
          data.data.map((item) => {
            return {
              id: item.id,
              name: item.attributes.name,
              author: item.attributes.author,
              likes: item.attributes.likes,
              image: item.attributes.image.data[0].attributes.url,
            };
          })
        );
      });
  }

  function getPetr(id: number) {
    console.log("getPetr");
  }
  function putPetr(id: number) {
    console.log("putPetr");
  }
  function addLikes(id: number) {
    console.log("addLikes");
  }
  function removeLikes(id: number) {
    console.log("removeLikes");
  }

  useEffect(() => {
    constructor();
    console.log(petrs);
  }, []);

  return (
    <PetrContext.Provider
      value={{
        petrs: petrs,
        constructor: constructor,
        getPetr: getPetr,
        putPetr: putPetr,
        addLikes: addLikes,
        removeLikes: removeLikes,
      }}
    >
      {props.children}
    </PetrContext.Provider>
  );
}
