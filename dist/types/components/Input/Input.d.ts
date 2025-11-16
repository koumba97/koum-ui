import React from 'react';
import { KoumThemeColor } from '../../global/types';
import '../../style/input.css';
export interface InputProps {
    value?: string | number;
    type?: 'text' | 'number';
    placeholder?: string;
    color?: KoumThemeColor;
    disabled?: boolean;
    shape?: 'round' | 'square';
    size?: 'small' | 'medium' | 'large';
    icon?: React.ReactNode;
    iconPosition?: 'right' | 'left';
    id?: string;
    label: string;
    visibleLabel?: boolean;
    additionalClass?: string;
    onChange?: (value: string | number) => void;
}
declare const Input: ({ value, id, color, type, disabled, placeholder, shape, size, icon, iconPosition, label, additionalClass, visibleLabel, onChange, ...props }: InputProps) => import("react/jsx-runtime").JSX.Element;
export default Input;
