import React from 'react';
import '../../style/select.css';
interface Option {
    value: string | number;
    label: string;
}
export interface SelectProps {
    value?: any;
    type?: 'text' | 'number';
    placeholder?: string;
    disabled?: boolean;
    shape?: 'round' | 'square';
    icon?: React.ReactNode;
    iconPosition?: 'right' | 'left';
    id?: string;
    label: string;
    visibleLabel?: boolean;
    options: Option[];
    additionalClass?: string;
    onChange?: (value: string | number) => void;
}
declare const Select: ({ value, id, type, disabled, placeholder, shape, icon, options, iconPosition, label, additionalClass, visibleLabel, onChange, ...props }: SelectProps) => import("react/jsx-runtime").JSX.Element;
export default Select;
