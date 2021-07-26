import styled from 'styled-components';

export const HeaderBar = styled.div`
  height: 64px;
  background-color: #1c5476;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%),
    0px 1px 10px 0px rgb(0 0 0 / 12%);
  display: flex;
  padding: 0 30px 0 15px;
  align-items: center;
`;

export const Button = styled.button`
  padding-top: 5px;
  font-size: 24px;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  color: white;
`;

export const SearchInputWrapper = styled.div`
  margin-left: 50px;
`;

export const ThemeSwitch = styled.div``;

export const Space = styled.div`
  flex-grow: 1;
`;

export const ToggleText = styled.label`
  margin-left: 10px;
  color: white !important;
  font-size: 17px !important;
`;

export const Avatar = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: #bdbdbd;
  color: white;
  margin-left: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
