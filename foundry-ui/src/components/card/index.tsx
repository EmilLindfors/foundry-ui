/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import * as React from "react";
import { useTheme } from "emotion-theming";
import chromaJs from "chroma-js";

export interface Card {
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    color?: "primary" | "secondary" | "warning" | "error" | "success" | "info";
    variant?: "filled" | "outlined" | "simple" | "muted";
    children?: string;
    round?: boolean;
    noShadow?: boolean;
}

const Card: React.FunctionComponent<Card> = ({
    children,
    variant = "filled",
    color,
    size = "md",
    round,
    noShadow,
}) => {
    const theme: any = useTheme();
    const cardColor = color ? theme.colors[color] : "#555"
    const mutedColor = chromaJs(cardColor).desaturate(1).brighten(2.5).css()
    const contrastCoefficient = variant === "muted" ? chromaJs.contrast('white', mutedColor) : chromaJs.contrast('white', cardColor)
    const textColor = contrastCoefficient > 4.5 ? "white" : "black";

    switch (variant) {
        case "filled":
            return (
                <div
                    css={css`
        padding: ${theme.spacing[size]};
        border-radius: ${round ? theme.spacing[size] : "5px"};
        background-color: ${cardColor};
        margin: ${theme.spacing[size]};
        box-shadow: ${noShadow ? "none" : `0 2px 2px 0 ${chromaJs(cardColor)
                            .alpha(0.14)
                            .css()}, 0 3px 1px -2px ${chromaJs(cardColor)
                                .alpha(0.2)
                                .css()}, 0 1px 5px 0 ${chromaJs(cardColor)
                                    .alpha(0.12)
                                    .css()}`};
       color: ${textColor};
        `}>
                    {children}
                    <div css={css`
                color: ${contrastCoefficient > 4.5 ? chromaJs(cardColor).desaturate(1).brighten(2.5).css() : chromaJs(cardColor).desaturate(1).darken(2.5).css()};
            `}>
                        muted color
            </div>
                </div>
            );
        case "outlined":
            return (

                <div
                    css={css`
                padding: ${theme.spacing[size]};
                border-radius: ${round ? theme.spacing[size] : "5px"};
                border: 1px solid  ${cardColor};
                background-color: "transparent";
                margin: ${theme.spacing[size]};
               color: ${cardColor};
                `}>
                    {children}
                    <div css={css`
                      color: ${contrastCoefficient > 4.5 ? chromaJs(cardColor).desaturate(1).brighten(1).css() : chromaJs(cardColor).desaturate(1).darken(2.5).css()};
                    `}>
                        muted color
                    </div>
                </div>

            );
        case "muted":
            return (

                <div
                    css={css`
                        padding: ${theme.spacing[size]};
                        border-radius: ${round ? theme.spacing[size] : "5px"};
                        background-color: ${mutedColor};
                        margin: ${theme.spacing[size]};
                        box-shadow: ${noShadow ? "none" : `0 2px 2px 0 ${chromaJs(mutedColor)
                            .alpha(0.14)
                            .css()}, 0 3px 1px -2px ${chromaJs(mutedColor)
                                .alpha(0.2)
                                .css()}, 0 1px 5px 0 ${chromaJs(mutedColor)
                                    .alpha(0.12)
                                    .css()}`};
                       color: ${textColor};
                        `}>
                    {children}
                    <div css={css`
                               color: ${contrastCoefficient > 4.5 ? chromaJs(cardColor).desaturate(1).brighten(2.5).css() : chromaJs(cardColor).desaturate(1).darken(1).css()};
                            `}>
                        muted color
                            </div>
                </div>

            );
        case "simple":
            return (

                <div
                    css={css`
                                padding: ${theme.spacing[size]};
                                margin: ${theme.spacing[size]};
                                border-radius: ${round ? theme.spacing[size] : "5px"};
                                background-color: transparent;
                               color: ${textColor};
                               box-shadow: ${noShadow ? "none" : `0 2px 2px 0 ${chromaJs(cardColor)
                            .alpha(0.14)
                            .css()}, 0 3px 1px -2px ${chromaJs(cardColor)
                                .alpha(0.2)
                                .css()}, 0 1px 5px 0 ${chromaJs(cardColor)
                                    .alpha(0.12)
                                    .css()}`};
                                `}>
                    {children}
                    <div css={css`
                                      color: ${mutedColor};
                                    `}>
                        muted color
                                    </div>
                </div>

            );
        default: return (
            <div
                css={css`
        padding: ${theme.spacing[size]};
        border-radius: ${round ? theme.spacing[size] : "5px"};
        background-color: ${cardColor};
       color: ${textColor};
        `}>
                {children}
                <div css={css`
              color: ${mutedColor};
            `}>
                    muted color
            </div>
            </div>
        )
    }
}

export default Card;
