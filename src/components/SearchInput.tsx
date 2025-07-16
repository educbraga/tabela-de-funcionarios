import React, { useCallback } from "react";
import debounce from "lodash.debounce";
import magnifier from "../assets/icons/magnifier.svg";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = "Pesquisar",
}) => {
  const debouncedOnChange = useCallback(
    debounce((searchValue: string) => {
      onChange(searchValue);
    }, 200),
    [onChange]
  );

  return (
    <div className="search">
      <input
        type="text"
        defaultValue={value}
        onChange={(e) => debouncedOnChange(e.target.value)}
        placeholder={placeholder}
        className="search__input"
      />
      <div className="search__icon-container">
        <img
          src={magnifier}
          alt="Search"
          className="search__icon"
        />
      </div>
    </div>
  );
};

export default SearchInput;
