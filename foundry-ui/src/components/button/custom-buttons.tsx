import * as React from "react";
import { Button } from '..';
import { faAngleRight, faTimes, faCircleNotch } from '@fortawesome/pro-regular-svg-icons';

export interface Button {
    /**
     * The size of the button
     */
    props?: any;
    isSubmitting?: boolean;
    disabled?: boolean;
    fullwidth?: boolean;
    onlyIcon?: boolean;
    iconLeft?: any;
    iconRight?: any;
    round?: boolean;
    extraMargin?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    color?: "primary" | "secondary" | "warning" | "error" | "success" | "info";
    variant?: "filled" | "outlined" | "simple";
    children?: string;
    onSubmit?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const SubmitButton: React.FunctionComponent<Button> = ({ onSubmit, color, size, disabled, props, isSubmitting }) => {

    return <Button color={color ? color : 'primary'} onClick={onSubmit} size={size} type="submit" spin={isSubmitting} iconRight={isSubmitting ? faCircleNotch : faAngleRight} disabled={isSubmitting} {...props}>Submit</Button>
}

export const CancelButton: React.FunctionComponent<Button> = ({ size, variant, onlyIcon, disabled, ...props }) => {
    if (onlyIcon) {
        return <Button color='error' size={size} disabled={disabled}  extraMargin="3px" iconRight={faTimes} {...props} />
    }
    else {
        return <Button color='error' size={size} disabled={disabled}  extraMargin="3px" iconRight={faTimes} {...props}>Cancel</Button>
    }
}