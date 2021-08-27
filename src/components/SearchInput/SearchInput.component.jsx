import React, { useState, useContext } from 'react';
import { MdSearch } from 'react-icons/md';
import VideoContext from '../../state/Videos/VideoContext';
import { Wrapper, Icon, Input } from './SearchInput.styles';

function SearchInput() {
  const { state, dispatch } = useContext(VideoContext);
  const [searchValue, setSearchValue] = useState(state.searchText);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    dispatch({
      type: 'SEARCH',
      payload: e.target.value,
    });
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
