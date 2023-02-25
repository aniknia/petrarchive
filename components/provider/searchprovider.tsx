import { createContext, useState } from "react";

export const SearchContext = createContext({
  sortType: "newest",
  changeSortType: (sortType: string) => {},
});

export default function SearchProvider(props) {
  const [sortValue, setSortValue] = useState("newest");
  function changeSortType(sort: string) {
    setSortValue(sort);
  }
  return (
    <>
      <SearchContext.Provider
        value={{ sortType: sortValue, changeSortType: changeSortType }}
      >
        {props.children}
      </SearchContext.Provider>
    </>
  );
}
