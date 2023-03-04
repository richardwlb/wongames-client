import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Menu from '.';

describe('Menu', () => {
  it('should render the component Menu', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/Open Menu/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/Search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Open Shopping Cart/i)).toBeInTheDocument();
  });

  it('should handle the open/close menu', () => {
    renderWithTheme(<Menu />);

    // Seleciona Menu
    const fullMenuElement = screen.getByRole('navigation', { hidden: true });

    // Verificar se esta fechado
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });

    // Abre Menu e verifica se esta aberto
    fireEvent.click(screen.getByLabelText(/Open Menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
    expect(fullMenuElement).toHaveStyle({ opacity: 1 });

    // Fecha Menu e verifica se fechou
    fireEvent.click(screen.getByLabelText(/Close Menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
  });
});
