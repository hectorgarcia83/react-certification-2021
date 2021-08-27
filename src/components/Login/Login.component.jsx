import React, { useCallback, useState, useContext } from 'react';
import AuthContext from '../../state/Auth/AuthContext';
import loginApi from '../../api/login.api';
import { Error, Input, Title, Buttons, Button, Wrapper, Label } from './Login.styles';

export default function Login({ onClose }) {
  const { dispatch } = useContext(AuthContext);
  const [username, setUsername] = useState('wizeline');
  const [password, setPassword] = useState('Rocks!');
  const [error, setError] = useState();

  const handleLogin = useCallback(async () => {
    setError('');
    try {
      if (!username || !password) {
        setError('Please, complete the form');
      } else {
        const user = await loginApi(username, password);
        dispatch({
          type: 'LOG_IN',
          payload: user,
        });
        onClose();
      }
    } catch (err) {
      console.log('Login error', { err });
      setError('Invalid credentials');
    }
  }, [dispatch, onClose, password, username]);

  return (
    <Wrapper>
      <Title>Login</Title>
      <Label>Username:</Label>
      <Input
        id="email"
        type="email"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <Label>Password:</Label>
      <Input
        id="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      {error && <Error>{error}</Error>}
      <Buttons>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleLogin} color="primary">
          Login
        </Button>
      </Buttons>
    </Wrapper>
  );
}
