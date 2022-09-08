import { render, screen } from '@testing-library/react';

import Logo from '.';

describe('Logo', () => {
  it('Should render the component Logo', () => {
    const { container } = render(<Logo />);

    expect(
      screen.getByRole('heading', { name: /Logo/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
