import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Button from '.';

describe('Button', () => {
  it('Should render the medium size button by default', () => {
    renderWithTheme(<Button>Subscribe</Button>);
    expect(screen.getByRole('button', { name: /Subscribe/i })).toHaveStyle({
      height: '4rem',
      'font-size': '1.4rem',
      padding: '0.8rem 3.2rem'
    });
  });

  it('Should render the small size button', () => {
    renderWithTheme(<Button size="small">Subscribe</Button>);
    expect(screen.getByRole('button', { name: /Subscribe/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    });
  });

  it('Should render the large size button', () => {
    renderWithTheme(<Button size="large">Subscribe</Button>);
    expect(screen.getByRole('button', { name: /Subscribe/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem'
    });
  });

  it('Should render the button with full width', () => {
    renderWithTheme(<Button fullWidth>Subscribe</Button>);
    expect(screen.getByRole('button', { name: /Subscribe/i })).toHaveStyle({
      width: '100%'
    });
  });
});
