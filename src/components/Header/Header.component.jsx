import React, { useContext, useState } from 'react';
import { Switch, Dialog } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Login from '../Login';
import ThemeContext from '../../state/Theme/ThemeContext';
import AuthContext from '../../state/Auth/AuthContext';
import useAuth from '../../hooks/useAuth';
import ThemeTypes from '../../theme';

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
  const {
    state: { theme },
    switchTheme,
  } = useContext(ThemeContext);
  const {
    state: { user },
    logout,
  } = useContext(AuthContext);
  const [switchChecked, setSwitchChecked] = useState(theme === ThemeTypes.dark);
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const { cleanSession } = useAuth();

  const handleCloseLoginForm = () => {
    setOpenModalLogin(false);
  };

  const toggleChecked = (event) => {
    setSwitchChecked(event.target.checked);
    switchTheme();
  };

  const handleLogOut = () => {
    logout();
    cleanSession();
  };

  const handleClickAvatar = () => {
    if (user) {
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
      <HeaderBar theme={theme} data-testid="headerBar">
        <SearchInputWrapper>
          <SearchInput />
        </SearchInputWrapper>
        {user && (
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
        {!user && (
          <Menu>
            <MenuItem>
              <Link to="/">Home</Link>
            </MenuItem>
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
            src={user ? user.avatarUrl : avatar}
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
