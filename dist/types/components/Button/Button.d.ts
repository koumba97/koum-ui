import React from 'react';
import { ThemeColor } from '../../global/types';
import '../../style/button.scss';
export interface ButtonProps {
    children?: React.ReactNode;
    color?: ThemeColor;
    disabled?: boolean;
    shape?: 'round' | 'square';
    size?: 'small' | 'medium' | 'large';
    style?: 'filled' | 'outlined';
    icon?: React.ReactNode;
    label: string;
    visibleLabel?: boolean;
    onClick?: () => void;
}
declare const Button: ({ children, color, disabled, shape, size, style, icon, label, visibleLabel, onClick, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
