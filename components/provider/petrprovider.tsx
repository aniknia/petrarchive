import { createContext, useEffect, useState } from "react";

class Petr {
  id: number;
  name: string;
  author: string;
  likes: number;
  image: string;
  tags: Array<string>;
  dropped: boolean;
  created: Date;
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
  const regex = /[^\s]+/g;

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
              tags: item.attributes.tags
                ? item.attributes.tags.match(regex)
                : [],
              dropped: item.attributes.dropped,
              official: item.attributes.official,
              created: new Date(item.attributes.created),
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
