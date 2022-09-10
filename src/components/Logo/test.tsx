import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Logo from '.';

describe('Logo', () => {
  it('Should render the component Logo by Default', () => {
    renderWithTheme(<Logo />);
    const wrapper = screen.getByLabelText(/Won games/i).parentElement;

    expect(wrapper).toHaveStyle({
      color: '#FAFAFA'
    });
  });

  it('Should render the component Logo when color is passed', () => {
    renderWithTheme(<Logo color="black" />);
    const wrapper = screen.getByLabelText(/Won games/i).parentElement;

    expect(wrapper).toHaveStyle({
      color: '#030517'
    });
  });
});
