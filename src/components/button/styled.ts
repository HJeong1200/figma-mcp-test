import styled, { css } from "styled-components";
import type { ButtonVariant } from "./Button";

const variantStyles = {
  primary: css`
    background: #2563eb;
    color: #fff;
    border: none;
    box-shadow: 0px 2px 8px rgba(37, 99, 235, 0.08);
    &:hover {
      background: #1d4fd7;
      box-shadow: 0px 4px 12px rgba(37, 99, 235, 0.12);
    }
    &:active {
      background: #1741b6;
    }
    &:disabled {
      background: #bcd0fa;
      color: #fff;
      cursor: not-allowed;
      box-shadow: none;
    }
  `,
  secondary: css`
    background: #fff;
    color: #2563eb;
    border: 1px solid #2563eb;
    box-shadow: 0px 2px 8px rgba(37, 99, 235, 0.04);
    &:hover {
      background: #f5f8ff;
      box-shadow: 0px 4px 12px rgba(37, 99, 235, 0.08);
    }
    &:active {
      background: #e6edfb;
    }
    &:disabled {
      color: #bcd0fa;
      border-color: #bcd0fa;
      cursor: not-allowed;
      box-shadow: none;
    }
  `,
  danger: css`
    background: #e5484d;
    color: #fff;
    border: none;
    box-shadow: 0px 2px 8px rgba(229, 72, 77, 0.08);
    &:hover {
      background: #c13b3f;
      box-shadow: 0px 4px 12px rgba(229, 72, 77, 0.12);
    }
    &:active {
      background: #a72f33;
    }
    &:disabled {
      background: #f3bfc0;
      color: #fff;
      cursor: not-allowed;
      box-shadow: none;
    }
  `,
};

export const StyledButton = styled.button<{ variant?: ButtonVariant }>`
  font-family: "Inter", "SF Pro", sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 1.5;
  border-radius: 8px;
  padding: 0 20px;
  height: 44px;
  cursor: pointer;
  transition: background 0.15s, box-shadow 0.15s;
  outline: none;
  ${(props) => variantStyles[props.variant || "primary"]}
`;
