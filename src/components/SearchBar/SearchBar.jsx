import { useState } from "react";
import { SearchBarWrapper, SearchInput } from "./SearchBar.styled";

export const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);
    onSearch(inputValue);
  };

  return (
    <SearchBarWrapper>
      <SearchInput
        className="search-bar"
        type="text"
        placeholder="Search by venue or location..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </SearchBarWrapper>
  );
};
