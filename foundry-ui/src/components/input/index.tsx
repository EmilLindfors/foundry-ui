/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import * as React from "react";
import { useTheme } from "emotion-theming";
import chromaJs from "chroma-js";

export interface InputInterface {
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    color?: "primary" | "secondary" | "warning" | "error" | "success" | "info";
    variant?: "filled" | "outlined" | "simple" | "muted";
    children?: string;
    round?: boolean;
    label?: string;
    name: string;
    value: any;
    register: any;
    type?: string;
    errors: any;
    required: boolean;
    placeholder?: string;
}

const StyledInput: React.FunctionComponent<InputInterface> = ({
    label,
    variant = "outlined",
    color,
    size = "md",
    round,
    name,
    value,
    type = "text",
    errors,
    register,
    required = true,
    placeholder = name,
}) => {
    const theme: any = useTheme();
    const inputColor = color ? theme.colors[color] : "#555"
    const mutedColor = chromaJs(inputColor).desaturate(1).brighten(2.5).css()
    const contrastCoefficient = variant === "muted" ? chromaJs.contrast('white', mutedColor) : chromaJs.contrast('white', inputColor)
    const textColor = contrastCoefficient > 4.5 ? "white" : "black";

    return (
        <div css={css`
        margin: ${theme.spacing[size]} 0;
        `}>
            <label htmlFor={name} css={css`
            padding: 0;
            line-height: 1;
            font-size: 0.9em;
            font-weight: 600;
            data-shrink: 
            transform: translate(14px, 20px) scale(1);
            color: ${errors[name] ? theme.colors.error : "#333"}
            `}>{label}    {required && (
                    <span css={css`
                    padding: 0;
                    margin-left: -5px;
                    line-height: 1;
                    font-size: 0.8em;
                    color: ${errors[name] ? theme.colors.error : "#333"}
                    `}>
                        &thinsp;{'*'}
                    </span>
                )}</label>
            <input
                ref={register({ required: required, maxLength: 30 })}
                placeholder={placeholder}
                aria-invalid={errors[name] ? "true" : "false"}
                aria-describedby={`${name}error`}
                type={type}
                value={value}
                name={name}
                css={css`
        padding: ${theme.spacing[size]};
        box-sizing: content-box;
        min-width: 0;
        width: 100%;
        display: block;
        border-radius: ${round ? theme.spacing[size] : "5px"};
        background-color: ${variant === "filled" ? errors[name] ? chromaJs(theme.colors.error).desaturate(1).brighten(2.5).css() : inputColor : "none"};
        border: ${variant === "outlined" ? errors[name] ? `1px solid ${chromaJs(theme.colors.error).desaturate(1).brighten(1).css()}` : `1px solid ${ chromaJs(inputColor).desaturate(1).brighten(1).css() }` : "none"};
  
       color: ${variant === "filled" ? textColor : "black"};
       &:hover {
        border: ${variant === "outlined" ?  errors[name] ? `1px solid ${theme.colors.error}` : `1px solid ${inputColor}` : "none"};
       }
       &:focus {
        outline: 0;
        border: ${variant === "outlined" ?  errors[name] ? `1px solid ${theme.colors.error}` : `1px solid ${inputColor}` : "none"};
      },
   
        `} />
            {errors[name] && (
                <span id={`${name}error`} style={{ color: "red", margin: 0 }}>{errors[name].type === "required" ? "required" : errors[name].type.message} </span>
            )}
        </div>
    );

}

export default StyledInput;
