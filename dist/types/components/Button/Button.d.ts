import React from 'react';
import { ThemeColor } from '../../global/types';
import '../../style/button.css';
export interface ButtonProps {
    children?: React.ReactNode;
    color?: ThemeColor;
    disabled?: boolean;
    shape?: 'round' | 'square';
    size?: 'small' | 'medium' | 'large';
    buttonStyle?: 'filled' | 'outlined';
    icon?: React.ReactNode;
    label: string;
    visibleLabel?: boolean;
    additionalClass?: string;
    onClick?: () => void;
}
declare const Button: ({ children, color, disabled, shape, size, buttonStyle, icon, label, additionalClass, visibleLabel, onClick, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
