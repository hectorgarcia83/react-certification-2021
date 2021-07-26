import React from 'react';
import { MdMenu } from 'react-icons/md';
import { Checkbox } from 'semantic-ui-react';

import {
  Button,
  HeaderBar,
  Avatar,
  Space,
  ToggleText,
  SearchInputWrapper,
} from './Header.styles';
import SearchInput from '../SearchInput';
import avatar from '../../assets/avatar.svg';

function Header() {
  return (
    <HeaderBar>
      <Button>
        <MdMenu />
      </Button>
      <SearchInputWrapper>
        <SearchInput />
      </SearchInputWrapper>
      <Space />
      <Checkbox toggle id="toggle" />
      <ToggleText htmlFor="toggle">Dark mode</ToggleText>
      <Avatar>
        <img src={avatar} alt="avatar" width="20px" height="20px" />
      </Avatar>
    </HeaderBar>
  );
}

export default Header;
