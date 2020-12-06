import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonIcon from '..';

test('should render ButtonIcon', () => {
  render(<ButtonIcon text="logar" />);

  const textElement = screen.getByText('logar');
  const iconElement = screen.getByTestId('arrow-icon');
  expect(textElement).toBeInTheDocument();
  expect(iconElement).toBeInTheDocument();
});
