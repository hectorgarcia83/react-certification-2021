import React, { useState, useContext } from 'react';
import { MdSearch } from 'react-icons/md';
import VideoContext from '../../state/Videos/VideoContext';
import { Wrapper, Icon, Input } from './SearchInput.styles';

function SearchInput() {
  const {
    state: { searchText },
    search,
  } = useContext(VideoContext);
  const [searchValue, setSearchValue] = useState(searchText);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    search(e.target.value);
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
