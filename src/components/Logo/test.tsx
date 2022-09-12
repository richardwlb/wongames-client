import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import 'jest-styled-components';

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

  it('Should render the component Logo with default size', () => {
    renderWithTheme(<Logo />);
    const wrapper = screen.getByLabelText(/Won games/i).parentElement;

    expect(wrapper).toHaveStyle({
      width: '11rem'
    });
  });

  it('Should render the component Logo when size is passed', () => {
    renderWithTheme(<Logo size="large" />);
    const wrapper = screen.getByLabelText(/Won games/i).parentElement;

    expect(wrapper).toHaveStyle({
      width: '20rem'
    });
  });

  it('should render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />);
    const wrapper = screen.getByLabelText(/Won games/i).parentElement;

    expect(wrapper).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width: 768px)'
    });
  });
});
