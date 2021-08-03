import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { Wrapper, Icon, Input } from './SearchInput.styles';

function SearchInput({ onSearch }) {
  const [searchValue, setSearchValue] = useState('Wizeline');

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <Wrapper>
      <Icon>
        <MdSearch />
      </Icon>
      <Input placeholder="Search" onChange={handleSearch} value={searchValue} />
    </Wrapper>
  );
}

export default SearchInput;
