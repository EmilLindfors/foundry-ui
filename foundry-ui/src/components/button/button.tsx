/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import * as React from "react";
import { useTheme } from "emotion-theming";
import chroma from "chroma-js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


/**
 * @TODO make disable work and loading
 */



export interface Button {
  disabled?: boolean;
  props?: any;
  fullwidth?: boolean;
  spin?: boolean;
  iconLeft?: any;
  iconRight?: any;
  round?: boolean;
  extraMargin?: string;
  type?: any;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  color?: "primary" | "secondary" | "warning" | "error" | "success" | "info";
  variant?: "filled" | "outlined" | "simple";
  children?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}


const Button: React.FunctionComponent<Button> = ({
  children,
  round,
  fullwidth,
  variant = "filled",
  color,
  size = "md",
  onClick,
  iconLeft,
  spin,
  extraMargin,
  type,
  iconRight,
  disabled,
  props,
}) => {
  const theme: any = useTheme();
  const textColor = chroma.contrast('white', chroma(color ? theme.colors[color] : "#555")) > 4.5 ? "white" : "black";

  return (
    <button css={css`
      min-height: auto;
      min-width: auto;
      width: ${fullwidth ? "100%" : "auto"};
      color: ${(variant === "outlined" || variant === "simple") ? color ? theme.colors[color] : "#555" : textColor};
      box-shadow: ${(variant === "outlined" || variant === "simple") ? "none" : color ? `0 2px 2px 0 ${chroma(theme.colors[color])
        .alpha(0.14)
        .css()}, 0 3px 1px -2px ${chroma(theme.colors[color])
          .alpha(0.2)
          .css()}, 0 1px 5px 0 ${chroma(theme.colors[color])
            .alpha(0.12)
            .css()}`
        : "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)"};
      border: ${(variant === "outlined") ? color ? `1px solid ${theme.colors[color]}` : "1px solid #555" : "none"};
      border-radius: ${round ? children ? theme.spacing[size] : "50%" : "3px"};
      position: relative;
      padding: ${children ? `${theme.spacing[size]} calc(${theme.spacing[size]}*2)` : `calc(${theme.spacing[size]}/2)`};
      margin: .3125rem 1px;
      font-size:  ${size ? theme.sizes[size] : "12px"};
      font-weight: 400;
      text-transform: uppercase;
      text-decoration: ${(variant === "simple") ? "underline" : "none"};
      letter-spacing: 0;
      will-change: box-shadow, transform;
      transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      line-height: 1.42857143;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      touch-action: manipulation;
      cursor: pointer;
      background-color: ${(variant === "outlined" || variant === "simple") ? "transparent" : color ? disabled ? chroma(theme.colors[color]).brighten(2.5).css() : theme.colors[color] : "#555"};
      &:hover {
        background-color: ${(variant === "outlined" || variant === "simple") ? chroma(color ? chroma(theme.colors[color]).desaturate(2.5).css() : "#555").brighten(2.9).css() : chroma(color ? theme.colors[color] : "#555").darken(0.2).css()};
        border: ${(variant === "outlined") ? `1px solid ${chroma(color ? theme.colors[color] : "#555")}` : "none"};
        box-shadow:  ${color ? `0 14px 26px -12px  ${chroma(theme.colors[color])
        .alpha(0.42)
        .css()}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${chroma(
          theme.colors[color]
        ).alpha(0.2).css()}`
        : "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"};
         
      }
      &:focus  {
        outline: none; 
      }
      &:active {
        background-color: ${(variant === "outlined" || variant === "simple") ? chroma(color ? chroma(theme.colors[color]).desaturate(2.5).css() : "#555").brighten(1.9).css() : chroma(color ? theme.colors[color] : "#555").brighten(0.2).css()};
      }
      }`}
      type={type}
      {...props}
      disabled={disabled}
      onClick={onClick}>
      <div css={css`
         margin-left: ${children && iconRight ? "5px" : extraMargin || "0"};
         margin-right: ${children && iconLeft ? "5px" : extraMargin || "0"};
         display: flex;
         justify-content: center;
         align-items: center;
    `}>
        {iconLeft && <FontAwesomeIcon icon={iconLeft} spin={spin} css={css`
         font-size: ${size ? theme.sizes[size] : "1.5em"};
         margin: ${children ? "10px" : "0"};
         color: ${(variant === "outlined" || variant === "simple") ? color ? theme.colors[color] : "#555" : textColor};
          `} />
        }
        {children && <span>{children}</span>}
        {iconRight && <FontAwesomeIcon icon={iconRight} spin={spin} css={css`
         font-size: ${size ? theme.sizes[size] : "1.5em"};
         margin-left: ${children ? "10px" : "0"};
         color: ${(variant === "outlined" || variant === "simple") ? color ? theme.colors[color] : "#555" : textColor};
          `} />
        }
      </div>
    </button>
  );
};



export default Button;
