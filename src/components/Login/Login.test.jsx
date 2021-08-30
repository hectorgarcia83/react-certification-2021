import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login.component';
import AuthProvider from '../../state/Auth/AuthProvider';

beforeEach(() => {
  render(
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
});

describe('Login Component', () => {
  test('Render username input', () => {
    const usernameField = screen.getByTestId('username_input');
    expect(usernameField).toBeInTheDocument();
  });

  test('Render password input', () => {
    const passwordField = screen.getByTestId('password_input');
    expect(passwordField).toBeInTheDocument();
  });
});
