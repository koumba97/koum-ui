import React from 'react';
import '../../style/input-wrapper.css';
export interface InputWrapperProps {
    value?: string | number;
    type?: 'text' | 'number';
    disabled?: boolean;
    shape?: 'round' | 'square';
    size?: 'small' | 'medium' | 'large';
    icon?: React.ReactNode;
    children: React.ReactNode;
    iconPosition?: 'right' | 'left';
    width?: '100%' | 'max-content';
    id?: string;
    element?: 'div' | 'button';
    label: string;
    visibleLabel?: boolean;
    additionalClass?: string;
    onChange?: (value: string | number) => void;
    onClick?: () => void;
}
declare const InputWrapper: ({ value, id, type, disabled, shape, size, width, icon, iconPosition, label, additionalClass, visibleLabel, element, children, onChange, onClick, ...props }: InputWrapperProps) => import("react/jsx-runtime").JSX.Element;
export default InputWrapper;
