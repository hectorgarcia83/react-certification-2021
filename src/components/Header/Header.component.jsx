import React from 'react';
import { MdMenu } from 'react-icons/md';
import { Switch } from '@material-ui/core';

import {
  Button,
  HeaderBar,
  Avatar,
  Space,
  ToggleText,
  SearchInputWrapper,
  Toggle,
} from './Header.styles';
import SearchInput from '../SearchInput';
import avatar from '../../assets/avatar.svg';

function Header({ onSearch }) {
  return (
    <HeaderBar data-testid="headerBar">
      <Button>
        <MdMenu />
      </Button>
      <SearchInputWrapper>
        <SearchInput onSearch={onSearch} />
      </SearchInputWrapper>
      <Space />
      <Toggle data-testid="toggle">
        <Switch name="checkedB" color="primary" id="toggle" />
        <ToggleText htmlFor="toggle">Dark mode</ToggleText>
      </Toggle>
      <Avatar>
        <img src={avatar} alt="avatar" width="20px" height="20px" data-testid="avatar" />
      </Avatar>
    </HeaderBar>
  );
}

export default Header;
