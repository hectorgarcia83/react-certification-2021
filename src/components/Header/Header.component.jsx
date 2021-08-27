import React, { useContext, useState } from 'react';
import { Switch, Dialog } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Login from '../Login';
import ThemeContext from '../../state/Theme/ThemeContext';
import AuthContext from '../../state/Auth/AuthContext';

import {
  HeaderBar,
  Avatar,
  Space,
  ToggleText,
  SearchInputWrapper,
  Toggle,
  Menu,
  MenuItem,
  BtnMenu,
} from './Header.styles';
import SearchInput from '../SearchInput';
import avatar from '../../assets/avatar.svg';

function Header() {
  const { state, dispatch } = useContext(ThemeContext);
  const { state: stateAuth, dispatch: dispatchAuth } = useContext(AuthContext);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [openModalLogin, setOpenModalLogin] = useState(false);

  const handleCloseLoginForm = () => {
    setOpenModalLogin(false);
  };

  const toggleChecked = (event) => {
    setSwitchChecked(event.target.checked);
    dispatch({
      type: 'SWITCH_THEME',
    });
  };

  const handleLogOut = () => {
    dispatchAuth({
      type: 'LOG_OUT',
      payload: undefined,
    });
  };

  const handleClickAvatar = () => {
    if (stateAuth.user) {
      handleLogOut();
    } else {
      setOpenModalLogin(true);
    }
  };

  const handleLogin = () => {
    setOpenModalLogin(true);
  };

  return (
    <>
      <HeaderBar theme={state.theme} data-testid="headerBar">
        <SearchInputWrapper>
          <SearchInput />
        </SearchInputWrapper>
        {stateAuth.user && (
          <Menu>
            <MenuItem>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/favorites">Favorites</Link>
            </MenuItem>
            <MenuItem>
              <BtnMenu onClick={handleLogOut}>Logout</BtnMenu>
            </MenuItem>
          </Menu>
        )}
        {!stateAuth.user && (
          <Menu>
            <MenuItem>
              <BtnMenu onClick={handleLogin}>Login</BtnMenu>
            </MenuItem>
          </Menu>
        )}
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
        <Avatar onClick={(e) => handleClickAvatar(e)}>
          <img
            src={stateAuth.user ? stateAuth.user.avatarUrl : avatar}
            alt="avatar"
            width="20px"
            height="20px"
            data-testid="avatar"
          />
        </Avatar>
      </HeaderBar>
      <Dialog
        open={openModalLogin}
        onClose={handleCloseLoginForm}
        aria-labelledby="form-dialog-title"
      >
        <Login onClose={handleCloseLoginForm} />
      </Dialog>
    </>
  );
}

export default Header;
