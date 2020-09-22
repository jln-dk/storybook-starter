import { css } from 'styled-components';

/**
 * Base styling for buttons
 */
export const buttonBaseStyle = css`
  display: inline-block;
  position: relative;
  overflow: hidden;
  z-index: 0;
  padding: 16px 20px 15px;
  border-radius: 3px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);
  border-width: 0;
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration: none;
  text-align: center;
  line-height: normal;
  transition: color 0.5s ease-out;
  white-space: nowrap;
  cursor: pointer;

  &::before {
    transition: all 0.5s ease-out;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: -10px;
    bottom: 0;
    width: 0;
    background-color: #0768cc;
    transform: skewX(-20deg);
    z-index: -1;
  }

  &:hover,
  &:focus {
    &::before {
      width: 125%;
    }
  }
`;

/**
 * Additional style for button of type "primary".
 * Must be combined with base style.
 */
export const buttonTypePrimaryStyle = css`
  color: #fff;
  background-color: #006fe2;
`;

/**
 * Additional style for button of type "secondary".
 * Must be combined with base style.
 */
export const buttonTypeSecondaryStyle = css`
  color: #000;
  background-color: #fff;

  &::before {
    background-color: #0768cc;
  }
  &:hover,
  &:focus {
    color: #fff;
  }
`;
