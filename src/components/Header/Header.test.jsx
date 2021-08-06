import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header.component';

beforeEach(() => {
  render(<Header />);
});

describe('Header Component', () => {
  test('Render BurgerMenu button', () => {
    const burgerMenuBtn = screen.getByRole('button');
    expect(burgerMenuBtn).toBeInTheDocument();
  });

  test('Render searchfield component', () => {
    const searchField = screen.getByRole('textbox');
    expect(searchField).toBeInTheDocument();
  });

  test('Render Switch component', () => {
    const switchToggle = screen.getByTestId('toggle');
    expect(switchToggle).toBeInTheDocument();
  });

  test('Render Image avatar', () => {
    const avatar = screen.getByTestId('avatar');
    expect(avatar).toBeInTheDocument();
  });
});
