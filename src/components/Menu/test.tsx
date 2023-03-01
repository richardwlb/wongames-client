import { render, screen } from '@testing-library/react';

import Menu from '.';

describe('Menu', () => {
  it('Should render the component Menu', () => {
    const { container } = render(<Menu />);

    expect(
      screen.getByRole('heading', { name: /Menu/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
