import React, { useContext, useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { Switch } from '@material-ui/core';
import ThemeContext from '../../state/Theme/ThemeContext';
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

function Header() {
  const { state, dispatch } = useContext(ThemeContext);
  const [switchChecked, setSwitchChecked] = useState(false);

  const toggleChecked = (event) => {
    setSwitchChecked(event.target.checked);
    dispatch({
      type: 'SWITCH_THEME',
    });
  };

  return (
    <HeaderBar theme={state.theme} data-testid="headerBar">
      <Button>
        <MdMenu />
      </Button>
      <SearchInputWrapper>
        <SearchInput />
      </SearchInputWrapper>
      <Space />
      <Toggle data-testid="toggle">
        <Switch
          name="checkedB"
          color="secondary"
          id="toggle"
          checked={switchChecked}
          onChange={toggleChecked}
        />
        <ToggleText htmlFor="toggle">Dark mode</ToggleText>
      </Toggle>
      <Avatar>
        <img src={avatar} alt="avatar" width="20px" height="20px" data-testid="avatar" />
      </Avatar>
    </HeaderBar>
  );
}

export default Header;
