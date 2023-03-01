import * as S from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: JSX.Element;
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  children,
  icon,
  size = 'medium',
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <S.wrapper fullWidth={fullWidth} hasIcon={!!icon} size={size} {...props}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.wrapper>
);

export default Button;
