import { render, screen } from '@testing-library/react';

import Button from '.';

describe('Button', () => {
  it('Should render the component Button', () => {
    const { container } = render(<Button />);

    expect(
      screen.getByRole('heading', { name: /Button/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
