import React from 'react';
import styled from 'styled-components';
import {
  buttonBaseStyle,
  buttonTypePrimaryStyle,
  buttonTypeSecondaryStyle,
} from './buttonStyles';

export type ButtonType = 'primary' | 'secondary';
export type ButtonProps = {
  /**
   * Which type of button is it?
   */
  type?: ButtonType;
  /**
   * Which color should it be
   */
  backgroundColor?: string;
  /**
   * The children inside the button
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

/**
 * Component that renders an interactive button.
 */
export const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  backgroundColor,
  label,
  onClick,
}) => {
  return (
    <StyledButton type={type} style={{ backgroundColor }} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

type StyledButtonProps = {
  type?: ButtonType;
};

const StyledButton = styled.a<StyledButtonProps>`
  ${buttonBaseStyle}

  /* Type */
  ${(props) => props.type === 'primary' && buttonTypePrimaryStyle}
  ${(props) => props.type === 'secondary' && buttonTypeSecondaryStyle}
`;
