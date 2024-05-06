/**
 * Petr Provider
 * This handles the api calls for petrs and all the surrounding information.
 */

import { createContext, useEffect, useState } from "react";

type User = {
  id: string;
  username: string;
}

type Petr = {
  id: number;
  name: string;
  author: string;
  likes: number;
  image: string;
  tags: Array<string>;
  dropped: boolean;
  created: Date;
  user: User;
}

export const PetrContext = createContext({
  petrs: new Array<Petr>(),
  modifiedPetrs: new Array<Petr>(),
  constructor: () => { },
  getPetr: (id: number) => { },
  putPetr: (id: number) => { },
  updateLikes: (id: number, likeState: boolean) => { },
});

export async function getStaticProps() {
  let petrs = [];

  return { props: petrs };
}

export default function PetrProvider(props) {
  const [petrs, SetPetrs] = useState();
  const regex = /[^\s]+/g;

  async function constructor() {
    try {
      const response = await fetch(
        process.env.API_HOST + "/api/petrs?populate=*"
      );
      const data = await response.json();

      SetPetrs(
        data.data.map((item) => {
          try {
            return {
              id: item.id,
              name: item.attributes.name,
              author: item.attributes.author,
              likes: item.attributes.likes,
              image: item.attributes.image.data[0].attributes.url,
              tags: item.attributes.tags ? item.attributes.tags.match(regex) : [],
              dropped: item.attributes.dropped,
              official: item.attributes.official,
              created: new Date(item.attributes.created),
              user: item.attributes.users_permissions_user,
            };
          }
          catch { }

        })
      );
    } catch { }
  }

  function getPetr(id: number) {
    console.log("getPetr");
  }
  function putPetr(id: number) {
    console.log("putPetr");
  }
  function updateLikes(id: number, likeState: boolean) {
    fetch(process.env.API_HOST + "/api/petrs/" + id)
      .then((response) => response.json())
      .then((data) => {
        let body = JSON.stringify({
          data: {
            id: id,
            likes: (data.data.attributes.likes = likeState
              ? data.data.attributes.likes + 1
              : data.data.attributes.likes - 1),
          },
        });
        fetch(process.env.API_HOST + "/api/petrs/" + id, {
          method: "PUT",
          headers: {
            Authorization: "Bearer " + process.env.API_KEY_UPDATE_LIKES,
            "Content-Type": "application/json",
          },
          body: body,
        }).then((response) => response.json());
      });
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
        modifiedPetrs: [],
        constructor: constructor,
        getPetr: getPetr,
        putPetr: putPetr,
        updateLikes: updateLikes,
      }}
    >
      {props.children}
    </PetrContext.Provider>
  );
}
