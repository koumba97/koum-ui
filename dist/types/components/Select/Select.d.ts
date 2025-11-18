import React from 'react';
import '../../style/select.css';
interface Option {
    value: string | number;
    label: string;
}
export interface SelectProps {
    value?: {
        label: string;
        value: string;
    };
    type?: 'text' | 'number';
    placeholder?: string;
    disabled?: boolean;
    shape?: 'round' | 'square';
    icon?: React.ReactNode;
    iconPosition?: 'right' | 'left';
    width?: '100%' | 'max-content';
    id?: string;
    label: string;
    visibleLabel?: boolean;
    options: Option[];
    additionalClass?: string;
    onChange?: (value: string | number) => void;
}
declare const Select: ({ value, id, type, disabled, placeholder, shape, icon, options, iconPosition, width, label, additionalClass, visibleLabel, onChange, ...props }: SelectProps) => import("react/jsx-runtime").JSX.Element;
export default Select;
