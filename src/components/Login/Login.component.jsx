import React, { useCallback, useState, useContext } from 'react';
import AuthContext from '../../state/Auth/AuthContext';
import loginApi from '../../api/login.api';
import useAuth from '../../hooks/useAuth';
import { Error, Input, Title, Buttons, Button, Wrapper, Label } from './Login.styles';

export default function Login({ onClose }) {
  const { login } = useContext(AuthContext);
  const { saveSession } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();

  const handleLogin = useCallback(async () => {
    setError('');
    try {
      if (!username || !password) {
        setError('Please, complete the form');
      } else {
        const user = await loginApi(username, password);
        login(user);
        saveSession(user);
        onClose();
      }
    } catch (err) {
      console.log('Login error', { err });
      setError('Invalid credentials');
    }
  }, [login, onClose, password, username, saveSession]);

  return (
    <Wrapper>
      <Title>Login</Title>
      <Label>Username:</Label>
      <Input
        id="email"
        type="email"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        data-testid="username_input"
      />
      <Label>Password:</Label>
      <Input
        id="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        data-testid="password_input"
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
