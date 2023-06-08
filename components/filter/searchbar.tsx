import { useState, useContext, useEffect } from "react";
import {
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { SearchIcon, XIcon } from "@primer/octicons-react";

import { SearchContext } from "../provider/searchprovider";

// TODO: Reimplement the searchbar
// TODO: Implement search by attribute (e.g. dropped, community, etc)
// TODO: Implement a trending option

export default function Searchbar() {
  const value = useContext(SearchContext);
  const [searchInput, setSearchInput] = useState("");
  const clearSearch = () => value.changeSearchValue("");

  function handleChange(event) {
    setSearchInput(event.target.value);
  }

  useEffect(() => {
    value.changeSearchValue(searchInput);
  }, [searchInput]);

  return (
    <>
      <InputGroup size="lg" minW="320">
        <InputLeftElement pointerEvents="none">
          <SearchIcon key="1" size={24} />
        </InputLeftElement>

        <Input
          value={searchInput}
          onChange={handleChange}
          variant="filled"
          placeholder="Search for your favourite Petr"
        />
        <InputRightElement>
          <Button variant="none" onClick={clearSearch}>
            <XIcon size={24} />
          </Button>
        </InputRightElement>
      </InputGroup>
    </>
  );
}
