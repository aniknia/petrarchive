import { createContext, useContext, useState, useEffect } from "react";
import Fuse from "fuse.js";
import { PetrContext } from "../provider/petrprovider";

export const SearchContext = createContext({
  searchInput: "",
  searchResults: { name: [null], author: [null], tags: [null] },
  changeSearchValue: (searchValue: string) => {},
  sortType: "newest",
  changeSortType: (sortType: string) => {},
});

const options = {
  includeScore: true,
  ignoreFieldNorm: true,
  keys: [
    { name: "name", weight: 2, getFn: (petr) => petr.name },
    { name: "author", getFn: (petr) => petr.author },
    { name: "tags", getFn: (petr) => petr.tags },
  ],
};

export default function SearchProvider(props) {
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("newest");

  const [name, setName] = useState([null]);
  const [author, setAuthor] = useState([null]);
  const [tags, setTags] = useState([null]);
  const [search, setSearch] = useState("");

  const value = useContext(PetrContext);
  const fuse = new Fuse(value.petrs, options);
  const [fuseResult, setFuseResult] = useState(fuse.search([" "]));

  function changeSearchValue(search: string) {
    setSearchValue(search);
  }

  function changeSortType(sort: string) {
    setSortValue(sort);
  }

  function findTags() {
    const regex = /(?<=tag:)\w+|(?<=tag:")(.*?)(?=")/gi;
    setTags(searchValue.match(regex));
  }

  function findAuthor() {
    const regex = /(?<=author:)\w+|(?<=author:")(.*?)(?=")/gi;
    setAuthor(searchValue.match(regex));
  }

  function findName() {
    const regex = /(?<=title:)\w+|(?<=title:")(.*?)(?=")/gi;
    setName(searchValue.match(regex));
  }

  function find() {
    const regex = /.*$/gi;
    setSearch(searchValue);
  }

  useEffect(() => {
    findTags();
    findAuthor();
    findName();
    find();
    setFuseResult(fuse.search(search));
    //console.log(fuseResult);
  }, [searchValue]);

  return (
    <>
      <SearchContext.Provider
        value={{
          searchInput: searchValue,
          searchResults: { name, author, tags },
          changeSearchValue: changeSearchValue,
          sortType: sortValue,
          changeSortType: changeSortType,
        }}
      >
        {props.children}
      </SearchContext.Provider>
    </>
  );
}
